/* ========================= */
/* FUNÇÃO MATEMÁTICA PURA    */
/* ========================= */
function calcularResistencia(V, Pm, Lmm) {
    return (1000 * V * V) / (Pm * Lmm);
}

/* ========================= */
/* FUNÇÃO PRINCIPAL          */
/* ========================= */
function calcular() {

    const tensao = parseInt(document.getElementById("tensao").value);
    const potencia = parseInt(document.getElementById("potencia").value);
    const comprimento = parseInt(document.getElementById("comprimento").value);

    const resultadoDiv = document.getElementById("resultado");
    const erroDiv = document.getElementById("erro");

    resultadoDiv.innerHTML = "";
    erroDiv.innerHTML = "";

    if (
        Number.isInteger(tensao) && tensao > 0 &&
        Number.isInteger(potencia) && potencia > 0 &&
        Number.isInteger(comprimento) && comprimento > 0
    ) {

        const resistencia = calcularResistencia(tensao, potencia, comprimento);
        const minimo = resistencia * 0.9;
        const maximo = resistencia * 1.1;

        resultadoDiv.innerHTML = `
            <div class="card nominal">
                Valor Nominal<br>
                ${resistencia.toFixed(2)} Ω
            </div>

            <div class="card minimo">
                Mínimo (-10%): ${minimo.toFixed(2)} Ω
            </div>

            <div class="card maximo">
                Máximo (+10%): ${maximo.toFixed(2)} Ω
            </div>
        `;

    } else {
        erroDiv.innerHTML = "Insira valores inteiros maiores que zero.";
    }
}

/* ============================= */
/* VALIDAÇÃO INDUSTRIAL DE INPUT */
/* ============================= */

function permitirApenasInteirosPositivos(input) {

    input.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    input.addEventListener("paste", function (e) {
        const texto = (e.clipboardData || window.clipboardData).getData("text");
        if (!/^\d+$/.test(texto)) {
            e.preventDefault();
        }
    });

    input.addEventListener("keydown", function (e) {
        if (
            e.key === "e" ||
            e.key === "E" ||
            e.key === "+" ||
            e.key === "-" ||
            e.key === "." ||
            e.key === ","
        ) {
            e.preventDefault();
        }
    });
}

/* Aplica validação aos campos */
permitirApenasInteirosPositivos(document.getElementById("tensao"));
permitirApenasInteirosPositivos(document.getElementById("potencia"));
permitirApenasInteirosPositivos(document.getElementById("comprimento"));

/* Botão */
document.getElementById("btnCalcular").addEventListener("click", calcular);

/* Tecla Enter */
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcular();
    }
});