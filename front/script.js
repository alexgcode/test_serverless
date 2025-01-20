
// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});

const getRandomDadJoke = async () => {
    /*
    const url = "https://icanhazdadjoke.com/";
    try {
        const jokeStream = await fetch(url, {
          headers: {
            Accept: "application/json"
          }
        });
        const jsonJoke = await jokeStream.json();
        console.log(JSON.stringify(jsonJoke));
      } catch (err) {
        console.log(err.stack );
      }
    */

    
    const url = "/.netlify/functions/jokes";
    const jokeStream = await fetch(url);
    //const jsonJoke = await jokeStream.json();
    
    const joke = await jokeStream.json();//jsonJoke.joke;
    return joke;
    
};

const refreshJoke = async () => {
    const joke = await getRandomDadJoke();
    console.log(joke);
};

refreshJoke();

setInterval(refreshJoke, 10000);