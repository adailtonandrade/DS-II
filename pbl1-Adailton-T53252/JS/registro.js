var formulario = document.getElementById("divInputs");
formulario.addEventListener('blur', validaBlur,true);
function validaBlur(e){
	var elemento = e.target;
	if(elemento.tagName == "INPUT"){
        var valor = elemento.value;
            if ((valor == null) || (valor == "") || (/^\s+$/.test(valor)) ) {
                elemento.style.backgroundColor = 'red';
                elemento.nextSibling.innerHTML = "CAMPO OBRIGATÓRIO";
            }else{
                elemento.style.backgroundColor = '';
                elemento.nextSibling.innerHTML = '';
            }
	}
}
var dietas = [];
var cont = 0;
function preencheDieta(lista1,lista2){
	var dieta = {
        alimentos:[],
        horario:'',
    };
    for(i=0; i<lista1.length; i++){
        var alimento = {};
        alimento.nome = lista1[i].value;
        alimento.porcao = lista2[i].value;
        dieta.alimentos.push(alimento);
    }
	return dieta;
}
function validaCampos(classe1,classe2){
    var retorno = 0;
    var alimento = document.getElementsByClassName(classe1);
    var porcao = document.getElementsByClassName(classe2);
    var nome = document.getElementById("idnome");
    if ((nome.value == null) || (nome.value == "") || (/^\s+$/.test(nome.value)) ) {
            alert("Preencha o Campo: " + nome.id.toUpperCase());
            retorno = 0;
            nome.focus();
        }else{
            retorno = 1;
        }
    for (i=0;i<alimento.length;i++){
        var Ali = alimento[i];
        var Porc = porcao[i];
        if ((Ali.value == null) || (Ali.value == "") || (/^\s+$/.test(Ali.value)) ) {
            alert("Preencha o Campo: " + Ali.id.toUpperCase());
            retorno = 0;
            Ali.focus();
            break;
        }else{
            retorno = 1;
        }
        if ((Porc.value == null) || (Porc.value == "") || (/^\s+$/.test(Porc.value)) ) {
            alert("Preencha o Campo: " + Porc.id.toUpperCase());
            retorno = 0;
            Porc.focus();
            break;
        }else{
            if (isNaN(Porc.value)){
                alert("O Campo: "+ Porc.id.toUpperCase() + " Precisa ser um número");
                retorno = 0;
                Porc.focus();
                break;
            }else{
                retorno = 1;
            }
        }
    }
    if (retorno == 0){
        return false;
    }else{
        return true;
    }
}
function limpaCampos(nome){
    document.getElementById("form").reset();
    document.getElementById("idnome").value = nome;
    document.getElementById('idnome').readOnly = true;
}
function salvarPorcao(classe1,classe2){
    var nome = document.getElementById('idnome').value;
	var lista_alimento = document.getElementsByClassName(classe1);
	var lista_porcao = document.getElementsByClassName(classe2);
    var retorno_valida = validaCampos(classe1,classe2);
    if(retorno_valida){
        var horario = document.getElementById('hora');
        switch(cont){
            case 0:
                var dieta1 = preencheDieta(lista_alimento,lista_porcao);
                dieta1.horario = '6:00';
                dietas.push(dieta1);
                sessionStorage.setItem("diet", JSON.stringify(dietas));
                sessionStorage.setItem("nome", nome);
                horario.innerHTML = '9:00';
                alert("Dieta das "+dieta1.horario+" Cadastrada com sucesso - Preencha a próxima");
                limpaCampos(nome);
                break;
            case 1:
                var dieta2 = preencheDieta(lista_alimento,lista_porcao);
                dieta2.horario = '9:00';
                dietas.push(dieta2);
                sessionStorage.setItem("diet",  JSON.stringify(dietas));
                horario.innerHTML = "12:00";
                alert("Dieta das "+dieta2.horario+" Cadastrada com sucesso - Preencha a próxima");
                limpaCampos(nome);
                break;
            case 2:
                var dieta3 = preencheDieta(lista_alimento,lista_porcao);
                dieta3.horario = '12:00';
                dietas.push(dieta3);
                sessionStorage.setItem("diet",  JSON.stringify(dietas));
                horario.innerHTML = "15:00";
                alert("Dieta das "+dieta3.horario+" Cadastrada com sucesso - Preencha a próxima");
                limpaCampos(nome);
                break;
            case 3:
                var dieta4 = preencheDieta(lista_alimento,lista_porcao);
                dieta4.horario = '15:00';
                dietas.push(dieta4);
                sessionStorage.setItem("diet",  JSON.stringify(dietas));
                horario.innerHTML = "18:00";
                alert("Dieta das "+dieta4.horario+" Cadastrada com sucesso - Preencha a próxima");
                limpaCampos(nome);
                break;
            case 4:
                var dieta5 = preencheDieta(lista_alimento,lista_porcao);
                dieta5.horario = '18:00';
                dietas.push(dieta5);
                sessionStorage.setItem("diet",  JSON.stringify(dietas));
                horario.innerHTML = "21:00";
                alert("Dieta das "+dieta5.horario+" Cadastrada com sucesso - Preencha a próxima");
                limpaCampos(nome);
                break;
            case 5:
                var dieta6 = preencheDieta(lista_alimento,lista_porcao);
                dieta6.horario = '21:00';
                dietas.push(dieta6);
                sessionStorage.setItem("diet",  JSON.stringify(dietas));
                alert("Dieta das "+dieta6.horario+" Cadastrada com sucesso - CLIQUE EM GERAR DIETA");
                break;
            default:
                alert("Você já cadastrou o limite necessário - CLIQUE EM GERAR DIETA");
                break;
        }
    cont++;
    }
}