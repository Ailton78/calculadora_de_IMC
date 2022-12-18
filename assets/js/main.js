function meuScopo() {
  const form = document.querySelector(".form");
  // const resultado = document.querySelector(".resultado");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
      setResultadado("Peso inválido", false);
      return;
    }
    if (!altura) {
      setResultadado("Altura inválido", false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultadado(msg, true);
  });
  function getNivelImc(imc) {
    const nivel = [
      "Abaixo do peso",
      "Peso Normal",
      "Sobrepeso",
      "Obsidade grau 1",
      "Obsidade grau 2",
      "Obsidade grau 3",
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }

  function criaP() {
    const p = document.createElement("p");
    return p;
  }
  function setResultadado(msg, isValid) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = ``;

    const p = criaP();
    if (isValid) {
      p.classList.add("paragrafo-resultado");
    } else {
      p.classList.add("bad");
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
  }

  /* function recebeEventoForm(e) {
    e.preventDefault();
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");
    if (typeof peso.value !== "string") {
      console.log("tipo valido");
    } else {
      console.log("tipo Invalido");
    }

    let imc = Math.floor(peso.value / (altura.value * altura.value), 2);

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
    } else {
      alert("valores incorretos");
    }
  }
*/
}
meuScopo();
