
const cardObjectDefinitions = [
  {id: 1, imagePath:'/JS-CardGame-HuntTheAce/images/card-KingHearts.png'},
  {id: 2, imagePath:'/JS-CardGame-HuntTheAce/images/card-JackClubs.png'},
  {id: 3, imagePath:'/JS-CardGame-HuntTheAce/images/card-QueenDiamonds.png'},
  {id: 4, imagePath:'/JS-CardGame-HuntTheAce/images/card-AceSpades.png'}
]

const cardBackImgPath = '/JS-CardGame-HuntTheAce/images/card-back-Blue.png'

const cardContainerElem = document.querySelector('.card-container')

let cards = []

const playGameButtonElem = document.getElementById('playGame')

const collapsedGridAreaTemplate = '"a a" "a a"'
const cardCollectionCellClass = ".card-pos-a"

{/*<div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="/JS-CardGame-HuntTheAce/images/card-JackClubs.png" alt="" class="card-img">
          </div>
          <div class="card-back">
            <img src="/JS-CardGame-HuntTheAce/images/card-back-Blue.png" alt="" class="card-img">
          </div>
        </div>
      </div> */}

loadGame()

function loadGame(){
  createCards()

  cards = document.querySelectorAll('.card')

  playGameButtonElem.addEventListener('click', () => startGame())


}

function startGame(){
  initializeNewGame()
  startRound()
}

function initializeNewGame(){

}
function startRound(){
  initializeNewRound()
  collectCards()
}
function initializeNewRound(){

}

function collectCards(){
  transformGridArea(collapsedGridAreaTemplate)
  addCardsToGridAreaCell(cardCollectionCellClass)

}

function transformGridArea(areas)
{
  cardContainerElem.style.gridTemplateAreas = areas

}

function addCardsToGridAreaCell(cellPositionClassName)
{
    const cellPositionElem = document.querySelector(cellPositionClassName)

    cards.forEach((card, index) =>{
        addChildElement(cellPositionElem, card)
    })

}

function createCards(){
  cardObjectDefinitions.forEach((cardItem)=>{
    createCard(cardItem)
  })
}


function createCard(cardItem){

  //create div elements that make up a card
  const cardElem = createElement('div')
  const cardInnerElem = createElement('div')
  const cardFrontElem = createElement('div')
  const cardBackElem = createElement('div')

  //create front & back image elements of a card
  const cardFrontImg = createElement('img')
  const cardBackImg = createElement('img')

  //add class and id to card element
  addClassToElement(cardElem, "card")
  addIdToElement(cardElem, cardItem.id)

  //add class to inner card element
  addClassToElement(cardInnerElem, 'card-inner')

  //add class to front card element
  addClassToElement(cardFrontElem, 'card-front')
  
  //add class to back card element
  addClassToElement(cardBackElem, 'card-back')

  //add src attribute and appropiate value to img element - back of card
  addSrcToImage(cardBackImg, cardBackImgPath)

  //add src attribute and appropiate value to img element - front of card
  addSrcToImage(cardFrontImg, cardItem.imagePath)

  //assign class to back image element of back of card 
  addClassToElement(cardBackImg, 'card-img')

  //assign class to front image element of front of card 
  addClassToElement(cardFrontImg, 'card-img')

  //add back image element as child element to back card element
  addChildElement(cardBackElem, cardBackImg)

  //add front image element as child element to front card element
  addChildElement(cardFrontElem, cardFrontImg)

  //add back card element as child element to inner card element
  addChildElement(cardInnerElem, cardBackElem)

  //add front card element as child element to inner card element
  addChildElement(cardInnerElem, cardFrontElem)

  //add inner card element as child element to card element
  addChildElement(cardElem, cardInnerElem)

  //add card element as child element to appropiate grid cell 
  addCardToGridCell(cardElem)



}

function createElement(elemType){
  return document.createElement(elemType)
}

function addClassToElement(elem, className){
  elem.classList.add(className)
}
function addIdToElement(elem, id){
  elem.id = id
}
function addSrcToImage(imgElem, src){
  imgElem.src = src
}

function addChildElement(parentElem, childElem){
  parentElem.appendChild(childElem)
}
function addCardToGridCell(card){
  const cardPositionClassName = mapCardIdToGridCell(card)

  const cardPosElem = document.querySelector(cardPositionClassName)

  addChildElement(cardPosElem, card)

}
function mapCardIdToGridCell(card){
  if(card.id == 1){
    return '.card-pos-a';
  }
  else if(card.id == 2){
    return '.card-pos-b';
  }
  else if(card.id == 3){
    return '.card-pos-c';
  }
  else if(card.id == 4){
    return '.card-pos-d';
  }
}

