// Code your solutions in this file
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);
//Another section of code loading

function writeCards(arrayOfNames, eventName){
    const messages = []
    for(let i =0; i < arrayOfNames.length; i++){
        console.log(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
        messages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    } 
    return messages
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(number){
    while(number >= 0){
        console.log(number--)
    }
}