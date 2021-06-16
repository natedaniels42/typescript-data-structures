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
}
