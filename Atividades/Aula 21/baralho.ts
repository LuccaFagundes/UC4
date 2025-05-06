import { Carta } from "./carta";

export class Baralho {

    baralho: Carta[] = []
    
    
    embaralhar(Carta) {
        let currentIndex = Carta.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [Carta[currentIndex], Carta[randomIndex]] = [
            Carta[randomIndex], Carta[currentIndex]];
        }
      }
      

    comprarCarta()

    visualizarTopo()
}