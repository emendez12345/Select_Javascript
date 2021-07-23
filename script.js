
var eCiudad = document.getElementById("rd-select_field-YqGbk24oMNXBUwymuGl13Q");
var eDepa = document.getElementById("rd-select_field-f_Q2f0dOzH4AAqVQs6_IGg");
console.log(eDepa);
console.log(eCiudad);
var infoCiudades = [];
var xobjScript = null;
var urlJsonCiu = "ciudades.json";


//debugger;/
window.onload = function() {
   initJSON();
 }; 

function initJSON() { 
   loadJSON(function(response) { 
      infoCiudades = JSON.parse(response);      
      initOption();
   });
}

function initOption() {  
   eDepa.addEventListener("change", verCiudades);  
   removeOptions(eDepa);
   removeOptions(eCiudad); 

   let option1 = document.createElement("option");
   option1.text = "Seleccionar";
   option1.value = "Seleccionar";
   eDepa.add(option1);

   let option2 = document.createElement("option");
   option2.text = "Seleccionar";
   option2.value = "Seleccionar";
   eCiudad.add(option2); 

   loadDepartamentos()
}

function verCiudades() { 
   removeOptions(eCiudad); 
   let depa = eDepa.options[eDepa.selectedIndex].text; 
   loadCiudades( depa ) 
}

function removeOptions(selectElement) {
 
   let i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

function loadDepartamentos( ) {
   for (let element of infoCiudades) { 

         let option = document.createElement("option");
         option.text = element.departamento;
         option.value = element.departamento;
         eDepa.add(option); 
   }
}

function loadCiudades( departamenBuscar ) {
   
   for (let element of infoCiudades) { 	
      if( departamenBuscar==element.departamento) { 
         for (let ciudades of element.ciudad) { 	
            let option = document.createElement("option");
            option.text = ciudades;
            option.value = ciudades;
            eCiudad.add(option);
         }
      }
   }
}
     
function loadJSON(callback) { 
   xobjScript = new XMLHttpRequest();
   xobjScript.overrideMimeType("application/json");
   xobjScript.open('GET', urlJsonCiu, true);  
   xobjScript.onreadystatechange = function () {
      if (xobjScript.readyState == 4 && xobjScript.status == "200") { 
         callback(xobjScript.responseText);
        
      }
   };
   xobjScript.send(null);  
}
 







  