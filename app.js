// Shuffle function from http://stackoverflow.com/a/2450976
let shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const nextCard = document.getElementById('next-card')
const playerScore = document.getElementById('score');
const playerCards = document.querySelectorAll('.card');
const ulCardList = document.getElementById('cards')
const nextCardsValue = ''
let playerClickTotal = 0
let shuffledArray = []



function randomArray() {
  let tagArray = Array.from(playerCards);
  shuffledArray = shuffle(tagArray);
  nextCard.innerHTML = shuffledArray[0].innerHTML;
}



function nextCardFilter() {
  shuffledArray.shift();
  nextCard.innerHTML = shuffledArray[0].innerHTML;
}

function showCard(e) {
 
  

  for(key of playerCards){
    key.classList.remove("show")
  }
  
  e.target.classList.add('show');
  let targetString = "fas " + e.target.firstElementChild.className
  
  if (targetString.includes(nextCard.firstElementChild.className)) {
    e.target.classList.add("matched")
    e.target.classList.remove("show")
  
    if (shuffledArray.length === 0){
      alert('You won');
      restart();
    }

    if (shuffledArray[0].innerHTML == nextCard.innerHTML) {
      nextCardFilter()
    } 
  } else (setTimeout(function() {e.target.classList.remove('show');}, 5000))
  
  playerClickTotal += 1;
  playerScore.textContent = playerClickTotal;
  

}


function restart(e) {
  playerScore.textContent = 0;
  
  for (key of playerCards) {
    key.classList.remove('matched');
    key.classList.remove('show');
  }

  playerClickTotal = 0;
  let cardArray = Array.from(playerCards);

  let playerCardShuffle = shuffle(cardArray);
  
  for (i=0; i < playerCards.length; i++){
   for (key of playerCardShuffle) {
    ulCardList.append(key)
  }
}
  randomArray();
  
}

const restartGame = document.querySelector('.restart').addEventListener('click', restart);
let firstLoad = window.addEventListener('DOMContentLoaded', restart )
for(key of playerCards){
  key.addEventListener('click', showCard)
}




// if (shuffledArray[0].innerHTML == nextCard.innerHTML) {
//   nextCardFilter()
// } 
// } else (setTimeout(function() {e.target.classList.remove('show');}, 5000))