import { Board } from './Board';
import DOM from './DOM';

document.getElementById('play').style.display = 'none';

document.getElementById('submit').onclick = () => {
  document.getElementById('start').style.display = 'none'; // game menu hidden
  document.getElementById('play').style.display = 'block'; // show play area

  // TIMER
  const time = document.getElementById('timer');

  const rows = document.getElementById('height').value;
  const columns = document.getElementById('width').value;
  const numBombs = document.getElementById('bombNums').value;

  const boardTest = new Board(columns, rows);
  boardTest.drawBombs(numBombs);
  console.log(boardTest);

  const boardDraw = new DOM(boardTest, document.getElementById('board'), numBombs);
  boardDraw.update();

  if (boardTest.isLose()) {
  } else if (boardTest.isWin()) {
  }
};
