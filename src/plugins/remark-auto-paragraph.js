const { last } = require('lodash')

const forEachDeep = (array, handler, diver = el => el.children) => {
  array.forEach((el, i, o) => {
    if (diver(el)) forEachDeep(diver(el), handler, diver)
    handler(el, i, o)
  })
}

const textNodeConstructor = (value) => ({
  type: 'text',
  value,
  position: {}
})

module.exports = () => {
  return (tree) => {
    forEachDeep(tree.children, (paragraph, i) => {
      if (paragraph.type !== 'paragraph') return
      let sto = [[]]
      paragraph.children.forEach((el) => {
        if (el.type !== 'text' && el.position.start.column === 1) { sto.push([el]); return }
        if (el.type !== 'text') { last(sto).push(el); return }
        const splitResult = el.value.split('\n')
        last(sto).push(textNodeConstructor(splitResult[0]))
        sto = sto.concat(splitResult.slice(1).map(el => [textNodeConstructor(el)]))
      })
      tree.children.splice(i, 1, ...sto.map(el => ({ type: 'paragraph', children: el })))
    })
  }
}
