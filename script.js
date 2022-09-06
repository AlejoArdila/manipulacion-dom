const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  console.log(event);
  event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}

/*   -----   MANIPULACION DEL DOM  ------ 

const p = document.querySelector("p");
const parrafito = document.getElementsByClassName(".parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");


console.log(input.value);
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerText = "LA PUNTICA NO MAS";
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");

//h1.classList.add("rojo");
//h1.classList.remove("verde");
//h1.classList.toggle("rojo");
//console.log(h1.classList.contains("rojo"));

input.value = "987";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://www.pandaancha.mx/plds/articulos/4bf04095762666e2e6b288e55796834e585710389.jpg"
);

pid.append(img);

----------------------------  */
