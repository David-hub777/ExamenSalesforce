({
    myAction : function(component, event, helper) {

    },
    comenzarGrabar : function(component, event, helper) {
        var evt = $A.get("e.c:Evento");
        // var grabando = evt.getParam("grabando");
        evt.setParams({
            "grabando": true
        });
        var cadena = evt.getParam("pasar");
        console.log('cadena: ' + cadena);

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
        var valorPasar = event.getParam("pasar");
        console.log('valorPasar: ' + valorPasar);
        // Establecer el valor de 'cadenaGrabacion' con el valor de 'pasar'
        component.set("v.cadenaGrabacion", valorPasar);
    }

})
