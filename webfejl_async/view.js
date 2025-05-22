class ViewDataController{
    #div;

    constructor(){
        this.#div = document.createElement("div");
        document.body.appendChild(this.#div);
        this.#div.textContent = "loading..."
    }

    renderData(array){
        this.#div.textContent = "";
        for (const item of array){
            const div = document.createElement("div");
            div.textContent = `${item.name}-${item.age}-${item.sex}` 
            this.#div.appendChild(div);
        }
    }

    renderError(errorMessage){
        this.#div.textContent = errorMessage;
    }
}