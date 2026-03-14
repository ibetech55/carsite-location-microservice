import { Router } from "express";
import { controller } from "../Container.ts";

const routes = Router();
routes.get("/states", (req, res) => controller.getStates(req, res));
routes.get("/countries", (req, res) => controller.getCountries(req, res));
routes.get("/cities/:stateCode", (req, res) => controller.getCities(req, res));
routes.get("/zip_code/:zipCode", (req, res) => controller.getZipCode(req, res));
routes.get("/zip_code/radius/:zipCode/:miles", (req, res) => controller.getZipCodesByRadius(req, res));
routes.get("/zip_code/lat_long_zip/:zipCode", (req, res) => controller.getLatLongByZipCode(req, res));

export { routes };
