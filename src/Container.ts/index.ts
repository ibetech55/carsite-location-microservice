import { Controller } from "../Controller";
import { Services } from "../Services";

const services = new Services();
const controller = new Controller(services);

export { services, controller };
