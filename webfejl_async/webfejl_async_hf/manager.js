class Manager{
    #renderCallback
    constructor(){
        this.#renderCallback = () => {};
    }

    setRenderCallback(callback){
        this.#renderCallback = callback;
    }

    renderTable(array){
        this.#renderCallback(array);
    }
}