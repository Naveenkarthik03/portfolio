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