/*let quizz = [
    {
        question: "Where is Montjuic?",
        answers: { 
        a: "Barcelona", 
        b: "Madrid", 
        c: "Sevilla"

        },
        correctAnswer: "a"
    }, 
    {
        question: "When was the palace build?", 
        answers: {
            a: "1660",
            b: "1790", 
            c: "1969"
        },
        correctAnswer: "b"
    }
]; */

const clickButton1 = document.getElementById("button1"); 
const clickButton2 = document.getElementById("button2"); 
const clickButton3 = document.getElementById("button3"); 

    clickButton1.addEventListener("click", function(){
        clickButton1.style.backgroundColor = "green"; 
        clickButton1.innerHTML = "correct"; 
        
        
    }); 

    clickButton2.addEventListener("click", function(){
        clickButton2.style.backgroundColor = "red"; 
        clickButton2.innerHTML = "Wrong"

    }); 

    clickButton3.addEventListener("click", function(){
        clickButton3.style.backgroundColor = "red"; 
        clickButton3.innerHTML = "Wrong"

    }); 