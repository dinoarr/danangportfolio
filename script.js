// Type Animation
function typeWriter(text, i, element, callback) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, element, callback);
        }, 150); 
    } else {
        if (callback) {
            callback();
        }
    }
}

window.onload = function () {
    const text = "Purwo Danang Sumari";
    const element = document.getElementById("type-animation");
    element.textContent = ""; 
    typeWriter(text, 0, element, null);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!localStorage.getItem("animationPlayed")) {
                    typeWriter(text, 0, element, function () {
                        localStorage.setItem("animationPlayed", true);
                    });
                }
            }
        });
    });

    const homeSection = document.querySelectorAll("#home");
    observer.observe(homeSection);
};


// Controls 
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    // Theme Mode
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const themeIcon = document.getElementById('theme-icon');
        if (document.body.classList.contains("light-mode")) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
})();



