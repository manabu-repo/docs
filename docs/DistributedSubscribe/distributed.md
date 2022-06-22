# Distributed

### State 1

> 前端订阅，发送事件，后端做状态同步。

### State 2

> 后端做状态存储、订阅，前端对齐状态恢复。

#### 2.1 状态机

```json
// save
{
  "id": "",
  "systemTime": "currentTime",
  "playerTime": 0,
  "ratio": 1,
  "state": "NONE",
  "userData": "{}"
}
```

- `create`

```json
{
  "id": "id",
  "systemTime": "",
  "playerTime": 0,
  "ratio": 1,
  "state": "NONE",
  "userData": "{}"
}
```

- `start`

```json
{
  "id": "id",
  "systemTime": "currentTime",
  "playerTime": 0,
  "ratio": 1,
  "state": "PLAYING"
}
```

- `join`

```json
// find
// currentPlayerTime = playerTime + ratio * (currentTime - systemTime)
{
  "id": "id",
  "systemTime": "currentTime",
  "playerTime": "currentPlayerTime",
  "ratio": 1,
  "state": "PLAYING"
}
```

- `pause`

```json
{
  "id": "id",
  "systemTime": "currentTime",
  "state": "PAUSE"
}
```

- `contniue`

```json
{
  "id": "id",
  "systemTime": "currentTime",
  "state": "CONTNIUE"
}
```

- `stop`

```json
{
  "id": "id",
  "systemTime": "currentTime",
  "playerTime": 0,
  "state": "STOP"
}
```

- `final`

```json
{
  "id": "id",
  "systemTime": "currentTime",
  "state": "FINAL"
}
```

#### 2.2 状态恢复

```js
 // 开始
async onStart() {
  this.$nipApp.rxbus.next({
    type: 'scene-event-control-play',
  });
  await this.scheduleRevert('start');
},

// 暂停
async onPause() {
  this.$nipApp.rxbus.next({
    type: 'scene-event-control-pause',
  });
  await this.scheduleRevert('pause');
},

// 结束
async onStop() {
  this.$nipApp.rxbus.next({
    type: 'scene-event-control-stop',
  });
  await this.scheduleRevert('stop');
},
```

```js
// 进度恢复
async scheduleRevert(entrance) {
  const plot = await findScenePlotById(this, this.activePlotParse.id);
  if (!plot) return;

  const setStart = async () => {
    await this.setState({ id: plot.id, state: 'PLAYING' });
  };

  const setPlaying = async () => {
    if (entrance === 'start') await setJoin();

    if (entrance === 'pause') await setPause();

    if (entrance === 'stop') await setStop();
  };

  const setJoin = async () => {
    const time = this.computedTimeToRevert(plot);
    await this.setState({ id: plot.id, playerTime: time });
  };

  const setPause = async () => {
    await this.setState({ id: plot.id, state: 'PAUSED' });
  };

  const setContinue = async () => {
    await this.setState({ id: plot.id, state: 'PLAYING' });
  };

  const setStop = async () => {
    await this.setState({ id: plot.id, state: 'STOPPED', playerTime: 0 });
  };

  const setChange = async () => {
    if (entrance === 'start') await setStart();

    if (entrance === 'pause') await setContinue();

    if (entrance === 'stop') await setStop();
  };

  const useState = {
    ['NONE']: setStart,
    ['PLAYING']: setPlaying,
    ['PAUSED']: setChange,
    ['STOPPED']: setChange,
  };

  useState[plot.state]();
},

// computed time
computedTimeToRevert(plot) {
  const diff = moment().diff(moment(Number(plot.systemTime)));
  const total = this.graph.player.getEndTime() / 1000;
  const duration = moment.duration(diff).asSeconds() % total;
  const time = (plot.playerTime + plot.ratio * duration) % total;
  this.setPlayerTime(time * 1000);
  return time;
},

async setState(props) {
  const params = {
    systemTime: Date.parse(new Date()).toString(),
    ...props,
  };
  await saveScenePlot(this, params);
},
```

#### 2.3 订阅同步

```js
// 订阅
subscribe() {
  if (!this.activePlotParse) return;
  const _this = this;

  const obs = subscribeState(this, this.activePlotParse.id);
  const sub = obs.subscribe({
    next({ data }) {
      const result = useObjectFilter(data.subscribeState, item => item !== null);
      _this.handleStateChange(result);
    },
  });
  this.observer.push(sub);
},

// 取消订阅
async unsubscribe() {
  await unsubscribeState(this, this.activePlotParse.id);
  this.observer.forEach(o => o.unsubscribe());
  this.observer = [];
},

// 订阅时状态恢复
handleStateChange(obj) {
  if (obj.state) {
    const setStart = () => {
      this.$nipApp.rxbus.next({
        type: 'scene-event-control-play',
      });
    };

    const setPause = () => {
      this.$nipApp.rxbus.next({
        type: 'scene-event-control-pause',
      });
    };

    const setStop = () => {
      this.$nipApp.rxbus.next({
        type: 'scene-event-control-stop',
      });
    };

    const STATE = {
      ['PLAYING']: setStart,
      ['PAUSED']: setPause,
      ['STOPPED']: setStop,
    };

    STATE[obj.state].call(this);
  }

  if (obj.ratio) {
    this.graph.player.setRatio(obj.ratio);
  }
},
```

#### 2.4 接口定义

```js
const findAllScenePlot = async vm => {
  let {
    data: { findAllScenePlot },
  } = await vm.$apollo.query({
    query: FIND_ALL_SCENE_PLOT,
    variables: {
      page: {},
    },
    fetchPolicy: 'no-cache',
    client: 'sceneClient',
  });

  return findAllScenePlot;
};

const findScenePlotById = async (vm, id) => {
  let {
    data: { findScenePlotById },
  } = await vm.$apollo.query({
    query: FIND_SCENE_PLOT_BY_ID,
    variables: {
      id,
    },
    fetchPolicy: 'no-cache',
    client: 'sceneClient',
  });

  return findScenePlotById;
};

const saveScenePlot = async (vm, plot) => {
  let {
    data: { saveScenePlot },
  } = await vm.$apollo.mutate({
    mutation: SAVE_SCENE_PLOT,
    variables: {
      scenePlot: plot,
    },
    fetchPolicy: 'no-cache',
    client: 'sceneClient',
  });

  return saveScenePlot;
};

const deleteScenePlotById = async (vm, id) => {
  let {
    data: { deleteScenePlotById },
  } = await vm.$apollo.mutate({
    mutation: DELETE_SCENE_PLOT_BY_ID,
    variables: {
      id: id,
    },
    fetchPolicy: 'no-cache',
    client: 'sceneClient',
  });

  return deleteScenePlotById;
};

const unsubscribeState = async (vm, id) => {
  let {
    data: { unsubscribeState },
  } = await vm.$apollo.mutate({
    mutation: UNSUBSCRIBE_STATE,
    variables: { id: id },
    fetchPolicy: 'no-cache',
    client: 'sceneClient',
  });

  return unsubscribeState;
};

const subscribeState = (vm, id) => {
  const observer = vm.$apollo.subscribe({
    query: SUBSCRIBR_STATE,
    variables: {
      id: id,
    },
    fetchPolicy: 'no-cache',
    client: 'sceneClient',
  });

  return observer;
};
```
