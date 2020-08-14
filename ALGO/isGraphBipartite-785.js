var isBipartite = function(graph) {
  let colors = Array(graph.length).fill(0)
  // DFS
  for(let i=0; i<graph.length; i++) {
      let branches = graph[i]
      let stack = [i]
      if(colors[i] === 0) {
          colors[i] = 1
      }
      while(stack.length !==0) {
        let start = stack.pop()
        for(let neighbor of graph[start]) {
          if(colors[neighbor] === 0) {
            colors[neighbor] = colors[start] * (-1)
            stack.push(neighbor)
          } else if(colors[neighbor] === colors[start]) {
            return false
          }
        }
      }
  }
  return true
};
