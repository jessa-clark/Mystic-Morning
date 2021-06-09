// API https://indiealchemy.com/apis/plateautarot/


// this is my button assigned to the variable "fortune"
const fortuneBtn = document.getElementById('click');
const inputQuestion = document.getElementById('question');
const destinyDiv = document.getElementById('destiny');

// make an axios call and console log the result
const fetchData = async () => {
  try {
    const url = "https://indiealchemy.com/apis/plateautarot/";
    const response = await axios.get(url);
    // create your array with all the cards as objects
    const tarotArray = response.data.cards;
    results(tarotArray)
    } catch (error) {
    console.log(error);
  }
}
  

  fortuneBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userInput = document.getElementById('question');
    fetchData(userInput);
    userInput.value = '';
  });

  function removeDestiny(){
    while(destinyDiv.lastChild) {
      destinyDiv.removeChild(destinyDiv.lastChild)
    }
  }


function results (tarotArray) {
  let currentIndex = tarotArray.length
  let randomIndex = Math.floor(Math.random() * currentIndex);
    console.log(tarotArray[randomIndex])
  let currentTarotCard = tarotArray[randomIndex]
  displayResults(currentTarotCard)
  
}

function displayResults (currentTarotCard) {
    removeDestiny(); 
    let nameDiv = document.createElement('div');
    nameDiv.classList.add('card-name');
    let nameText = document.createTextNode('Card Name');
    nameDiv.appendChild(nameText);
    document.body.appendChild(nameDiv);

    let tarotCardName = currentTarotCard.name
    nameDiv.innerText = tarotCardName
    destinyDiv.appendChild(nameDiv)

    let meaningDiv = document.createElement('div')
    meaningDiv.classList.add('card-meaning');
    let meaningText = document.createTextNode('Meaning');
    meaningDiv.appendChild(meaningText);
    document.body.appendChild(meaningDiv);

    let tarotCardMeaning = currentTarotCard.description
    meaningDiv.innerText = tarotCardMeaning
    destinyDiv.appendChild(meaningDiv)

    let pictureDiv =document.createElement('div')
    pictureDiv.classList.add('picture');
    document.body.appendChild(pictureDiv);

    let imageTag = document.createElement('img')
    imageTag.src = currentTarotCard.imageURL;
    pictureDiv.appendChild(imageTag)
    destinyDiv.appendChild(pictureDiv)

  
}
