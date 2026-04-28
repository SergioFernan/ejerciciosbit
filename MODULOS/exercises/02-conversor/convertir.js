import { exchangeRates, gastosCOP, gastosEUR, gastosUSD } from "./rate.js";

function sumaGastos (total) {
    let totalGastos = 0
    for (let i = 0; i < total.length; i++) {
        const gastos = total[i];
        totalGastos = gastos + total[i]
    }
    console.log(totalGastos)
}

sumaGastos(gastosCOP)



