const input = ['A-B','A-C','B-C','C-D','D-F']

const shortestPathForCharGraph = (graph) => {
  let fromNode = graph[0].split('-')[0]
  let toNode = graph[0].split('-')[1]
  let path = fromNode

  for (let edge of graph) {
    const nodes = edge.split('-')
    if (nodes[0] === fromNode && nodes[1] > toNode) {
      toNode = nodes[1]
    }
    else if (nodes[0] !== fromNode) {
      path += `-${toNode}`
      fromNode = toNode 
    }
  }

  return `${path}-${graph[graph.length - 1].split('-')[1]}`
}

console.log(shortestPathForCharGraph(input))