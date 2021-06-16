import Vertex from "./Vertex/Vertex";
import Edge from "./Edge/Edge";

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

    print(): void {
        this.vertices.forEach(vertex => vertex.print());
    }
}
