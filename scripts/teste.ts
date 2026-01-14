

class Inturrptor{
    private estado = false
    ligarEdesliga(){
        this.estado = !this.estado
         return console.log( this.estado)
    }

  
}

const interruptor = new Inturrptor();

interruptor.ligarEdesliga()
interruptor.ligarEdesliga()


