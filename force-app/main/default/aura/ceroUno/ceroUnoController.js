({
    myAction : function(component, event, helper) {

    },
    manejarEvento : function(component, event, helper) {
        var pointsToAdd = event.getParam("pasar");
        var valorPasado = component.get("v.valorPasado");
        pointsToAdd = valorPasado;
        
        component.set("v.valorPasado", valorPasado);
    }
})
