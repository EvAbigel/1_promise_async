class Service{
    #data;

    constructor(){
        this.#data = people;
    }

    init(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(this.#data);
            }, 3000);
        });
    }

    initInvalid(){
        return new Promise((reject)=>{
            setTimeout(() => {
                reject("A(z) \""+ this.#data +"\n invalid!");;
            }, 3000);
        });
    }

    realInit(num){
        new Promise((resolve, reject) =>{
        if (num < 2){
            setTimeout(() => {
                resolve(`Siker`);
            }, 1000);
        }
        else{
            setTimeout(() => {
                reject(`Nincs siker`);
            }, 1000);
        }
    });
    }
}