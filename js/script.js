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
    }   
    
    );
}