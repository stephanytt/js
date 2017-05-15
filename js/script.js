$(main);
 
function main(){
    
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
       var altimg = $(x).attr("alt");
       var img="";
       var titulo="";
       switch (altimg) {
           case 'caricaturas':
                img = "imgs/noivinhos.png";
                titulo="Caricaturas";
               break;
            case 'miniaturas':
                img= "imgs/miniatura.png";
                titulo= "Miniaturas";
               break;
            case 'noivinhos':
                img = "imgs/noivinhos.png";
                titulo= "Noivinhos";
               break;
       }
        $.get("/orcamento.html",function(data){
            var form = document.querySelector("#teste");
            form.innerHTML = data;
        });
}