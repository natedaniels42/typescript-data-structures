import Edge from "../Edge/Edge";

class Vertex {
    data: unknown;
    edges: Edge[];

    constructor(data: unknown) {
        this.data = data;
        this.edges = [];
    }

    addEdge(vertex: Vertex, weight: number | null = null): void {
        this.edges.push(new Edge(this, vertex, weight));
    }

    removeEdge(vertex: Vertex): void {
        this.edges = this.edges.filter(edge => edge.end !== vertex);
    }
}

export default Vertex;