let userDificult;
function choise() {
	do {
		userDificult = prompt("choix de difficulté en numbre de possibilité");

		if (!userDificult) {
			return;
		}
	} while (isNaN(Number(userDificult)));
}
choise();

const justPrice = Math.ceil(Math.random() * userDificult);

let userInput;
let result;
let count = 1;
function checkPrice() {
	while (userInput != justPrice) {
		do {
			userInput = prompt("Veuillez saisir un nombre");

			if (!userInput) {
				return;
			}
		} while (isNaN(Number(userInput)));
		if (userInput < justPrice) {
			console.log("trop petit");
			count++;
		}

		if (userInput > justPrice) {
			console.log("trop grand");
			count++;
		}
	}
	if ((userInput = justPrice)) {
		result = `Vous avez Gagné en ${count} coup`;
	}
	return result;
}
console.log(checkPrice());
// alert(checkPrice());
document.getElementById("win").innerHTML = checkPrice();
