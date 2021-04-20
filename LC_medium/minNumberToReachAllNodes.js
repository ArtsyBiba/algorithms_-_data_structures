// Given a directed acyclic graph, with n vertices numbered 
// from 0 to n-1, and an array edges where edges[i] = [fromi, toi] 
// represents a directed edge from node fromi to node toi.

// Find the smallest set of vertices from which all nodes in the 
// graph are reachable. It's guaranteed that a unique solution exists.

// Notice that you can return the vertices in any order.

var findSmallestSetOfVertices = function(n, edges) {
    const map = {};
    const result = [];
    
    for (let edge of edges) {
        if (map[edge[0]]) {
            map[edge[0]]++;
        } else map[edge[0]] = 1;
    }
    
    for (let edge of edges) {
        if (map[edge[1]]) map[edge[1]] = 0;
    }
    
    for (let key in map) {
        if (map[key] !== 0) {
            result.push(Number(key));
        }
    }
    
    return result;
};