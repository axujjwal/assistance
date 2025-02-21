let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1  
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(text) {
    let day = new Date()
    let hours = day.getHours()

    if(hours>=0 && hours<12){
        speak("Good Morning Sir");
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir");

    }else{
        speak("Good Evening Sir");
    }
}

window.addEventListener('load',()=>{
    wishMe()
})


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    btn.innerText = transcript
    takeCommand(transcript.toLowerCase());

}    

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"

    if(message.includes("hello")||message.includes("hey")) {
        speak("Hello sir, what can i help you?")
    }   
    else if(message.includes("who are you") || message.includes("hu r u")) {
        speak("I am virtual assistant, created by Ujjwal Sir")
    }
    else if(message.includes("what is your gender")) {
        speak("I am a large model of Artificial intelligence That's why I don't have any gender")
    }
    
    else if(message.includes("open youtube")){
        speak("Opening youtube");
        window.open("https://www.youtube.com/");
    }
    else if(message.includes("open instagram")){
        speak("Opening instagram");
        window.open("https://www.instagram.com/");
    }
    else if(message.includes("open facebook")){
        speak("Opening facebook");
        window.open("https://www.facebook.com/");
    }
    else if(message.includes("open google")){
        speak("Opening google");
        window.open("https://www.google.com/","_blank");
    }
    else if(message.includes("open spotify")){
        speak("Opening music player spotify");
        window.open("spotify://");
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator");
        window.open("calculator://");
    }
    else if(message.includes("how are you") || message.includes("how r u")) {
        speak("I am good, Im here to help you")
    }
    else{
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}