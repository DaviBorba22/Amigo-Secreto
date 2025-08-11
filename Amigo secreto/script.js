let amigos = [];

function adicionar() {
  let input = document.getElementById("nome");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  amigos.forEach((amigo, index) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortear() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo para sortear!");
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").innerHTML =
    `O amigo secreto sorteado é: <b>${sorteado}</b>`;
}