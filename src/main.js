/*
INFO:
- each square is a vertex (vertices)
- [startCord, endCord] --> is an edge
- adjacency list
    - [ [{ coordinates: [0,0], edges: [10, 17]}],
        [{ coordinates: [0,1], edges: [11, 16, 18]}],


        ]

- get starting coordinates as [x, y]
- set variable amountMoves = 0;

- function calculate each possible move
    - [x - 2, y - 1]
    - [x - 2, y + 1]
    - [x + 2, y - 1]
    - [x + 2, y + 1]
    - [x - 1, y + 2]
    - [x - 1, y - 2]
    - [x + 1, y + 2]
    - [x + 1, y - 2]
    --> as long as x && y are between 0 - 7; otherwise no allowed move (square outside field)

- run BDF for each starting position
    - if startCord === endCords return amountMoves?
    - if startCord != endCords
        - calculate each possible move
        - add them to queue
        - update amountMoves + 1?


*/


/* A Queue object for queue-like functionality over JavaScript arrays. */
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(obj) {
        this.items.push(obj);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

function knightMoves(start, end) {
    
    /*
    1) if start or end out of bounds return error

    2) set empty array for info

    3) Create queue

    4) Add start point to queue
        convert start to index
        initialize with object
            info[startIndex].distance = 0;
            info[startIndex].predecessor = null;
            info[startIndex].coordinates = start;

    5) while(!queue.isEmpty())
        let position = get first value from queue
        if position === end break;

        calculate possible moves from position --> return as list
        convert positions into index of graph list
        match coordinates from moves with index

        for each position
           if (!info.hasOwnProperty(position))
                info[position] = {}; // initialize empty object
                info[position].distance = position.distance + 1;
                info[position].predecessor = position;
                info[position].coordinates = coordinates;
                queue.enqueue(position);


    6) get result from while loop

    7) get distance from end node

    8) loop through predecessors until predecessor === null
        add to list steps
        reverse list steps
        calculate coordinates



    Get index for graph list
        index = r * 8 + c of each square in adj list
        Row (r) is the integer division of index by 8: r = i // 8
        Column (c) is the remainder of the division by 8: c = i % 8


    */


}
