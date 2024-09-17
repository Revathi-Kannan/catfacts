document.getElementById('getCatFactButton').addEventListener('click', getCatFact);

function getCatFact() {
    const url = 'https://catfact.ninja/fact';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFact').innerText = data.fact;
        })
        .catch(error => {
            document.getElementById('catFact').innerText = `Error: ${error.message}`;
        });
}

