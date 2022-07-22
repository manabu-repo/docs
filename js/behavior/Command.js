// 命令模式
// 应用场景：有时候需要某些对象发送请求，但是并不知道请求的接受者，也不知道请求的操作，此时希望一种松耦合的方式来设计程序
// 使得请求发送者和请求接受者能够消除彼此之间的耦合关系

function refreshCommand(receiver) {
  return {
    execute: function () {
      receiver.refresh()
    }
  }
}

function undoCommand(receiver) {
  return {
    execute: function () {
      receiver.undo()
    }
  }
}

function setCommand(button, command) {
  button.onclick = function () {
    command.execute()
  }
}

const button = document.querySelector('button')
const menuBar = {
  refresh: function () {
    console.log('refresh menu bar……')
  }
}

const refreshMenuBar = refreshCommand(menuBar)
const refreshCmd = setCommand(button, refreshMenuBar)

const btn = document.querySelector('btn')
const undoBar = {
  undo: function () {
    console.log('something to undo')
  }
}

const undoCmd = setCommand(btn, undoCommand(undoBar))

// eg.撤销和重做
const menu = {
  attack: () => console.log('attack'),
  defense: () => console.log('defense'),
  jump: () => console.log('jump'),
  crouch: () => console.log('crouch'),
}

const makeCommand = function (receiver, state) {
  return function () {
    receiver[state]()
  }
}

const commands = {
  '119': 'jump', // W
  '115': 'crouch', // S
  '97': 'defense', // A
  '100': 'attack', // D
}

const commandStack = []

document.onkeydown = function (ev) {
  const code = ev.keyCode
  const command = makeCommand(menu, commands[code])

  if (command) {
    command()
    commandStack.push(command)
  }
}

const replay = function () {
  let command = undefined
  while (command = commandStack.shift()) {
    command()
  }
}

// eg.宏命令： 一组命令的集合
const closeDoorCommand = {
  execute: () => console.log('close door')
}

const openDoorCommand = {
  execute: () => console.log('open door')
}

const openAppCommand = {
  execute: () => console.log('open app')
}

const macroCommand = function () {
  return {
    commandList: [],
    add: function (command) {
      this.commandList.push(command)
    },
    execute: function () {
      for (let i = 0, command; command = this.commandList[i++];) {
        command.execute()
      }
    }
  }
}

const macroCmd = macroCommand()
macroCmd.add(closeDoorCommand)
macroCmd.add(openDoorCommand)
macroCmd.add(openAppCommand)

macroCmd.execute()

// 宏命令是命令模式与组合模式的联用产物

// eg.上述命令的对象不需要接受者的存在，可以直接执行命令的命令对象也叫智能命令
// 智能命令与策略模式非常相近，代码结构上趋同，只能通过意图来区分
// 策略模式指向的问题域更小，所有策略对象的目标总是一致的，只是算法不同
// 智能命令模式指向的问题域更广，command对象解决的目标更具有发散性，同时命令模式还可以完成撤销、排队等功能
