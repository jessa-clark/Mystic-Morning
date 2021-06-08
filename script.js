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
    destinyDiv.childNodes.forEach((child) =>
    child.remove());
  }


function results (tarotArray) {
  let currentIndex = tarotArray.length
  let randomIndex = Math.floor(Math.random() * currentIndex);
    console.log(tarotArray[randomIndex])
  let currentTarotCard = tarotArray[randomIndex]
  displayResults(currentTarotCard)
  
}

function displayResults (currentTarotCard) {
    let nameContainer = document.querySelector('#card-name')
    let pictureContainer = document.querySelector('#image-container')
    let meaningContainer = document.querySelector('#card-description')
    let imageTag = document.createElement('img')
    imageTag.setAttribute('src' , currentTarotCard.imageURL)
    pictureContainer.appendChild(imageTag)

    let tarotCardName = currentTarotCard.name
    nameContainer.innerText = tarotCardName

    let tarotCardMeaning = currentTarotCard.description
    meaningContainer.innerText = tarotCardMeaning
  
}
