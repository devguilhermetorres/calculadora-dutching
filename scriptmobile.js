    document.write();
    document.getElementById("calcular-mobile").addEventListener("click", mob_calculate);
    
    function mob_calculate() {

        const mob_table = document.getElementById('table-mobile');

        const mob_form = document.getElementById('calc-mobile');
        const mob_resultDiv = document.getElementById('result-mobile');

        const mob_textodd1 = document.getElementById('odd-1-mobile');
        const mob_textodd2 = document.getElementById('odd-2-mobile');
        const mob_textodd3 = document.getElementById('odd-3-mobile');
        const mob_textodd4 = document.getElementById('odd-4-mobile');

        var mob_messages = document.getElementById('messages-mobile');

        const mob_ColresultDiv = document.getElementById('divresult-mobile');
        const mob_ColpercentageDiv = document.getElementById('divpercentage-mobile');
        
        const mob_percentageDiv = document.getElementById('percentage-mobile');

        const mob_resultstakeADiv = document.getElementById('result-stakeA-mobile');
        const mob_resultstakeBDiv = document.getElementById('result-stakeB-mobile');
        const mob_resultstakeCDiv = document.getElementById('result-stakeC-mobile');
        const mob_resultstakeDDiv = document.getElementById('result-stakeD-mobile');

        const mob_percentstakeADiv = document.getElementById('percent-stakeA-mobile');
        const mob_percentstakeBDiv = document.getElementById('percent-stakeB-mobile');
        const mob_percentstakeCDiv = document.getElementById('percent-stakeC-mobile');
        const mob_percentstakeDDiv = document.getElementById('percent-stakeD-mobile');

        function checkWidth() {
            if (window.innerWidth > 900) {
                mob_messages.style.display = "none";
            } else {
                mob_messages.style.display = "flex";
            }
        }

        window.addEventListener('resize', checkWidth);
        window.addEventListener('load', checkWidth);

        // Adicionar um evento de submit ao formulário
        mob_form.addEventListener('submit', function(event) {
            // Previne o envio padrão do formulário
            event.preventDefault();

            const mob_inputs = mob_table.querySelectorAll('input[type="text"]');

            mob_inputs.forEach(function(input) {
                // Se o campo estiver vazio, define o valor como 0
                if (input.value === '') {
                    input.value = 0;
                }
            });

            let mob_odd1 = parseFloat(document.getElementById('odd-1-mobile').value.replace(',', '.'));
            let mob_odd2 = parseFloat(document.getElementById('odd-2-mobile').value.replace(',', '.'));
            let mob_odd3 = parseFloat(document.getElementById('odd-3-mobile').value.replace(',', '.'));
            let mob_odd4 = parseFloat(document.getElementById('odd-4-mobile').value.replace(',', '.'));
            let mob_total = parseFloat(document.getElementById('total-mobile').value.replace(',', '.'));

            const mob_pA = 1 / mob_odd1;
            const mob_pB = 1 / mob_odd2;
            const mob_pC = 1 / mob_odd3;
            const mob_pD = 1 / mob_odd4;

            // Duas odds
            if (mob_odd3 === 0 && mob_odd4 === 0) {
                
                // Conferir se os números são válidos
                if (isNaN(mob_odd1) || isNaN(mob_odd2) || isNaN(mob_total)) {

                    mob_messages.style.display = "flex";
                    mob_messages.style.backgroundColor = 'rgb(231, 51, 51)';
                    mob_messages.textContent = "Números inválidos!";

                    return;
                }

                else {

                    const mob_sumProbabilities = mob_pA + mob_pB;

                    const mob_stakeA = (mob_total * mob_pA) / mob_sumProbabilities;
                    const mob_stakeB = (mob_total * mob_pB) / mob_sumProbabilities;

                    const mob_profitPercentage = (1 / mob_sumProbabilities) - 1;
                    const mob_profitPercentageInfo = mob_profitPercentage*100
                    
                    const mob_profit = mob_total * mob_profitPercentage;

                    mob_resultstakeADiv.style.fontWeight = '600';
                    mob_resultstakeADiv.style.color = '#171717';

                    mob_resultstakeBDiv.style.fontWeight = '600';
                    mob_resultstakeBDiv.style.color = '#171717';

                    mob_resultstakeCDiv.style.fontWeight = 'normal';
                    mob_resultstakeCDiv.style.color = 'rgb(114, 114, 114)';

                    mob_resultstakeDDiv.style.fontWeight = 'normal';
                    mob_resultstakeDDiv.style.color = 'rgb(114, 114, 114)';

                    mob_resultDiv.style.fontWeight = '600';
                    mob_resultDiv.style.color = '#171717';

                    mob_percentageDiv.style.fontWeight = '600';
                    mob_percentageDiv.style.color = '#171717'

                    mob_percentstakeADiv.style.fontWeight = '600';
                    mob_percentstakeADiv.style.color = '#171717'

                    mob_percentstakeBDiv.style.fontWeight = '600';
                    mob_percentstakeBDiv.style.color = '#171717'

                    mob_percentstakeCDiv.style.fontWeight = 'normal';
                    mob_percentstakeCDiv.style.color = 'rgb(114, 114, 114)'

                    mob_percentstakeDDiv.style.fontWeight = 'normal';
                    mob_percentstakeDDiv.style.color = 'rgb(114, 114, 114)'

                    mob_textodd1.style.fontWeight = '600';
                    mob_textodd1.style.color = '#171717'

                    mob_textodd2.style.fontWeight = '600';
                    mob_textodd2.style.color = '#171717'

                    mob_textodd3.style.fontWeight = 'normal';
                    mob_textodd3.style.color = 'rgb(114, 114, 114)'

                    mob_textodd4.style.fontWeight = 'normal';
                    mob_textodd4.style.color = 'rgb(114, 114, 114)'

                    const mob_percentA = (mob_stakeA / mob_total)*100;
                    const mob_percentB = (mob_stakeB / mob_total)*100;

                    mob_percentstakeADiv.innerHTML = `
                    ${mob_percentA.toFixed(2)} %
                    `;

                    mob_percentstakeBDiv.innerHTML = `
                    ${mob_percentB.toFixed(2)} %
                    `;

                    mob_percentstakeCDiv.innerHTML = `
                    %
                    `;

                    mob_percentstakeDDiv.innerHTML = `
                    %
                    `;

                    mob_resultstakeADiv.innerHTML = `
                    ${mob_stakeA.toFixed(2)}
                    `;

                    mob_resultstakeBDiv.innerHTML = `
                    ${mob_stakeB.toFixed(2)}
                    `;

                    mob_resultstakeCDiv.innerHTML = `
                    0.00
                    `;

                    mob_resultstakeDDiv.innerHTML = `
                    0.00
                    `;

                    mob_resultDiv.innerHTML = `
                    ${mob_profit.toFixed(2)}
                    `;

                    mob_percentageDiv.innerHTML = `
                    ${mob_profitPercentageInfo.toFixed(2)} %
                    `;

                    if (mob_profit > 0) {
                        mob_ColresultDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                        mob_ColpercentageDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                    }

                    else {
                        mob_ColresultDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                        mob_ColpercentageDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                    }

                    mob_messages.style.display = "flex";
                    mob_messages.style.backgroundColor = '#171717'
                    mob_messages.textContent = "Cálculo realizado! (2 Odds)";

                    return
                }
            }

           // Três odds 
            else if (mob_odd4 === 0 ) {



                // Conferir se os números são válidos
                if (isNaN(mob_odd1) || isNaN(mob_odd2) || isNaN(mob_odd3) || isNaN(mob_total)) {

                    mob_messages.style.display = "flex";
                    mob_messages.style.backgroundColor = 'rgb(231, 51, 51)';
                    mob_messages.textContent = "Números inválidos!";

                    return;
                    
                }

                else {

                    const mob_sumProbabilities = mob_pA + mob_pB + mob_pC;

                    const mob_stakeA = (mob_total * mob_pA) / mob_sumProbabilities;
                    const mob_stakeB = (mob_total * mob_pB) / mob_sumProbabilities;
                    const mob_stakeC = (mob_total * mob_pC) / mob_sumProbabilities;

                    const mob_profitPercentage = (1 / mob_sumProbabilities) - 1;
                    const mob_profitPercentageInfo = mob_profitPercentage*100;
                    
                    const mob_profit = mob_total * mob_profitPercentage;

                    mob_resultstakeADiv.style.fontWeight = '600';
                    mob_resultstakeADiv.style.color = '#171717';

                    mob_resultstakeBDiv.style.fontWeight = '600';
                    mob_resultstakeBDiv.style.color = '#171717';

                    mob_resultstakeCDiv.style.fontWeight = '600';
                    mob_resultstakeCDiv.style.color = '#171717';

                    mob_resultstakeDDiv.style.fontWeight = 'normal';
                    mob_resultstakeDDiv.style.color = 'rgb(114, 114, 114)';

                    mob_resultDiv.style.fontWeight = '600';
                    mob_resultDiv.style.color = '#171717';

                    mob_percentageDiv.style.fontWeight = '600';
                    mob_percentageDiv.style.color = '#171717'

                    mob_percentstakeADiv.style.fontWeight = '600';
                    mob_percentstakeADiv.style.color = '#171717'

                    mob_percentstakeBDiv.style.fontWeight = '600';
                    mob_percentstakeBDiv.style.color = '#171717'

                    mob_percentstakeCDiv.style.fontWeight = '600';
                    mob_percentstakeCDiv.style.color = '#171717'

                    mob_percentstakeDDiv.style.fontWeight = 'normal';
                    mob_percentstakeDDiv.style.color = 'rgb(114, 114, 114)'

                    mob_textodd1.style.fontWeight = '600';
                    mob_textodd1.style.color = '#171717'

                    mob_textodd2.style.fontWeight = '600';
                    mob_textodd2.style.color = '#171717'

                    mob_textodd3.style.fontWeight = '600';
                    mob_textodd3.style.color = '#171717'

                    mob_textodd4.style.fontWeight = 'normal';
                    mob_textodd4.style.color = 'rgb(114, 114, 114)'

                    const mob_percentA = (mob_stakeA / mob_total)*100;
                    const mob_percentB = (mob_stakeB / mob_total)*100;
                    const mob_percentC = (mob_stakeC / mob_total)*100;

                    mob_percentstakeADiv.innerHTML = `
                    ${mob_percentA.toFixed(2)} %
                    `;

                    mob_percentstakeBDiv.innerHTML = `
                    ${mob_percentB.toFixed(2)} %
                    `;

                    mob_percentstakeCDiv.innerHTML = `
                    ${mob_percentC.toFixed(2)} %
                    `;

                    mob_percentstakeDDiv.innerHTML = `
                    %
                    `;

                    mob_resultstakeADiv.innerHTML = `
                    ${mob_stakeA.toFixed(2)}
                    `;

                    mob_resultstakeBDiv.innerHTML = `
                    ${mob_stakeB.toFixed(2)}
                    `;

                    mob_resultstakeCDiv.innerHTML = `
                    ${mob_stakeC.toFixed(2)}
                    `;

                    mob_resultstakeDDiv.innerHTML = `
                    0.00
                    `;

                    mob_resultDiv.innerHTML = `
                    ${mob_profit.toFixed(2)}
                    `;

                    mob_percentageDiv.innerHTML = `
                    ${mob_profitPercentageInfo.toFixed(2)} %
                    `;

                    if (mob_profit > 0) {
                        mob_ColresultDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                        mob_ColpercentageDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                    }

                    else {
                        mob_ColresultDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                        mob_ColpercentageDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                    }
                    
                    mob_messages.style.display = "flex";
                    mob_messages.style.backgroundColor = '#171717'
                    mob_messages.textContent = "Cálculo realizado! (3 Odds)";

                    return
                }
            }

            // Quatro odds
            else {

                if (isNaN(mob_odd1) || isNaN(mob_odd2) || isNaN(mob_odd3) || isNaN(mob_odd4) || isNaN(mob_total)) {

                    mob_messages.style.display = "flex";
                    mob_messages.style.backgroundColor = 'rgb(231, 51, 51)';
                    mob_messages.textContent = "Números inválidos!";

                    return;
                }

                else {

                    const mob_sumProbabilities = mob_pA + mob_pB + mob_pC + mob_pD;

                    const mob_stakeA = (mob_total * mob_pA) / mob_sumProbabilities;
                    const mob_stakeB = (mob_total * mob_pB) / mob_sumProbabilities;
                    const mob_stakeC = (mob_total * mob_pC) / mob_sumProbabilities;
                    const mob_stakeD = (mob_total * mob_pD) / mob_sumProbabilities;

                    const mob_profitPercentage = (1 / mob_sumProbabilities) - 1;
                    const mob_profitPercentageInfo = mob_profitPercentage*100
                    
                    const mob_profit = mob_total * mob_profitPercentage;

                    mob_resultstakeADiv.style.fontWeight = '600';
                    mob_resultstakeADiv.style.color = '#171717';

                    mob_resultstakeBDiv.style.fontWeight = '600';
                    mob_resultstakeBDiv.style.color = '#171717';

                    mob_resultstakeCDiv.style.fontWeight = '600';
                    mob_resultstakeCDiv.style.color = '#171717';

                    mob_resultstakeDDiv.style.fontWeight = '600';
                    mob_resultstakeDDiv.style.color = '#171717';

                    mob_resultDiv.style.fontWeight = '600';
                    mob_resultDiv.style.color = '#171717';

                    mob_percentageDiv.style.fontWeight = '600';
                    mob_percentageDiv.style.color = '#171717'

                    mob_percentstakeADiv.style.fontWeight = '600';
                    mob_percentstakeADiv.style.color = '#171717'

                    mob_percentstakeBDiv.style.fontWeight = '600';
                    mob_percentstakeBDiv.style.color = '#171717'

                    mob_percentstakeCDiv.style.fontWeight = '600';
                    mob_percentstakeCDiv.style.color = '#171717'

                    mob_percentstakeDDiv.style.fontWeight = '600';
                    mob_percentstakeDDiv.style.color = '#171717'

                    mob_textodd1.style.fontWeight = '600';
                    mob_textodd1.style.color = '#171717'

                    mob_textodd2.style.fontWeight = '600';
                    mob_textodd2.style.color = '#171717'

                    mob_textodd3.style.fontWeight = '600';
                    mob_textodd3.style.color = '#171717'

                    mob_textodd4.style.fontWeight = '600';
                    mob_textodd4.style.color = '#171717'

                    const mob_percentA = (mob_stakeA / mob_total)*100;
                    const mob_percentB = (mob_stakeB / mob_total)*100;
                    const mob_percentC = (mob_stakeC / mob_total)*100;
                    const mob_percentD = (mob_stakeD / mob_total)*100;

                    mob_percentstakeADiv.innerHTML = `
                    ${mob_percentA.toFixed(2)} %
                    `;

                    mob_percentstakeBDiv.innerHTML = `
                    ${mob_percentB.toFixed(2)} %
                    `;

                    mob_percentstakeCDiv.innerHTML = `
                    ${mob_percentC.toFixed(2)} %
                    `;

                    mob_percentstakeDDiv.innerHTML = `
                    ${mob_percentD.toFixed(2)} %
                    `;

                    mob_resultstakeADiv.innerHTML = `
                    ${mob_stakeA.toFixed(2)}
                    `;

                    mob_resultstakeBDiv.innerHTML = `
                    ${mob_stakeB.toFixed(2)}
                    `;

                    mob_resultstakeCDiv.innerHTML = `
                    ${mob_stakeC.toFixed(2)}
                    `;

                    mob_resultstakeDDiv.innerHTML = `
                    ${mob_stakeD.toFixed(2)}
                    `;

                    mob_resultDiv.innerHTML = `
                    ${mob_profit.toFixed(2)}
                    `;

                    mob_percentageDiv.innerHTML = `
                    ${mob_profitPercentageInfo.toFixed(2)} %
                    `;

                    if (mob_profit > 0) {
                        mob_ColresultDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                        mob_ColpercentageDiv.style.backgroundColor = 'rgb(34, 230, 115)';
                    }

                    else {
                        mob_ColresultDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                        mob_ColpercentageDiv.style.backgroundColor = 'rgb(231, 51, 51)';
                    }

                    mob_messages.style.display = "flex";
                    mob_messages.style.backgroundColor = '#171717'
                    mob_messages.textContent = "Cálculo realizado! (4 Odds)";

                    return
                }
            }

        });

        }


        
