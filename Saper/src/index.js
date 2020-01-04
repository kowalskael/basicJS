import { Board } from './Board';
import DOM from './DOM';

document.getElementById('play').style.display = 'none';
document.getElementById('title-play').style.display = 'none'; // game menu hidden

document.getElementById('submit').onclick = () => {
  document.getElementById('title-start').style.display = 'none'; // game menu hidden
  document.getElementById('title-play').style.display = 'flex'; // game menu hidden
  document.getElementById('start').style.display = 'none'; // game menu hidden
  document.getElementById('play').style.display = 'flex'; // show play area

  // TIMER
  const time = document.getElementById('timer');

  const rows = document.getElementById('height').value;
  const columns = document.getElementById('width').value;
  const numBombs = document.getElementById('bombNums').value;
  const board = document.getElementById('board');

  const boardTest = new Board(columns, rows);
  boardTest.drawBombs(numBombs);
  console.log(boardTest);

  const boardDraw = new DOM(boardTest, board, numBombs);
  boardDraw.update();
};
