const input = ['B-D','A-B','B-C','D-F','C-E']

const shortestPathForCharGraph = (graph) => {
  let minPoint = graph[0].split('-')[0]
  let maxPoint = graph[0].split('-')[1]
  
  for (let i = 1; i < graph.length; i++) {
    const node = graph[i].split('-')
    const points = node[0] < node[1] ? [node[0], node[1]] : [node[1], node[0]]
    
    minPoint = points[0] < minPoint ? points[0] : minPoint
    maxPoint = points[1] > maxPoint ? points[1] : maxPoint
  }
  
  
}

console.log(shortestPathForCharGraph(input))