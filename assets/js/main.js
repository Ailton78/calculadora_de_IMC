function meuScopo() {
  const form = document.querySelector(".form");
  const resultado = form.querySelector(".resultado");

  function recebeEventoForm(e) {
    e.preventDefault();
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");

    console.log(peso.value);
    console.log(altura.value);

    let imc = Math.floor(peso.value / (altura.value * altura.value), 2);
    console.log(imc);

    if (imc < 18.5) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Abaixo do peso)</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Peso Normal)</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Sobrepeso)</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obsidade grau 1)</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obsidade grau 2)</p>`;
    } else if (imc >= 40) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obsidade grau 3)</p>`;
    }
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuScopo();
