import { Board } from './Board';
import DOM from './DOM';

document.getElementById('play').style.display = 'none';
document.getElementById('bomb-icon-right').setAttribute("transform", "rotate(-90)");

document.getElementById('submit').onclick = () => {
  document.getElementById('start').style.display = 'none'; // game menu hidden
  document.getElementById('play').style.display = 'flex'; // show play area
  document.getElementById('bomb-icon-left').style.fill = '#ffbb00';
  document.getElementById('bomb-icon-right').style.fill = '#ffbb00';
  document.getElementById('bomb-icon-right').setAttribute("transform", "rotate(90)");
  document.getElementById('bomb-icon-left').setAttribute("transform", "rotate(180)");


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

document.getElementById('reset').onclick = () => {
  document.getElementById('start').style.display = 'flex'; // game menu hidden
  document.getElementById('play').style.display = 'none'; // show play area
  document.getElementById('bomb-icon-left').style.fill = '#383838';
  document.getElementById('bomb-icon-right').style.fill = '#383838';
  document.getElementById('bomb-icon-right').setAttribute("transform", "rotate(-90)");
  document.getElementById('bomb-icon-left').setAttribute("transform", "rotate(0)");
  document.getElementById('timer').style.color = 'black';

  const boardElements = document.getElementById('board');
  while (boardElements.firstChild) {
    boardElements.removeChild(boardElements.firstChild);
  }
};
