function calcularEnter(event) {
    if (event.keyCode === 13) {
        calcular()
    }
}

function calcular() {
    const crianca = document.getElementById('criancas')
    const adultos = document.getElementById('adultos')
    const dias = document.getElementById('dias')
    const dia = document.getElementById('dia')
    const almoco = document.getElementById('almoco')
    const resultado = document.getElementById('resultado')

    const criancaN = parseFloat(crianca.value)
    const adultosN = parseFloat(adultos.value)
    const diasN = parseFloat(dias.value)
    const diaN = parseFloat(dia.value)
    const almocoN = parseFloat(almoco.value)

    crianca.value = ""
    adultos.value = ""
    dias.value = ""
    dia.value = ""
    almoco.value = ""

    if (criancaN > 0) {
        if (diaN == 1) {
            const valor1 = (99.90 * diasN) * adultosN
            const valor2 = (49.95 * diasN) * criancaN
            const valorTotal = valor1 + valor2
            resultado.textContent = `O valor total da hospedagem é R$ ${valorTotal.toFixed(2)}`
        }
        if (diaN == 2) {
            if (almocoN == 1) {
                const valor1 = (139.90 * diasN) * adultosN
                const valor2 = (69.95 * diasN) * criancaN
                const almoco1 = (49.90 * diasN) * adultosN
                const almoco2 = (24.95 * diasN) * criancaN
                const valorTotal = valor1 + valor2 + almoco1 + almoco2
                resultado.textContent = `O valor total da hospedagem é R$ ${valorTotal.toFixed(2)}`
            } else {
            const valor1 = (139.90 * diasN) * adultosN
            const valor2 = (69.95 * diasN) * criancaN
            const valorTotal = valor1 + valor2
            resultado.textContent = `O valor total da hospedagem é R$ ${valorTotal.toFixed(2)}`
            }
        }
        if (diaN == 3) {
             if (almocoN == 1) {
                const valor1 = (160.89 * diasN) * adultosN
                const valor2 = (80.45 * diasN) * criancaN
                const almoco1 = (57.39 * diasN) * adultosN
                const almoco2 = (28.69 * diasN) * criancaN
                const valorTotal = valor1 + valor2 + almoco1 + almoco2
                resultado.textContent = `O valor total da hospedagem é R$ ${valorTotal.toFixed(2)}`
            } else {
            const valor1 = (160.89 * diasN) * adultosN
            const valor2 = (80.45 * diasN) * criancaN
            const valorTotal = valor1 + valor2
            resultado.textContent = `O valor total da hospedagem é R$ ${valorTotal.toFixed(2)}`
            }

        }
    } else {
        if (diaN == 1) {
            const valor1 = (99.90 * diasN) * adultosN
            resultado.textContent = `O valor total da hospedagem é R$ ${valor1.toFixed(2)}`
        }
        if (diaN == 2) {
            if (almocoN == 1) {
                const valor1 = (139.90 * diasN) * adultosN
                const almoco1 = (49.90 * diasN) * adultosN
                const valorTotal = valor1 + almoco1
                resultado.textContent = `O valor total da hospedagem é R$ ${valorTotal.toFixed(2)}`
            } else {
            const valor1 = (139.90 * diasN) * adultosN
            resultado.textContent = `O valor total da hospedagem é R$ ${valor1.toFixed(2)}`
            }
        }
        if (diaN == 3) {
             if (almocoN == 1) {
                const valor1 = (160.89 * diasN) * adultosN
                const almoco1 = (57.39 * diasN) * adultosN
                const valorTotal = valor1 + almoco1
                resultado.textContent = `O valor total da hospedagem é R$ ${valorTotal.toFixed(2)}`
            } else {
            const valor1 = (160.89 * diasN) * adultosN
            resultado.textContent = `O valor total da hospedagem é R$ ${valor1.toFixed(2)}`
            }

        }
    
    }
}


