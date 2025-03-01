const form = document.getElementById("parametros")
const inputCant = document.getElementById("cantidad-in")
const pRes = document.getElementById("resultado")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pRes.textContent = inputCant.value;
});
