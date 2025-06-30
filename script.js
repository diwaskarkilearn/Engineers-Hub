let h1 = document.querySelector(".h1");
let text = h1.textContent;
h1.textContent = ""; // Clear original text

let i = 0;

let interval = setInterval(() => {
    if (i < text.length) {
        let span = document.createElement("span");
        span.textContent = text[i];
        span.style.color="golden";
        h1.appendChild(span);
        i++;
    } else {
        clearInterval(interval);
    }
}, 150);