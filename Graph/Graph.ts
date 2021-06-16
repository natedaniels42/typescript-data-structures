import Vertex from "./Vertex/Vertex";
import Edge from "./Edge/Edge";
import Queue from "../Queue/Queue";
import PriorityQueue from "../PriorityQueue/PriorityQueue";

class Graph {
    vertices: Vertex[];
    isWeighted: boolean;
    isDirected: boolean;

    constructor(isWeighted = false, isDirected = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data: unknown): Vertex {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);
        return newVertex;
    }

    removeVertex(vertex: Vertex): void {
        vertex.edges.forEach(edge => edge.end.removeEdge(vertex));
        this.vertices = this.vertices.filter(v => v !== vertex);
    }

    addEdge(vertex1: Vertex, vertex2: Vertex, weight = null): void {
        const edgeWeight = this.isWeighted ? weight : null;
        vertex1.addEdge(vertex2, edgeWeight);
        if (!this.isDirected) {
            vertex2.addEdge(vertex1, edgeWeight);
        }
    }

    removeEdge(vertex1: Vertex, vertex2: Vertex): void {
        vertex1.removeEdge(vertex2);
        if (!this.isDirected) {
            vertex2.removeEdge(vertex1);
        }
    }

    depthFirstTraversal(start: Vertex, visitedVertices: Vertex[] = [start]): void {
        console.log(start.data);

        start.edges.forEach(edge => {
            const neighbor: Vertex = edge.end;

            if (visitedVertices.indexOf(neighbor) === -1) {
                visitedVertices.push(neighbor);

                this.depthFirstTraversal(neighbor, visitedVertices);
            }
        })
    }

    breadthFirstTraversal(start: Vertex): void {
        const visitedVertices: Vertex[] = [start];
        const visitQueue: Queue = new Queue();
        visitQueue.enqueue(start);

        while(!visitQueue.isEmpty()) {
            const current = visitQueue.dequeue().data;
            console.log(current.data);

            current.edges.forEach(edge => {
                const neighbor: Vertex = edge.end;

                if (visitedVertices.indexOf(neighbor) === -1) {
                    visitedVertices.push(neighbor);
                    visitQueue.enqueue(neighbor);
                }
            })
        }
    }

    dijkstras(start: Vertex): {distances: {}, previous: {}} {
        const distances: {} = {};
        const previous: {} = {};
        const queue = new PriorityQueue();
        queue.add(start, 0);

        this.vertices.forEach(vertex => {
            distances[`${vertex.data}`] = Infinity;
            previous[`${vertex.data}`] = null;
        })
        
        distances[`${start.data}`] = 0;

        while(!queue.isEmpty()) {
            const { vertex } = queue.popMin();

            vertex.edges.forEach(edge => {
                const alternate: number = edge.weight + distances[`${vertex.data}`];
                const neighborValue = edge.end.data;

                if (alternate < distances[`${neighborValue}`]) {
                    distances[`${neighborValue}`] = alternate;
                    previous[`${neighborValue}`] = vertex;

                    queue.add(edge.end, distances[`${neighborValue}`]);
                }
            })
        }

        return { distances, previous };
    }

    shortestPath(start: Vertex, end: Vertex): {distance: number, path: unknown[]} {
        const { distances, previous } = this.dijkstras(start);
        const distance: number = distances[`${end.data}`];
        const path: unknown[] = [];
        let current: Vertex | null = end;
        while (current) {
            path.unshift(current.data);
            current = previous[`${current.data}`];
        }
        return { distance, path }
    }

    print(): void {
        this.vertices.forEach(vertex => vertex.print());
    }
}

export default Graph;