function criarTabela(dieta,posicao){
        var tabela = document.getElementById('tabela');
        var linhas = tabela.rows.length;
        var linha = tabela.insertRow(linhas);
        var cell1 = linha.insertCell(0);
        var cell2 = linha.insertCell(1);
        var cell3 = linha.insertCell(2);
        cell1.setAttribute("class", "tg-celula");
        cell2.setAttribute("class", "tg-celula");
        cell3.setAttribute("class", "tg-celula");
        cell1.innerHTML = dieta.horario;
        cell2.innerHTML = dieta.alimentos[posicao].nome;
        cell3.innerHTML = dieta.alimentos[posicao].porcao;
}
function sorteio(){
    var dietas = JSON.parse(sessionStorage.getItem("diet"));
    var nome = sessionStorage.getItem("nome");
    var campoNome = document.getElementById('nome');
    campoNome.innerHTML = nome;
    alert("Sorteando Alimentos");
    for(i=0;i<dietas.length;i++){
        var sorteado = Math.floor((Math.random() * dietas[i].alimentos.length) + 0);
        criarTabela(dietas[i],sorteado);
    }
}