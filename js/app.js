const conector = (texto, nuevoSigno) => {
    const palabra = texto.split(" "); 
    return palabra.join(`"${nuevoSigno}"`); 
};

const inputEl = document.getElementById("inputTexto");
const inputSeparador = document.getElementById("inputSeparador");
const btnEl = document.getElementById("btnCalcular");
const resultEl = document.getElementById("resultadoTexto");

btnEl.addEventListener("click", () => {
    const texto = inputEl.value.trim();
    const caracter = inputSeparador.value; 

    if (texto === "" || caracter === "") {
        resultEl.textContent = "Error: ¡Los campos no pueden estar vacíos!";        
        resultEl.style.color = "red";
        return; 
    }

    const textoConCanector = conector(texto, caracter);

    resultEl.textContent = `Resultado: ["${textoConCanector}"]`;
    resultEl.style.color = "white";

    inputEl.value = "";
    inputSeparador.value = "";
    inputEl.focus();
});

