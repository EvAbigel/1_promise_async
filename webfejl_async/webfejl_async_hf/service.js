class Service{
    #data

    constructor(peopleArray){
        this.#data = peopleArray;
    }

    init(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(this.#data);
            }, 600);
        })
    }
}