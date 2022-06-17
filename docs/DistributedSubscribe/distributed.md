# Distributed

### State 1

> 前端订阅，发送事件，后端做状态同步。

### State 2

> 后端做状态存储、订阅，前端对齐状态恢复。

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
