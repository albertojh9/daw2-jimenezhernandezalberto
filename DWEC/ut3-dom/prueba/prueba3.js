document.getElementById("sumar").addEventListener("click", function () {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);

  document.getElementById("resultado").textContent = numero1 + numero2;
});