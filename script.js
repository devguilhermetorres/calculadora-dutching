    document.getElementById("calcular").addEventListener("click", calculate);
    
    function calculate() {

        const table = document.getElementById('table-desktop');

        const form = document.getElementById('calc');
        const resultDiv = document.getElementById('result');

        const textodd1 = document.getElementById('odd-1');
        const textodd2 = document.getElementById('odd-2');
        const textodd3 = document.getElementById('odd-3');
        const textodd4 = document.getElementById('odd-4');

        var messages = document.getElementById('messages');

        const ColresultDiv = document.getElementById('divresult');
        const ColpercentageDiv = document.getElementById('divpercentage');
        
        const percentageDiv = document.getElementById('percentage');

        const resultstakeADiv = document.getElementById('result-stakeA');
        const resultstakeBDiv = document.getElementById('result-stakeB');
        const resultstakeCDiv = document.getElementById('result-stakeC');
        const resultstakeDDiv = document.getElementById('result-stakeD');

        const percentstakeADiv = document.getElementById('percent-stakeA');
        const percentstakeBDiv = document.getElementById('percent-stakeB');
        const percentstakeCDiv = document.getElementById('percent-stakeC');
        const percentstakeDDiv = document.getElementById('percent-stakeD');


        function checkWidth() {
            if (window.innerWidth < 900) {
                messages.style.display = "none";
            } else {
                messages.style.display = "flex";

            }
        }

        window.addEventListener('resize', checkWidth);
        window.addEventListener('load', checkWidth);

        // Adicionar um evento de submit ao formulário
        form.addEventListener('submit', function(event) {
            // Previne o envio padrão do formulário
            event.preventDefault();

            const inputs = table.querySelectorAll('input[type="text"]');

            inputs.forEach(function(input) {
                // Se o campo estiver vazio, define o valor como 0
                if (input.value === '') {
                    input.value = 0;
                }
            });

            let odd1 = parseFloat(document.getElementById('odd-1').value.replace(',', '.'));
            let odd2 = parseFloat(document.getElementById('odd-2').value.replace(',', '.'));
            let odd3 = parseFloat(document.getElementById('odd-3').value.replace(',', '.'));
            let odd4 = parseFloat(document.getElementById('odd-4').value.replace(',', '.'));
            let total = parseFloat(document.getElementById('total').value.replace(',', '.'));

            const pA = 1 / odd1;
            const pB = 1 / odd2;
            const pC = 1 / odd3;
            const pD = 1 / odd4;

            // Duas odds
            if (odd3 === 0 && odd4 === 0) {

                // Conferir se os números são válidos
                if (isNaN(odd1) || isNaN(odd2) || isNaN(total)) {
                    
                    messages.style.display = "flex";
                    messages.style.backgroundColor = 'rgb(231, 51, 51)';
                    messages.textContent = "Números inválidos!";

                    return;
                }

                else {
                    const sumProbabilities = pA + pB;

                    const stakeA = (total * pA) / sumProbabilities;
                    const stakeB = (total * pB) / sumProbabilities;

                    const profitPercentage = (1 / sumProbabilities) - 1;
                    const profitPercentageInfo = profitPercentage*100
                    
                    const profit = total * profitPercentage;

                    resultstakeADiv.style.fontWeight = '600';
                    resultstakeADiv.style.color = '#171717';

                    resultstakeBDiv.style.fontWeight = '600';
                    resultstakeBDiv.style.color = '#171717';

                    resultstakeCDiv.style.fontWeight = 'normal';
                    resultstakeCDiv.style.color = 'rgb(114, 114, 114)';

                    resultstakeDDiv.style.fontWeight = 'normal';
                    resultstakeDDiv.style.color = 'rgb(114, 114, 114)';

                    resultDiv.style.fontWeight = '600';
                    resultDiv.style.color = '#171717';

                    percentageDiv.style.fontWeight = '600';
                    percentageDiv.style.color = '#171717'

                    percentstakeADiv.style.fontWeight = '600';
                    percentstakeADiv.style.color = '#171717'

                    percentstakeBDiv.style.fontWeight = '600';
                    percentstakeBDiv.style.color = '#171717'

                    percentstakeCDiv.style.fontWeight = 'normal';
                    percentstakeCDiv.style.color = 'rgb(114, 114, 114)'

                    percentstakeDDiv.style.fontWeight = 'normal';
                    percentstakeDDiv.style.color = 'rgb(114, 114, 114)'

                    textodd1.style.fontWeight = '600';
                    textodd1.style.color = '#171717'

                    textodd2.style.fontWeight = '600';
                    textodd2.style.color = '#171717'

                    textodd3.style.fontWeight = 'normal';
                    textodd3.style.color = 'rgb(114, 114, 114)'

                    textodd4.style.fontWeight = 'normal';
                    textodd4.style.color = 'rgb(114, 114, 114)'

                    const percentA = (stakeA / total)*100;
                    const percentB = (stakeB / total)*100;

                    percentstakeADiv.innerHTML = `
                    ${percentA.toFixed(2)} %
                    `;

                    percentstakeBDiv.innerHTML = `
                    ${percentB.toFixed(2)} %
                    `;

                    percentstakeCDiv.innerHTML = `
                    %
                    `;

                    percentstakeDDiv.innerHTML = `
                    %
                    `;

                    resultstakeADiv.innerHTML = `
                    ${stakeA.toFixed(2)}
                    `;

                    resultstakeBDiv.innerHTML = `
                    ${stakeB.toFixed(2)}
                    `;

                    resultstakeCDiv.innerHTML = `
                    0.00
                    `;

                    resultstakeDDiv.innerHTML = `
                    0.00
                    `;

                    resultDiv.innerHTML = `
                    ${profit.toFixed(2)}
                    `;

                    percentageDiv.innerHTML = `
                    ${profitPercentageInfo.toFixed(2)} %
                    `;

                    if (profit > 0) {
                        ColresultDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                        ColpercentageDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                    }

                    else {
                        ColresultDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                        ColpercentageDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                    }

                    messages.style.display = "flex";
                    messages.style.backgroundColor = '#171717'
                    messages.textContent = "Cálculo realizado! (2 Odds)";

                    return
                }
            }

           // Três odds 
            else if (odd4 === 0 ) {

                // Conferir se os números são válidos
                if (isNaN(odd1) || isNaN(odd2) || isNaN(odd3) || isNaN(total)) {

                    messages.style.display = "flex";
                    messages.style.backgroundColor = 'rgb(231, 51, 51)';
                    messages.textContent = "Números inválidos!";

                    return;
                    
                }

                else {
                    const sumProbabilities = pA + pB + pC;

                    const stakeA = (total * pA) / sumProbabilities;
                    const stakeB = (total * pB) / sumProbabilities;
                    const stakeC = (total * pC) / sumProbabilities;

                    const profitPercentage = (1 / sumProbabilities) - 1;
                    const profitPercentageInfo = profitPercentage*100
                    
                    const profit = total * profitPercentage;

                    resultstakeADiv.style.fontWeight = '600';
                    resultstakeADiv.style.color = '#171717';

                    resultstakeBDiv.style.fontWeight = '600';
                    resultstakeBDiv.style.color = '#171717';

                    resultstakeCDiv.style.fontWeight = '600';
                    resultstakeCDiv.style.color = '#171717';

                    resultstakeDDiv.style.fontWeight = 'normal';
                    resultstakeDDiv.style.color = 'rgb(114, 114, 114)';

                    resultDiv.style.fontWeight = '600';
                    resultDiv.style.color = '#171717';

                    percentageDiv.style.fontWeight = '600';
                    percentageDiv.style.color = '#171717'

                    percentstakeADiv.style.fontWeight = '600';
                    percentstakeADiv.style.color = '#171717'

                    percentstakeBDiv.style.fontWeight = '600';
                    percentstakeBDiv.style.color = '#171717'

                    percentstakeCDiv.style.fontWeight = '600';
                    percentstakeCDiv.style.color = '#171717'

                    percentstakeDDiv.style.fontWeight = 'normal';
                    percentstakeDDiv.style.color = 'rgb(114, 114, 114)'

                    textodd1.style.fontWeight = '600';
                    textodd1.style.color = '#171717'

                    textodd2.style.fontWeight = '600';
                    textodd2.style.color = '#171717'

                    textodd3.style.fontWeight = '600';
                    textodd3.style.color = '#171717'

                    textodd4.style.fontWeight = 'normal';
                    textodd4.style.color = 'rgb(114, 114, 114)'

                    const percentA = (stakeA / total)*100;
                    const percentB = (stakeB / total)*100;
                    const percentC = (stakeC / total)*100;

                    percentstakeADiv.innerHTML = `
                    ${percentA.toFixed(2)} %
                    `;

                    percentstakeBDiv.innerHTML = `
                    ${percentB.toFixed(2)} %
                    `;

                    percentstakeCDiv.innerHTML = `
                    ${percentC.toFixed(2)} %
                    `;

                    percentstakeDDiv.innerHTML = `
                    %
                    `;

                    resultstakeADiv.innerHTML = `
                    ${stakeA.toFixed(2)}
                    `;

                    resultstakeBDiv.innerHTML = `
                    ${stakeB.toFixed(2)}
                    `;

                    resultstakeCDiv.innerHTML = `
                    ${stakeC.toFixed(2)}
                    `;

                    resultstakeDDiv.innerHTML = `
                    0.00
                    `;

                    resultDiv.innerHTML = `
                    ${profit.toFixed(2)}
                    `;

                    percentageDiv.innerHTML = `
                    ${profitPercentageInfo.toFixed(2)} %
                    `;

                    if (profit > 0) {
                        ColresultDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                        ColpercentageDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                    }

                    else {
                        ColresultDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                        ColpercentageDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                    }
                    
                    messages.style.display = "flex";
                    messages.style.backgroundColor = '#171717'
                    messages.textContent = "Cálculo realizado! (3 Odds)";

                    return
                }
            }

            // Quatro odds
            else {
                if (isNaN(odd1) || isNaN(odd2) || isNaN(odd3) || isNaN(odd4) || isNaN(total)) {

                    messages.style.display = "flex";
                    messages.style.backgroundColor = 'rgb(231, 51, 51)';
                    messages.textContent = "Números inválidos!";

                    return;
                }

                else {
                    const sumProbabilities = pA + pB + pC + pD;

                    const stakeA = (total * pA) / sumProbabilities;
                    const stakeB = (total * pB) / sumProbabilities;
                    const stakeC = (total * pC) / sumProbabilities;
                    const stakeD = (total * pD) / sumProbabilities;

                    const profitPercentage = (1 / sumProbabilities) - 1;
                    const profitPercentageInfo = profitPercentage*100
                    
                    const profit = total * profitPercentage;

                    resultstakeADiv.style.fontWeight = '600';
                    resultstakeADiv.style.color = '#171717';

                    resultstakeBDiv.style.fontWeight = '600';
                    resultstakeBDiv.style.color = '#171717';

                    resultstakeCDiv.style.fontWeight = '600';
                    resultstakeCDiv.style.color = '#171717';

                    resultstakeDDiv.style.fontWeight = '600';
                    resultstakeDDiv.style.color = '#171717';

                    resultDiv.style.fontWeight = '600';
                    resultDiv.style.color = '#171717';

                    percentageDiv.style.fontWeight = '600';
                    percentageDiv.style.color = '#171717'

                    percentstakeADiv.style.fontWeight = '600';
                    percentstakeADiv.style.color = '#171717'

                    percentstakeBDiv.style.fontWeight = '600';
                    percentstakeBDiv.style.color = '#171717'

                    percentstakeCDiv.style.fontWeight = '600';
                    percentstakeCDiv.style.color = '#171717'

                    percentstakeDDiv.style.fontWeight = '600';
                    percentstakeDDiv.style.color = '#171717'

                    textodd1.style.fontWeight = '600';
                    textodd1.style.color = '#171717'

                    textodd2.style.fontWeight = '600';
                    textodd2.style.color = '#171717'

                    textodd3.style.fontWeight = '600';
                    textodd3.style.color = '#171717'

                    textodd4.style.fontWeight = '600';
                    textodd4.style.color = '#171717'

                    const percentA = (stakeA / total)*100;
                    const percentB = (stakeB / total)*100;
                    const percentC = (stakeC / total)*100;
                    const percentD = (stakeD / total)*100;

                    percentstakeADiv.innerHTML = `
                    ${percentA.toFixed(2)} %
                    `;

                    percentstakeBDiv.innerHTML = `
                    ${percentB.toFixed(2)} %
                    `;

                    percentstakeCDiv.innerHTML = `
                    ${percentC.toFixed(2)} %
                    `;

                    percentstakeDDiv.innerHTML = `
                    ${percentD.toFixed(2)} %
                    `;

                    resultstakeADiv.innerHTML = `
                    ${stakeA.toFixed(2)}
                    `;

                    resultstakeBDiv.innerHTML = `
                    ${stakeB.toFixed(2)}
                    `;

                    resultstakeCDiv.innerHTML = `
                    ${stakeC.toFixed(2)}
                    `;

                    resultstakeDDiv.innerHTML = `
                    ${stakeD.toFixed(2)}
                    `;

                    resultDiv.innerHTML = `
                    ${profit.toFixed(2)}
                    `;

                    percentageDiv.innerHTML = `
                    ${profitPercentageInfo.toFixed(2)} %
                    `;

                    if (profit > 0) {
                        ColresultDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                        ColpercentageDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                    }

                    else {
                        ColresultDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                        ColpercentageDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                    }

                    messages.style.display = "flex";
                    messages.style.backgroundColor = '#171717'
                    messages.textContent = "Cálculo realizado! (4 Odds)";

                    return
                }
            }

        });
        }
        
        
