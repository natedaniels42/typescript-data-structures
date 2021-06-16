import Edge from "../Edge/Edge";

class Vertex {
    data: unknown;
    edges: Edge[];

    constructor(data: unknown) {
        this.data = data;
        this.edges = [];
    }
}

export default Vertex;