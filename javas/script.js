function dados(event) {
                event.preventDefault();
        
                
                var qtdHomens = parseInt(document.getElementById('homens').value, 10) || 0; 
                var qtdMulheres = parseInt(document.getElementById('mulheres').value, 10) || 0; 
                var qtdCriancas = parseInt(document.getElementById('criancas').value, 10) || 0; 
        
                const carneBovinaHomem = 0.5;
                const frangoHomem = 0.2;
                const linguicaHomem = 0.2;
                const refrigeranteHomem = 0.3;
                const cervejaHomem = 0.8;
        
                const carneBovinaMulher = 0.3;
                const frangoMulher = 0.2;
                const linguicaMulher = 0.2;
                const refrigeranteMulher = 0.4;
                const cervejaMulher = 0.5;
        
                const carneBovinaCrianca = 0.2;
                const frangoCrianca = 0.1;
                const linguicaCrianca = 0.2;
                const refrigeranteCrianca = 0.2;
                const cervejaCrianca = 0;
        
                const totalCarne = qtdHomens * carneBovinaHomem + qtdMulheres * carneBovinaMulher + qtdCriancas * carneBovinaCrianca;
                const totalFrango = qtdHomens * frangoHomem + qtdMulheres * frangoMulher + qtdCriancas * frangoCrianca;
                const totalLinguica = qtdHomens * linguicaHomem + qtdMulheres * linguicaMulher + qtdCriancas * linguicaCrianca;
                const totalRefrigerante = qtdHomens * refrigeranteHomem + qtdMulheres * refrigeranteMulher + qtdCriancas * refrigeranteCrianca;
                const totalCerveja = qtdHomens * cervejaHomem + qtdMulheres * cervejaMulher + qtdCriancas * cervejaCrianca;
        
          
                var listaIngredientes = document.getElementById('ingredienteUl');
                listaIngredientes.innerHTML = `
                    <li>${totalCarne} kg de carne bovina</li>
                    <li>${totalFrango} kg de frango</li>
                    <li>${totalLinguica} kg de linguiça</li>
                    <li>${totalRefrigerante} l de refrigerante</li>
                    <li>${totalCerveja} l de cerveja</li>
                `;
        
                return false; 
            }