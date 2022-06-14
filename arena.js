const { Warrior } = require("./warrior");

class Arena{
    #warrior1;
    #warrior2;
    constructor(warrior1, warrior2){
        if(!warrior1 instanceof Warrior){
            throw  new Error('warrior should be instance of  Warrior class!')
        }
        if(!warrior2 instanceof Warrior){
            throw  new Error('warrior should be instance of  Warrior class!')
        }
        this.#warrior1 = warrior1;
        this.#warrior2 = warrior2;
    }
    }

    module.exports = {
        Arena,
    };