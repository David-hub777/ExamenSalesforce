({
    myAction : function(component, event, helper) {
        console.log("Inicializando Eventos...");
        var prueba = event.getParam("grabando");
        console.log('grabando: ' + prueba);
        var evt = $A.get("e.c:Evento");
        evt.setParams({
            "grabando": true
        });
        var grabar = evt.getParam("grabando");
        console.log('grabando: ' + grabar);
    },
    manejarEvento0 : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        var valorExistente = evt.getParam("pasar");
        var grabando = evt.getParam("grabando");
        if(grabando){
            console.log("evt: " + evt);
            evt.setParams({
                "pasar": valorExistente + 0 
            });
            evt.fire();
        }
        var prueba = evt.getParam("grabando");
        console.log('grabando: ' + prueba + valorExistente);
        
        // event.set("v.valorEvento", valorPasado);
    },
    manejarEvento1 : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        var valorExistente = evt.getParam("pasar");
        var grabando = evt.getParam("grabando");
        if(grabando){
            evt.setParams({
                "pasar": valorExistente + 1 
            });
            console.log("Evento Value: " + evt);
            evt.fire();
        }
        var prueba = evt.getParam("grabando");
        console.log('grabando: ' + prueba);
        // event.set("v.valorEvento", valorPasado);
    },
})
