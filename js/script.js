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
    //validação formulários
    $("#nome,#assunto,#msg").keyup(function(){
        var form = this.value;
        if(form == null || form == ''){
            $(this).css("border-color","#be3e82");
        }else{
            $(this).css("border-color","green");
        }
    });
    $("#email").keyup(function() {
        var email = this.value;
        var valuemail = email.split("@");
        if( (valuemail[0] != undefined) && (valuemail[1] != undefined) && (valuemail[0].length >3)){
            
            var x =  valuemail[1].split(".");
            if( (x[0] != undefined) && (x[1] != undefined) && (x[0].length >0)){
                
               if(x[1] != undefined && x[1].length >0){
                    $(this).css("border-color","green");
               }else{
                    $(this).css("border-color","red");
                }
            }else{
                $(this).css("border-color","red");
            }            
        }else{
            $(this).css("border-color","red");
        }
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
    $("#gallery #gal").attr("src",imagemcresce);
    $("#gallery").fadeIn();
    $("#esq").css("display", "block");
    $("#dir").css("display", "block");
}
function fecharimg(img){
    $(img).fadeOut();
    $("#esq").css("display", "none");
    $("#dir").css("display", "none");
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


function esquerda(){
    var x = document.getElementById("gal").src.toString();
    x = x.split("foto");
    x = x[1].split(".");
    x = x[0] - 1;
    if(x < 2){
        x = 9
    }
    document.getElementById("gal").src = "imgs/foto" + x + ".png"
}
function direita(){
    var x = document.getElementById("gal").src.toString();
    x = x.split("foto");
    x = x[1].split(".");
    x = parseInt(x[0]) + 1;
    if(x > 9){
        x = 2
    }
    document.getElementById("gal").src = "imgs/foto" + x + ".png"
}
