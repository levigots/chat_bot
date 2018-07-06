var result = document.querySelector(".result");

var names = [
    'daniel',
    'levi',
    'tatiana',
    'jessica'
];

var sentences = [
    'The cow jumped over the moon.',
    'Do androids dream of electric sheep?',
    'I am tired. Im going to go to bed',
    'I want to go to disneyland.',
    'Eating chicken is fun for me.',
    'Boots and cats and boots and cats.',
    'McDonalds is my favorite fancy restaurant'
]
var chatroom = []

function getChatEntry() {
    var randomNameIndex = Math.floor(Math.random() * names.length);
    var randomSentenceIndex = Math.floor(Math.random() * sentences.length);
    return names[randomNameIndex] + ': ' + sentences[randomSentenceIndex];
}

function populateChatRoom() {
    if (chatroom.length === 6) {
        chatroom.shift()
        
    }
    chatroom.push(getChatEntry());
}

setInterval(function() {
    populateChatRoom();
    // loop over chatroom array
    result.innerHTML = ''
    chatroom.forEach(function(sentence){
        var paragraphTag = document.createElement('p');
        paragraphTag.innerText = sentence;
        result.append(paragraphTag);
    })
       // for each element in chatroom array -> display it in result div
}, 1000)