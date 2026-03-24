const form = document.getElementById("formContato");
const statusMensagem = document.getElementById("status"); // Se atentar ao nome da variável!

// Evento de "Ouvir" o código
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  statusMensagem.textContent = "";
  statusMensagem.style.color = "red";

  // Se o campo estiver em falta de algo, essa mensagem aparecerá
  if (!nome || !email || !mensagem) {
    statusMensagem.textContent = "Preencha todos os campos obrigatórios.";
    return;
  }

  // Teste para o e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    statusMensagem.textContent = "Digite um e-mail válido.";
    return;
  }

  // Status de espera
  statusMensagem.style.color = "blue";
  statusMensagem.textContent = "Enviando...";

  // Status de enviado
  setTimeout(() => {
    statusMensagem.style.color = "green";
    statusMensagem.textContent = "Mensagem enviada com sucesso!";
    form.reset();
  }, 2000);
});