

let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let photographers = document.getElementById('photographers').value;
    let hours = document.getElementById('hours').value;

    let finalcost = document.getElementById('finalcost').value;
    document.getElementById('finalcost').value = (parseFloat(hours) + parseFloat(photographers)) * 100;

})

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "Hello") {
        userText = "Hello";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Great!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


function getBotResponse(input) {

    // Simple responses
    if (input == "Hello") {
        return "How can i help you?---------------------I need a photographer ------------------I would require an estimate";
    } else if (input == "I need a photographer") {
        return "Great!! We provide excellent Services.. Would you like to know more? Yes/No";
    }else if (input == "Yes") {
            return "Wonderful.. Please connect with us on thephotomatics@gmail.com Also please check out our cost generator.";
    } else if (input == "I would require an estimate") {
        return "Please check out our cost generator at the bottom of the page";
    } else if (input == "Bye") {
        return "Happy Browsing and hope you had a wonderful time here...";
    }else if (input == "Hi") {
        return "How can i help you?---------------------I need a photographer-------------------I would require an estimate";
    }  
    else if (input == "hello") {
        return "How can i help you?---------------------I need a photographer-------------------I would require an estimate";
    }  
    else if (input == "hi") {
        return "How can i help you?---------------------I need a photographer-------------------I would require an estimate";
    }  
    else if (input == "Ok") {
        return "Wonderful.. Please connect with us on thephotomatics@gmail.com";
    } 
    else if (input == "ok") {
        return "Wonderful.. Please connect with us on thephotomatics@gmail.com";
    }   
    
    else {
        return "Try asking something else!";
    }
}
