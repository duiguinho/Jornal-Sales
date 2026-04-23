function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = [
    { 
      id: 1, nome: "Fernanda",
      email: "fernanda@gmail.com",
      senha: "123",
      nivel: "admin" 
    },
    { 
      id: 2, 
      nome: "Isaac", 
      email: "isaac@gmail.com", 
      senha: "456", 
      nivel: "representante" },
    { 
      id: 3, 
      nome: "Rodrigo", 
      email: "rodrigo@email.com", 
      senha: "789", 
      nivel: "usuario" }
  ];

  const user = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (!user) {
    alert("Email ou senha inválidos");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  if (user.nivel === "admin") {
    window.location.href = "adm/index_adm.html";
  } 
  else if (user.nivel === "representante") {
    window.location.href = "representante/index_representante.html";
  } 
  else {
    window.location.href = "usuário/index_usuario.html";
  }
}