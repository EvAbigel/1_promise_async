const service = new Service();
const controller = new ViewDataController();

service.init().then((value)=>{
    controller.renderData(value);
});