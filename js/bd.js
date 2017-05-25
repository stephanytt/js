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

