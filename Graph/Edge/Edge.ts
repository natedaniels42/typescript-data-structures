import Vertex from "../Vertex/Vertex";

class Edge {
    start: Vertex;
    end: Vertex;
    weight: number | null;

    constructor(start: Vertex, end: Vertex, weight: number = 0) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }
}

export default Edge;