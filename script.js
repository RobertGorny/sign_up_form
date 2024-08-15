
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwdErrorMsg = document.getElementById("passwd-error-msg");
const form = document.getElementById("form");
const inputs = Array.from(document.querySelectorAll("#form input"));



form.addEventListener("submit", event => {
	if (passwordInput.value === confirmPasswordInput.value)	{
		resetWrong();
		return;
	}
	event.preventDefault();
	setWrong();
});

inputs.forEach(input => input.addEventListener("input", () => {
	console.log("Oh yeah");
	removeRedBorders();
}));

const setWrong = () => {
	passwordInput.classList.add("wrong");
	confirmPasswordInput.classList.add("wrong");
	passwdErrorMsg.classList.remove("hidden");
};

const resetWrong = () => {
	passwordInput.classList.remove("wrong");
	confirmPasswordInput.classList.remove("wrong");
	passwdErrorMsg.classList.add("hidden");
};

const removeRedBorders = () => {
	passwordInput.classList.remove("wrong");
	confirmPasswordInput.classList.remove("wrong");
}
