const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.textContent = "☀️";

    }

    else{

        themeToggle.textContent = "🌙";

    }

});

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});

const typingText = document.getElementById("typing-text");

if(typingText){

    const words = [

        "Software Engineer",

        "Full Stack Developer",

        "Python Developer"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let isDeleting = false;

    function typeEffect(){

        const currentWord = words[wordIndex];

        if(isDeleting){

            typingText.textContent = currentWord.substring(0,charIndex--);

        }

        else{

            typingText.textContent = currentWord.substring(0,charIndex++);

        }

        let speed = isDeleting ? 60 : 120;

        if(!isDeleting && charIndex === currentWord.length + 1){

            speed = 1500;

            isDeleting = true;

        }

        if(isDeleting && charIndex === 0){

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

        setTimeout(typeEffect,speed);

    }

    typeEffect();

}