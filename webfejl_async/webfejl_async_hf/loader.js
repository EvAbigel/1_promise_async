class Loader{
    constructor(service, manager){
        this.service = service;
        this.manager = manager;

        const button = document.createElement("button");
        button.innerHTML = "Elküld";
        document.body.appendChild(button);

        button.addEventListener("click", ()=>{
            service.init().then((array)=>{
                manager.renderTable(array);
            });
        });
    }

}