//Código JavaScript

//Función constructora Jugador

// function Jugador(nombre){
//     this.nombre = nombre;
//     this.caraDado1 = 0;  //Hacer privado y sus métodos getter y setter
//     this.caraDado2 = 0;  //Hacer privado y sus métodos getter y setter
// }

// function JuegoDados(numeroJuego, j1, j2){
//     this.numeroJuego = numeroJuego;
//     this.jugador1 = j1;
//     this.jugador2 = j2;

//     this.tirarDados = function() {
//         this.jugador1.caraDado1 = Math.round((Math.random() * 5) + 1);
//         this.jugador1.caraDado2 = Math.round((Math.random() * 5) + 1);
//         this.jugador2.caraDado1 = Math.round((Math.random() * 5) + 1);
//         this.jugador2.caraDado2 = Math.round((Math.random() * 5) + 1);
//     }

//     this.determinaGanador = function() {
//         if ( ((this.jugador1.caraDado1 + this.jugador1.caraDado2) == 7)
//             && ((this.jugador2.caraDado1 + this.jugador2.caraDado2) != 7) )
//             return this.jugador1
//         else if ( ((this.jugador2.caraDado1 + this.jugador2.caraDado2) == 7)
//             && ((this.jugador1.caraDado1 + this.jugador2.caraDado1) != 7) )
//             return this.jugador2
//         else return null;
//     }
// }

/* Programar la clase que represente al torneo
clase torneoDados
    jugadas //Arreglo de objetos de clase JuegoDados
    juegosGanadosJugador1   //Hacer privado y métodos getter y setter
    juegosGanadosjugador2   //Hacer privado y métodos getter y setter
    función crear
    función jugar
    función resultado     //hacer privado y métodos getter y setter
*/



//Usar clases para demostrar su funcionamiento
/*
    Simular un torneo de dados.
    El torneo se juega hasta que un jugador gana 3 juegos.
    Un jugador gana un juego cuando la suma de los 2 dados es 7 y el otro no obtiene un 7.
    En caso de que en un juego ninguno de los jugadores obtenga 7, se declara empate
*/
class jugador {
    constructor() {
        this.nombre = "";
        this.caraDado1 = 0;
        this.caraDado2 = 0;
        
    }

    setCaraDado1(caraDado1) {
        this.caraDado1 = caraDado1;
    }
    setCaraDado2(caraDado2) {
        this.caraDado2 = caraDado2;
    }

    getCaraDado1() {
        return this.caraDado1;
    }
    getCaraDado2() {
        return this.caraDado2;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
}
class JuegoDados{
    constructor(numeroJuego, jugador1, jugador2) {
        this.jugador1 = jUno;
        this.jugador2 = jDos;
        this.numeroJuego = numeroJuego;

}
tirarDados() {
    this.jugador1.setCaraDado1(Math.round((Math.random() * 5) + 1));
    this.jugador1.setCaraDado2(Math.round((Math.random() * 5) + 1));
    this.jugador2.setCaraDado1(Math.round((Math.random() * 5) + 1));
    this.jugador2.setCaraDado2(Math.round((Math.random() * 5) + 1));
}
determinaGanador() {
    if (((this.jugador1.getCaraDado1() + this.jugador1.getCaraDado2()) == 7) &&
    ((this.jugador2.getCaraDado1()+this.jugador2.getCaraDado2())!=7)) return this.jugador1.getNombre()
    else if (((this.jugador2.getcaraDado1() + this.jugador2.getcaraDado2()) == 7)
        && ((this.jugador1.getcaraDado1() + this.jugador2.getcaraDado2()) != 7))
        return this.jugador2.getNombre()
    else return null;
    }
class TorneoDados{

        jugadas = new Array() 
        #juegosGanadosJugador1
        #juegosGanadosJugador2
    
        setJuegosGanadosJugador1(jg1) {
            this.#juegosGanadosJugador1 = jg1
        }
        getJuegosGanadosJugador1() {
            return this.#juegosGanadosJugador1
        }
        setJuegosGanadosJugador2(jg2) {
            this.#juegosGanadosJugador2 = jg2
        }
        getJuegosGanadosJugador2() {
            return this.#juegosGanadosJugador2
        }
        crear(jUno, jDos) {
            console.log("Se ha dado comienzo del torneo: " + jUno.getNombre() + " y " + jDos.getNombre())
    
            this.#juegosGanadosJugador1 = 0
            this.#juegosGanadosJugador2 = 0
            jugar() {
 
                let minimoVictorias = 3
                let i = 1;
                let victoria = false
               
                
                let mensajeGanador =""
        
                do {
        
                    let partida = new JuegoDados(i, jUno, jDos)
                    partida.tirarDados()
                    let ganador = partida.determinaGanador()
                    
                    if(ganador === jUno.getNombre()){
        
                        this.#juegosGanadosJugador1++
                        mensajeGanador = jUno.getNombre()
                    }
                    if(ganador === jDos.getNombre()){
        
                        this.#juegosGanadosJugador2++
                        mensajeGanador = jDos.getNombre()
                    }
                    if(ganador === null){
        
                        mensajeGanador="Empate"
                    }
                    partida.ganadorpartida = mensajeGanador
                    this.jugadas.push(partida)
                    if(this.#juegosGanadosJugador1 ===minimoVictorias || this.#juegosGanadosJugador2===minimoVictorias){
                        victoria = true
                    }
                    i++
                } while (victoria === false)
        
            }
resultado(){
    if (this.jugador1.getJuegosGanados() == 3) {
        console.log(this.jugador1.getNombre() + " Has ganado el torneo");
        return false;
    } else if (this.jugador2.getJuegosGanados() == 3) {
        console.log(this.jugador2.getNombre() + " Has ganado el torneo");
        return false;
    } else {
        return true;
    }
}
}
let jUno = new Jugador()
let jDos = new Jugador()
jUno.setNombre("Ricardo Reyes");
jDos.setNombre("Alberto Alcala");
let torneo1 = new TorneoDados()

torneo1.crear(jUno, jDos)

torneo1.jugar()

let array = torneo1.jugadas


for(let i =0; i<array.length; i++ ){

    console.log("Ganador de esta partida es: " + (i+1) + " fue: " + array[i].ganadorpartida)
}


//imprimimos el ganador del torneo 
console.log("El ganador del torneo es: " + torneo1.resultado() + " Enhorabuena has gando la partida")





