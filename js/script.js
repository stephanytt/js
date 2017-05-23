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
    var s = $("input[name='qtdpeca']").val();
    //Validacao
    if (s==0 || s== null){
        alert("adiciona ai");
    }else{
        var orca = $("#orcamento").html();
        if(orca == null || orca ==''){
           $.get("/orcamento.html",function(data){
            var form = document.querySelector("#teste");
            form.innerHTML = data;
            $("#catselect ul").append( "<li><img width='70' src='"+img+"'> Nome: "+nomeprod+" Qtd: "+s+"</li>" );
            }); 
        }else{
            $("#catselect ul").append( "<li><img width='70' src='"+img+"'> Nome: "+nomeprod+" Qtd: "+s+"</li>" );
        }
    }
    return false;
}

