const logform = document.getElementById("logform");
const username = document.getElementById("uname").textContent;
const password = document.getElementById("pass").textContent;

logform.addEventListener('log', (e) =>{
    e.preventDefault();
})