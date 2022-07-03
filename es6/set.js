let set = new Set()

const fn = () => { }
set.add(fn)
set.add(fn)
set.add(() => { })

set.delete(fn)
set.delete(() => { })

set.forEach(item => {
  console.log('item', item)
})
