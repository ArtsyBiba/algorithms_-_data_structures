// Given a directed acyclic graph (DAG) of n nodes labeled 
// from 0 to n - 1, find all possible paths from node 0 to node 
// n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all 
// nodes you can visit from node i (i.e., there is a directed edge 
// from node i to node graph[i][j]).

var allPathsSourceTarget = function(graph) {
    let res = [];
    let path = [0];  
   
    dfsSearch(0); 
    
    function dfsSearch(node) {
        if (node === graph.length - 1) {           
            res.push(path.slice(0));           
        } else {
            for (let nextNode of graph[node]) {
                path.push(nextNode);
                dfsSearch(nextNode);
                path.pop();
            }
        }   
    }
    
    return res;
};