class Table{
    #div;
    constructor(manager){
        this.manager = manager;
        this.#div = document.createElement("div");
        document.body.appendChild(this.#div);

        this.manager.setRenderCallback((array) => {
            for (const pers of array){
                const divEL = document.createElement("div");
                divEL.innerText = `${pers.name} (${pers.age}) rendelkezik egy "${pers.car.color}" színű "${pers.car.type}" típusú autóval`;
                this.#div.appendChild(divEL);
            }
        });
    }
}