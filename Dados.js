
function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

    function JuegoDados(numeroJuego, Juno, Jdos){
        this.numeroJuego = numeroJuego;
        this.jugador1 = Juno;
        this.jugador2 = Jdos;
    
        this.tirarDados = function() {
            this.jugador1.caraDado1 =Math.floor(Math.random() * 6) + 1; 
            this.jugador1.caraDado2 = Math.floor(Math.random() * 6) + 1; 
    
            this.jugador2.caraDado1 = Math.floor(Math.random() * 6) + 1; 
            this.jugador2.caraDado2 = Math.floor(Math.random() * 6) + 1; 
        }
    
        this.determinaGanador = function() {
            if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
                && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
                return this.jugador1.nombre;
            }
            else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
                && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
                return this.jugador2.nombre;
            }
            else return "Empate";
        }
    
    }
    let juegoJugador1=0;
    let juegoJugador2=0;
    let ganadorNombre="";
    let Juno = new Jugador();
    let Jdos = new Jugador();
    Juno.nombre="Pedro Sanchez";
    Jdos.nombre="Arturo Ramirez";
    let i=1;
    let HuboGanador=false;
    let empate=0;
    let ganadorTorneo="";
    
    do{     
        let juego1 = new JuegoDados(i, Juno, Jdos);
        juego1.tirarDados();
        let ganador = juego1.determinaGanador();
        
        if(ganador ===Juno.nombre){
            ganadorNombre = Juno.nombre
            juegoJugador1++
        }
        if(ganador ===Jdos.nombre){
            ganadorNombre = Jdos.nombre
            juegoJugador2++
        }
        if(ganador ==="Empate"){
            empate++
            ganadorNombre = "Empate"
        }
            console.log("El ganador del juego "+ i +" es: " + ganadorNombre);
            if (juegoJugador1 ===3 || juegoJugador2===3){
                
                HuboGanador=true;
                if(juegoJugador1===3){
                    NombreDelganadorTorneo=Juno.nombre;
                }else{
                    NombreDelganadorTorneo=Jdos.nombre;
                    
                }
            }
        i=i+1;
    } while(HuboGanador===false);
    console.log("Numero de partidas: "+i);
    console.log("Ganador del torneo es: "+ ganadorTorneo);
