const input = ['B-D','A-B','B-C','D-F','C-E']

const shortestPathForCharGraph = graph => {
  graph = graph.map(edge => edge.split('-'))
  const min = Math.min(...graph.map(edge => edge[0].charCodeAt(0)))
  const max = Math.max(...graph.map(edge => edge[1].charCodeAt(0)))

  continuePath = (curr, prev, stack) => {
    stack.push([ String.fromCharCode(prev), String.fromCharCode(curr) ])
    console.log(String.fromCharCode(prev), String.fromCharCode(curr), stack)
    graph
      .filter(([ start ]) => start.charCodeAt(0) === curr)
      .forEach(([ start, end ]) => continuePath(end.charCodeAt(0), start.charCodeAt(0), stack))
    if (curr === max) {
      stack.shift()
      return stack
    }
  }

  return continuePath(min, min, [])
}

console.log(shortestPathForCharGraph(input))