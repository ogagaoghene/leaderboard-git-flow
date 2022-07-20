import './style.css';
import { sendNewScore } from './fetchData';
import render from './renderData';

document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelector('.refreshBtn').addEventListener('click', async () => { render(); });

  document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    sendNewScore();
    document.querySelector('.name-input').value = '';
    document.querySelector('.score-input').value = '';
  });

  render();
});