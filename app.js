// generer un num aleatoir, demander a l'user d'entrer un numbre, lui dir si c'est plus petit ou plus grand.

const guessNumber = Math.ceil(Math.random() * 20);

function checkNumber() {
	let userInput;

	do {
		do {
			userInput = prompt("veuillez saisire un nombre");

			if (!userInput) {
				return;
			}
		} while (isNaN.userInput);

		if (userInput > guessNumber) {
			alert("C'est plus petit");
		} else if (userInput < guessNumber) {
			alert("C'est plus grand");
		} else if ((userInput = guessNumber)) {
			alert("C'est Gagné");
		}
	} while ((userInput = guessNumber));
}
console.log(checkNumber());
