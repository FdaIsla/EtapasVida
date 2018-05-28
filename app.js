
function myFunction() {
    document.getElementById("demo").innerHTML = years;
    document.getElementById("primeraVentana").style.display="none";

    var years = prompt("Ingrese su año de nacimiento");  
    var edad = (2018 - years); 
         

            // if (edad===2018){
            //     document.write("Usted es un bebezito " );
            // }

            if (edad===2|| edad===1 || edad==3) {
                // document.write("Usted es un niño pequeño " );
                document.getElementById('results').innerHTML = '<p> Usted es un niño pequeños </p>';
             }

            else if (edad==4 || edad==5) {
                 document.getElementById('results').innerHTML = '<p> Usted es preescolar </p>';
             }


            else if (edad==6|| edad==7 || edad==8 || edad==9 || edad==10 || edad==11 || edad==12) {
                 document.getElementById('results').innerHTML = '<p> Usted es Gradeshooller </p>';
            }

            else if (edad==13|| edad==14 ||edad==15 ||edad==16 ||edad==17 || edad==18){
                 document.getElementById('results').innerHTML = '<p> Usted es adolecente  </p>';
            }

            else if (edad==18 || edad==19 ||edad==20 || edad<21){
                 document.getElementById('results').innerHTML = '<p> Usted es adulto joven </p>';
             }

            else if (edad>22){
                document.getElementById('results').innerHTML = '<p> A estas alturas usted ya es Adulto. Ahora comienza lo bueno </p>';

            } else   {
                         alert("Dato erroneo" );
            }
        

            


        }


