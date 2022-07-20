import './style.css';
import { sendNewScore } from './modules/fetchData.js';
import render from './modules/renderData.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.refreshBtn').addEventListener('click', async () => { render(); });
  document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    sendNewScore();
    document.querySelector('.name-input').value = '';
    document.querySelector('.score-input').value = '';
  });

  render();
});

