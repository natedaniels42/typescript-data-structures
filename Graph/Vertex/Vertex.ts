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

    print(): void {
        const edgeList: string[] = this.edges.map(edge => edge.weight ? `${edge.end.data} (${edge.weight})` : `${edge.end.data}`);
        console.log(`${this.data} --> ${edgeList.join(', ')}`);
    }
}

export default Vertex;