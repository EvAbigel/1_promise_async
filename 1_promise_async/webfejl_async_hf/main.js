const manager = new Manager();
const service = new Service(people);
const loader = new Loader(service, manager);
const table = new Table(manager);
