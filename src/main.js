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

export default function knightMoves(start, end) {
  // Check for correct input
  if (!Array.isArray(start) || !Array.isArray(end)) {
    throw console.error(
      "Start and End needs to be arrays with coordinates, like [x, y]",
    );
  }

  const checkBounds = function (coord) {
    return coord < 0 || coord > 7;
  };

  if (start.some(checkBounds) || end.some(checkBounds)) {
    throw console.error("Coordinates have to be between 0 and 7.");
  }

  // prepare loop and initiate graph with starting position
  let sequence = [];

  let queue = new Queue();

  let startIndex = calculateIndexFromCoordinates(start);
  let endIndex = calculateIndexFromCoordinates(end);

  sequence[startIndex] = {};
  sequence[startIndex].predecessor = null;
  sequence[startIndex].coordinates = start;

  queue.enqueue(startIndex);

  // start BFS search
  while (!queue.isEmpty()) {
    let position = queue.dequeue();

    if (position == endIndex) break;

    let nextMoves = calculateNextMoves(sequence[position].coordinates);
    let nextMovesIndexes = nextMoves.map((move) => calculateIndexFromCoordinates(move));

    for (let i = 0; i < nextMovesIndexes.length; i++) {
      if (!sequence.hasOwnProperty(nextMovesIndexes[i])) {
        sequence[nextMovesIndexes[i]] = {};
        sequence[nextMovesIndexes[i]].predecessor = sequence[position];
        sequence[nextMovesIndexes[i]].coordinates = nextMoves[i];
        queue.enqueue(nextMovesIndexes[i]);
      }
    }
  }

  // export path by backtracking predecessors
  let path = [];
  let curr = sequence[endIndex];

  while (curr !== null) {
    path.unshift(curr.coordinates);
    curr = curr.predecessor;
  }

  // display answer in console
  console.log(`You made it in ${path.length - 1} moves! Your path is:`);
  path.forEach((move) => {
    console.log(move);
  });
}

function calculateIndexFromCoordinates(array) {
  return array[0] * 8 + array[1];
}

function calculateNextMoves(position) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1], // Horizontal moves
    [-1, 2],
    [-1, -2],
    [1, 2],
    [1, -2], // Vertical moves
  ];

  const validMoves = [];

  for (let move of moves) {
    let newX = position[0] + move[0];
    let newY = position[1] + move[1];

    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      validMoves.push([newX, newY]);
    }
  }

  return validMoves;
}
