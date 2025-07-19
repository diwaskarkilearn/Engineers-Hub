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

document.querySelector('.contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    inquiry: form.inquiry.value,
    subject: form.subject.value,
    message: form.message.value
  };
  const res = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  if(result.message === 'Message sent successfully') form.reset();
});