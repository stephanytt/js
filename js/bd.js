function inserirnoCarrinho(){
    var name = document.forms.form1.name.value;
    var qtd = parseInt(document.forms.form1.qtd.value);
    inserir({"name":name,"qtd":qtd});
}
