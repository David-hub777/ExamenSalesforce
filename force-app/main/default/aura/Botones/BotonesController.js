({
    myAction : function(component, event, helper) {

    },
    comenzarGrabar : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        // var grabando = evt.getParam("grabando");
        evt.setParams({
            "grabando": true
        });
    },
    pararGrabar: function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        evt.setParams({
            "grabando": false
        });
    },
    grabacion: function(component, event, helper) {
        
    },
    guardar: function(component, event, helper) {
        
    },
    borrarPantalla: function(component, event, helper) {
        
    },
    manejarEvento: function(component, event, helper) {
    }
})
