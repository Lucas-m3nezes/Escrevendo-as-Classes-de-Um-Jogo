// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'Magia'
          break
        case 'guerreiro':
          ataque = 'Espada'
          break
        case 'monge':
          ataque = 'Artes Marciais'
          break
        case 'ninja':
          ataque = 'Shuriken'
          break
        default:
          ataque = 'usou um ataque desconhecido'
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
  }
  
  // Exemplo de uso da classe
  const heroi1 = new Heroi('InSaNNiTy', 30, 'guerreiro')
  const heroi2 = new Heroi('Trevor', 150, 'mago')
  const heroi3 = new Heroi('Zeca Urubu', 65, 'monge')
  const heroi4 = new Heroi('Cagapelado', 39, "ninja")
  
  heroi1.atacar()
  heroi2.atacar()
  heroi3.atacar()
  heroi4.atacar()