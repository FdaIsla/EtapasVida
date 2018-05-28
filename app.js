
function myFunction() {
    document.getElementById("demo").innerHTML = years;
    
    var years = prompt("Ingrese su año de nacimiento");  
    var edad = (2018 - years); 
         

            if (edad===2018){
                document.write("Usted es un bebezito " );
            }

            else if (edad===2|| edad===1) {
                document.write("Usted es un niño pequeño " );
             }

            else if (edad==4 || edad==5) {
                 document.write("Usted es preescolar" );
             }


            else if (edad==6|| edad==7 || edad==8 || edad==9 || edad==10 || edad==11 || edad==12) {
                 document.write("Usted es Gradeshooller " );
            }

            else if (edad==13|| edad==14 ||edad==15 ||edad==16 ||edad==17 || edad==18){
                 document.write("Usted es adolecente " );
            }

            else if (edad==18 || edad==19 ||edad==20 || edad<21){
                 document.write("Usted es adulto joven " );
             }

            else if (edad>22){
                document.write( "A estas alturas usted ya es Adulto. Ahora comienza lo bueno" );

            } else   {
                         alert("Dato erroneo" );
            }
        

            


        }


