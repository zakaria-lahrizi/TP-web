let rando, tenta, min, max, round;
let isPlaying = false;

function generer() {
    return Math.floor(Math.random() * 100) + 1;
}

function choisirDifficulte() {
    let difficulte = document.getElementById("Difficulte").value;

    switch (difficulte) {
        case "Facile":
            return { tenta: 8, min: 1, max: 100 };
        case "Intermediaire":
            return { tenta: 6, min: 1, max: 100 };
        case "Difficile":
            return { tenta: 4, min: 1, max: 100 };
    }
}

function testerNombre() {
    if (!isPlaying) {
        alert("Veuillez commencer une nouvelle partie d'abord !");
        return;
    }

    while (round < tenta) {
        let guess = prompt(`Devinez le nombre entre ${min} et ${max} (${tenta - round} tentatives restantes) :`);
        if (guess === null) {
            return;
        }

        guess = parseInt(guess);

        if (isNaN(guess) || guess < min || guess > max) {
            alert(`Veuillez entrer un nombre valide entre ${min} et ${max}.`);
            continue;
        }

        if (guess === rando) {
            alert("Félicitations ! Vous avez trouvé le nombre.");
            isPlaying = false;
            return;
        } else if (guess < rando) {
            alert("Trop bas !");
        } else {
            alert("Trop haut !");
        }

        round++;

        if (round >= tenta) {
            alert(`Vous avez perdu ! Le nombre était ${rando}.`);
            isPlaying = false;
            return;
        }
    }
}

function startGame() {
    if (isPlaying) {
        alert("Une partie est déjà en cours.");
        return;
    }

    let niveau = choisirDifficulte();
    tenta = niveau.tenta;
    min = niveau.min;
    max = niveau.max;
    rando = generer();
    round = 0;
    isPlaying = true;

    alert(`Nouvelle partie ! Essayez de deviner un nombre entre ${min} et ${max}. Vous avez ${tenta} tentatives.`);
    testerNombre();
}

function abandonGame() {
    if (!isPlaying) {
        alert("Aucune partie en cours.");
        return;
    }
    isPlaying = false;
    alert(`Vous avez abandonné. Le nombre était ${rando}.`);
}

document.getElementById("start").addEventListener("click", startGame);
document.getElementById("abandon").addEventListener("click", abandonGame);
