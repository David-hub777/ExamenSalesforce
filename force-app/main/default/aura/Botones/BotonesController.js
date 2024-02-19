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
        var secuenciasActuales = component.get("v.cadenaGrabacion");
        secuenciasActuales.push(",");
        component.set("v.cadenaGrabacion", secuenciasActuales);
    },
    grabacion: function(component, event, helper) {
        var cadenaGrabacion = component.get("v.cadenaGrabacion");
        for (var i = 0; i < cadenaGrabacion.length; i++) {
            console.log(cadenaGrabacion[i]);
        }
    },
    guardar: function(component, event, helper) {
        var insertCadenaApex = component.get("c.insertCadena"); 
        var cadenaGrabacion = component.get("v.cadenaGrabacion");
        
        insertCadenaApex.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                alert("Exito al guardar")
            }
        });

        for (var i = 0; i < cadenaGrabacion.length; i++) {
            insertCadenaApex.setParams({
                "cadena": cadenaGrabacion[i],
            });
            $A.enqueueAction(insertCadenaApex);
        }
        
    },
    borrarPantalla: function(component, event, helper) {
        var cadenaGrabacion = component.get("v.cadenaGrabacion");
        cadenaGrabacion.splice(0, cadenaGrabacion.length);
        component.set("v.cadenaGrabacion", cadenaGrabacion);
    },
    manejarEvento: function(component, event, helper) {
        var valorPasar = event.getParam("pasar");
        var secuenciasActuales = component.get("v.cadenaGrabacion");
        if (event.getParam("v.grabar")) {
            secuenciasActuales.push(valorPasar);
            component.set("v.cadenaGrabacion", secuenciasActuales);
        }
        console.log('valorPasar: ' + valorPasar);
    }

})
