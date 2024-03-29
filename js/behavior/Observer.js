// 发布-订阅模式（观察者模式）：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于他的对象都将得到通知
// 应用：楼盘通知、登录后通知各模块

const Event = (function () {
  let global = this,
    Event,
    _default = 'default';

  Event = (function () {
    let _listen,
      _trigger,
      _remove,
      _slice = Array.prototype.slice,
      _shift = Array.prototype.shift,
      _unshift = Array.prototype.unshift,
      namespaceCache = {},
      _create,
      find,
      each = function (ary, fn) {
        let ret;
        for (let i = 0, l = ary.length; i < l; i++) {
          let n = ary[i];
          ret = fn.call(n, i, n);
        }
        return ret;
      };

    _listen = function (key, fn, cache) {
      if (!cache[key]) {
        cache[key] = [];
      }
      cache[key].push(fn);
    };

    _remove = function (key, cache, fn) {
      if (cache[key]) {
        if (fn) {
          for (let i = cache[key].length; i >= 0; i--) {
            if (cache[key][i] === fn) {
              cache[key].splice(i, 1);
            }
          }
        } else {
          cache[key] = [];
        }
      }
    };

    _trigger = function () {
      let cache = _shift.call(arguments),
        key = _shift.call(arguments),
        args = arguments,
        _self = this,
        ret,
        stack = cache[key];

      if (!stack || !stack.length) {
        return;
      }

      return each(stack, function () {
        return this.apply(_self, args);
      });
    };

    _create = function (namespace) {
      let ns = namespace || _default;
      let cache = {},
        offlineStack = [],
        ret = {
          listen: function (key, fn, last) {
            _listen(key, fn, cache);

            if (offlineStack === null) {
              return;
            }

            if (last === 'last') {
              offlineStack.length && offlineStack.pop()();
            } else {
              each(offlineStack, function () {
                this();
              });
            }

            offlineStack = null;
          },

          one: function (key, fn, last) {
            _remove(key, cache);
            this.listen(key, fn, last);
          },

          remove: function (key, fn) {
            _remove(key, cache, fn);
          },

          trigger: function () {
            let fn,
              args,
              _self = this;

            _unshift.call(arguments, cache);
            args = arguments;
            fn = function () {
              return _trigger.apply(_self, args);
            };

            if (offlineStack) {
              return offlineStack.push(fn);
            }
            return fn();
          },
        };

      return ns
        ? namespaceCache[ns]
          ? namespaceCache[ns]
          : (namespaceCache[ns] = ret)
        : ret;
    };

    return {
      create: _create,
      one: function (key, fn, last) {
        let event = this.create();
        event.one(key, fn, last);
      },
      remove: function (key, fn) {
        let event = this.create();
        event.remove(key, fn);
      },
      listen: function (key, fn, last) {
        let event = this.create();
        event.listen(key, fn, last);
      },
      trigger: function () {
        let event = this.create();
        event.trigger.apply(this, arguments);
      },
    };
  })();

  return Event;
})();

module.exports = { $event: Event };
