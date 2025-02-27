import "./styles.css";
import knightMoves from "./main";

document.addEventListener("DOMContentLoaded", () => {
  let start = [0, 2];
  let end = [7, 7];

  knightMoves(start, end);
});
