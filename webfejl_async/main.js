const service = new Service();
const controller = new ViewDataController();

service.init().then((value)=>{
    controller.renderData(value);
})

service.initInvalid().catch(error =>{
    controller.renderError(error);
});

service.realInit(1).then((value)=>{
    controller.renderData(value)
})

service.realInit(3).catch((error)=>{
    controller.renderError(error);
});



