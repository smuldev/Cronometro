
const pauseButton = document.querySelector(".pauseButton")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
const playButton = document.querySelector('.playButton')
const div = document.querySelector('.buttons')
const simbol = document.querySelector('.simbWatch')
const simbPlay = document.querySelector('.play')
const simbResume = document.querySelector('.resume')
const simbPause = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')
const resumeButton = document.querySelector('.resumeButton')
let number = 0
let minutes = 0
let hours = 0
let cron
let cronMinutes
let cronHours

function minutesUpdate() {
  if (number === 0) {
    minutes = (minutes + 1) % 60;
    h3.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  }
}

function cronUpdate() {
  number = (number + 1) % 60;
  h2.innerHTML = number < 10 ? `0${number}` : number;
  
}

function play() {
  cron = setInterval(cronUpdate, 1000);
  cronMinutes = setInterval(minutesUpdate, 1000);

  pauseButton.style.display = 'block'
  simbPause.style.display = 'block'
  playButton.style.display = 'none'
    simbPlay.style.display = 'none'
  div.style.background = '#f0152f'
  simbol.src = 'https://www.svgrepo.com/show/446290/pause-1.svg'}


function stop() {
  clearInterval(cron)
  div.style.background = '#7cacff'
  
  simbResume.style.filter = 'invert(100%)'
  resumeButton.style.display = 'block'
  simbResume.style.display = 'block'
  pauseButton.style.display = 'none'
  simbPause.style.display = 'none'

  simbol.src = 'https://www.svgrepo.com/show/512674/play-1003.svg'

}

function resume() {
  cron = setInterval(cronUpdate, 1000);

  pauseButton.style.display = 'block'
    simbPause.style.display = 'block'
  resumeButton.style.display = 'none'
    simbResume.style.display = 'none'
  div.style.background = '#f0152f'
  simbol.src = 'https://www.svgrepo.com/show/446290/pause-1.svg'
}

function reset() {
  clearInterval(cron)
  clearInterval(cronMinutes)
  number = 0
  minutes = 0

  // Codigos para formatacao, para adicionar um 0 a esquerda do numero, quando esse numero e menor que 10 //
  h2.innerHTML = number < 10 ? `0${number}` : number;

  h3.innerHTML = minutes < 10 ? `0${minutes}` : minutes;

  // Mudanca cor botao //
  div.style.background = '#fff'

  playButton.style.display = 'block'
  simbPlay.style.display = 'block'
  resumeButton.style.display = 'none'
  simbResume.style.display = 'none'
  pauseButton.style.display = 'none'
  simbPause.style.display = 'none'
}