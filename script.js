//random number generator for selecting options
function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}

//contain options in an object fro easy access
const inspiringWords = {
    verbs: ["will", "can", "are going to"],
    endOfPhrase: ["do incredible things this year.", "achieve everything you've ever wanted to.", "be a billionaire once you put your mind to it.", "succeed in life no matter what."]
}

//store the inspirational quote in an array
let message = ["You"];

//iterate over the object
for (let property in inspiringWords) {
    let optionIndex = getRandomNum(inspiringWords[property].length);

    switch(property) {
        case "verbs":
            message.push(`${inspiringWords[property][optionIndex]}`);
            break;
        case "endOfPhrase":
            message.push(`${inspiringWords[property][optionIndex]}`);
            break;
        default:
            message.push("...");
    }
}

//Links parts of the message together
function connectMessage(message) {
    const connect = message.join(' ');
    console.log(connect);
}

connectMessage(message);