({
    myAction : function(component, event, helper) {
        console.log("Inicializando Eventos...");
    },
    manejarEvento0 : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        var valorExistenete = evt.getParam("pasar");
        var grabando = evt.getParam("grabando");
        if(grabando){
            console.log("evt: " + evt);
            evt.setParams({
                "pasar": valorExistenete + 0 
            });
            evt.fire();
        }
        
        // event.set("v.valorEvento", valorPasado);
    },
    manejarEvento1 : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        var valorExistenete = evt.getParam("pasar");
        var grabando = evt.getParam("grabando");
        if(grabando){
            evt.setParams({
                "pasar": valorExistenete + 1 
            });
            console.log("Evento Value: " + evt);
            evt.fire();
        }
        
        // event.set("v.valorEvento", valorPasado);
    },
})
