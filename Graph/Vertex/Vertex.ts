import Edge from "../Edge/Edge";

class Vertex {
    data: unknown;
    edges: Edge[];

    constructor(data: unknown) {
        this.data = data;
        this.edges = [];
    }

    addEdge(vertex: Vertex, weight: number | null = null) {
        this.edges.push(new Edge(this, vertex, weight));
    }
}

export default Vertex;