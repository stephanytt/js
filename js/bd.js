function inserirnoCarrinho(){
    var name = document.forms.form1.name.value;
    var qtd = parseInt(document.forms.form1.qtd.value);
    inserir({"name":name,"qtd":qtd});
}

//{id: 12345, name: "miniaturas", qtd: 2}
function inserir(pedido){
    var open = indexedDB.open("Bd-pedido", 1);
    open.onupgradeneeded = function() {
        var db = open.result;
        var store = db.createObjectStore("MyObjectStore", {keyPath: "name"});
        //store.createIndex("NameIndex", ["name.first"]);
    };
    
    open.onsuccess = function() {
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
        //var index = store.index("NameIndex");
    
        store.put(pedido);
        
        tx.oncomplete = function() {
            alert("Inserido com sucesso")
            db.close();
        };
    }
} 
function getPedidos(){
    var open = indexedDB.open("Bd-pedido", 1);
    open.onsuccess = function(){
        var db = open.result;
        try{
            document.getElementById("infopedido").innerHTML = "";
            var tx = db.transaction("MyObjectStore", "readwrite");
            var store = tx.objectStore("MyObjectStore");
            
            var resposta = store.getAll();
            resposta.onsuccess = function(itens) {
                for(var i = 0; i < itens.target.result.length; i++){
                    var pedido = itens.target.result[i];
                    if($("#"+pedido.nome).length){
                        alert("ja existe");
                    }else{
                        document.getElementById("infopedido").innerHTML += "<li id=' "+pedido.nome+" ' >" + pedido.name + " " + pedido.qtd + "</li>"; 
                    }
                }
            }
              tx.oncomplete = function() {
                db.close();
            }
        
        }catch (e){
            document.getElementById("infopedido").innerHTML ="Pedido não foi inserido";
        }
        
        
    }
}
/*
function buscar(){
    getObjId(parseInt(document.forms.form2.id.value));
}

function getObjId(id){
    var open = indexedDB.open("Bd-pedido", 1);
    open.onsuccess = function(){
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
        
        var getFirst = store.get(id);
        
        getFirst.onsuccess = function() {
            var pedido = getFirst.result;
           document.getElementById("h1").innerHTML = pedido.name + " " + pedido.qtd; 
        };
        
        tx.oncomplete = function() {
            db.close();
        };
    }
}
*/

