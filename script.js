// cria um dicionário com as vogais e suas respectivas palavras
const segredos = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

// recebe o texto, percorre seus caracteres convertendo a vogal em palavra e retorna o texto criptografado
function criptografar(texto) {
  let criptografado = new String();

  for (const caractere of texto) {
    if (!segredos[caractere]) {
      criptografado += caractere;
    } else {
      criptografado += segredos[caractere];
    }
  }

  return criptografado;
}

// recebe o texto, busca e converte no texto cada palavra correspondente a vogal usando regex e retorna o texto descriptografado
function descriptografar(texto) {
  for (const vogal in segredos) {
    const palavra = segredos[vogal];
    texto = texto.replace(new RegExp(palavra, "g"), vogal);
  }

  return texto;
}

// valida se palavras do texto estão minúsculas, sem acentuação, permitindo pontuação no fim de cada palavra usando regex
function validar_entrada(texto) {
  for (const palavra of texto.split(/\s/g)) {
    if (!palavra.match(/^[a-z]*(\.|,|\?|!|:|;)?$/g) || !palavra) {
      return false;
    }
  }
  return true;
}

// evento para criptografar texto da entrada ao clicar no respectivo botão
const evento_criptografar = document.querySelector("#criptografar");

const aviso = "<h2>Texto inválido!</h2><p>Use apenas letras minúsculas e sem acentuação.</p>";

evento_criptografar.addEventListener("click", () => {
  const texto = document.getElementById("entrada").value;
  if (!validar_entrada(texto)) {
    document.getElementById("saida").innerHTML = aviso;
  } else {
    document.getElementById("saida").innerHTML = criptografar(texto);
  }
});

// evento para descriptografar texto da entrada ao clicar no respectivo botão
const evento_descriptografar = document.querySelector("#descriptografar");

evento_descriptografar.addEventListener("click", () => {
  const texto = document.getElementById("entrada").value;
  if (!validar_entrada(texto)) {
    document.getElementById("saida").innerHTML = aviso;
  } else {
    document.getElementById("saida").innerHTML = descriptografar(texto);
  }
});
