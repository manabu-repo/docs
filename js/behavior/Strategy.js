// 策略模式的定义：定义一系列算法并封装，使他们可以相互替换

// 策略模式实现奖金计算
const strategies = {
  'S': function (salary) {
    return salary * 4
  },
  'A': function (salary) {
    return salary * 3
  },
  'B': function (salary) {
    return salary * 2
  }
}

const calculateBonus = function (level, salary) {
  return strategies[level](salary)
}

// 缓动动画
const tween = {
  /**
   * @param {消耗时间} t
   * @param {原始位置} b
   * @param {目标位置} c
   * @param {持续总时间} d
   * @return {当前位置}
   */
  linear: function (t, b, c, d) {
    return c * t / d + b;
  },

  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },

  strongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },

  strongEaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },

  sineaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },

  sineaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t + 1) + b;
  }
}

const Animate = function (dom) {
  this.dom = dom;
  this.startTime = 0;
  this.startPos = 0;
  this.endPos = 0;
  this.propertyName = null;
  this.easing = null;
  this.duration = null;
}

Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date;
  this.startPos = this.dom.getBoundingClientRect()[propertyName];
  this.propertyName = propertyName;
  this.endPos = endPos;
  this.duration = duration;
  this.easing = tween[easing];

  const self = this;
  const timeId = setInterval(() => {
    if (self.step() === false) {
      clearInterval(timeId);
    }
  }, 19)
}

Animate.prototype.step = function () {
  let t = +new Date;
  if (t >= this.startTime + this.duration) {
    this.update(this.endPos);
    return false;
  }

  let pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
  this.update(pos);
}

Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + 'px';
}

// test
{/* <div style="position: absolute, background: blue" id="div">test</div> */ }

// const div = document.getElementById('div');
// const animate = new Animate(div);
// animate.start('left', 500, 1000, 'strongEaseOut');

module.exports = { Animate }

// 应用：奖金计算、动画策略、表单验证策略
