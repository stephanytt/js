$(main);
 
function main(){
    
    $("#logo").mouseenter(function(){
        $(this).css({"width":"60%",
                     "margin-top":"-6%",
                     "margin-left":"-30%",
                     "transition": "width 1s, margin-top 1s, margin-left 1s"
        });    
    });
    $("#logo").mouseout(function(){
        $(this).css({"width":"50%",
                     "margin-top":"-4%",
                     "margin-left":"-25%"
        });    
    });
    
    
    $(".menu li").click(function(){
       var pagina = $(this).html();
       var url="";
       switch (pagina) {
           case 'Inicío':
                url = "/home.html";
               break;
            case 'Produtos':
                url = "/produtos.html";
               break;
            case 'Galeria':
                url = "/galeria.html";
               break;
            case 'Sobre':
               url = "/sobre.html";
               break;
            case 'Orçamento':
               url = "/orcamento.html";
               break;
            case 'Contato':
               url = "/contato.html";
               break;
       }
        $.get(url,function(data){
            $("main").html(data);
        })
    });
}
function imagens(y){
    var imagemcresce = $(y).attr("src");
    $("#gallery img").attr("src",imagemcresce);
    $("#gallery").fadeIn();
}
function fecharimg(img){
    $(img).fadeOut();
}
function clica(x){
       var produto = $(x).attr("class");
       var prod="";
       var titulo="";
       switch (produto) {
           case 'p1':
                prod="caricatura.html";
               break;
            case 'p2':
                prod="miniatura.html";
               break;
            case 'p3':
                prod="noivinhos.html";
               break;
       }
        $.get("/"+prod,function(data){
            var form = document.querySelector("#prodorc");
            form.innerHTML = data;
        });
}
function infoprod(nomeprod,img){
    var qtd = $("input[name='qtdpeca']").val();
    //Validacao
    if (qtd==0 || qtd== null){
        alert("adiciona ai");
    }else{
        inserir({"name":nomeprod,"qtd":qtd});
    }
    return false;
}
function logo(){
    
}