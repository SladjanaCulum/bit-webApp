const p = document.getElementById("joke-text");
const btn = document.getElementById("btn-get-joke");
let url = "https://api.chucknorris.io/jokes/random";

function get_joke() {
    btn.disabled = true;
    fetch(url)
        .then((response) => response.json())
        .then((joke) => {
            p.innerHTML = joke.value;
        })
        .catch((error) => {
            p.innerHTML = error.message;
        })
        .finally(() => {
            btn.disabled = false;
        })
        
}


//event listener
btn.onclick = get_joke;