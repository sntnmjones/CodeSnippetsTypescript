/**
 * https://zellwk.com/blog/async-await-in-loops/
 */
export class AsyncExamples {
    constructor() {
        
    }

    readonly fruitBasket = {
        apple: 27,
        grape: 0,
        pear: 14
      }
    
    readonly sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
    }
    
    readonly getNumFruit = fruit => {
    return this.sleep(1000).then(v => this.fruitBasket[fruit])
    }
    
    readonly execute = async _ => {
        console.log('Start')
      
        const numApples = await this.getNumFruit('apple')
        console.log(numApples)
      
        const numGrapes = await this.getNumFruit('grape')
        console.log(numGrapes)
      
        const numPears = await this.getNumFruit('pear')
        console.log(numPears)
      
        console.log('End')
      }
}