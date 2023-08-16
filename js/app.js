function calc() {
  let p1 = document.querySelector("#peso");
  let d2 = document.querySelector("#dose");
  let c3 = document.querySelector("#conc");
  let d4 = document.querySelector("#dTotal");
  let v5 = document.querySelector("#vMed");

  peso = Number(p1.value);
  dose = Number(d2.value);
  conc = Number(c3.value);

  if (p1.value == 0 || d2.value == 0 || c3.value == 0) {
    alert("Preencha todos os campos para continuar!");
  } else {
    let doseTotal = peso * dose;
    let volumeMedicamento = (peso * dose) / conc;

    let resultado = (document.querySelector(".resultado").style.display =
      "flex");
    d4.innerHTML = `Dose Total: <br>${doseTotal} mg`;
    v5.innerHTML = `Volume do Medicamento: <br>${volumeMedicamento.toFixed(
      2
    )} ml`;
  }
}
