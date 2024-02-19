({
    myAction : function(component, event, helper) {

    },
    manejarEvento0 : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        var valorExistenete = evt.getParam("pasar");
        console.log("evt: " + evt);
        evt.setParams({
            "pasar": valorExistenete + 0 
        });
        evt.fire();
        
        // event.set("v.valorEvento", valorPasado);
    },
    manejarEvento1 : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        var valorExistenete = evt.getParam("pasar");
        evt.setParams({
            "pasar": valorExistenete + 1 
        });
        console.log("Evento Value: " + evt);
        evt.fire();
        
        // event.set("v.valorEvento", valorPasado);
    },
})
