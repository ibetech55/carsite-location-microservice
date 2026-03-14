import { Request, Response } from "express";
import { Services } from "../Services";

export class Controller {
  constructor(private _services: Services) {}

  async getStates(request: Request, response: Response) {
    const data = this._services.getUSStatesList();
    return response.status(200).json(data);
  }

  async getCountries(request: Request, response: Response) {
    const data = this._services.getCountries();
    return response.status(200).json(data);
  }

  async getCities(request: Request, response: Response) {
    const data = this._services.getCitiesByStateCode(request.params.stateCode);
    return response.status(200).json(data);
  }

  async getZipCode(request: Request, response: Response) {
    const data = this._services.getZipCode(request.params.zipCode);
    return response.status(200).json(data);
  }

  async getZipCodesByRadius(request: Request, response: Response) {
    const data = this._services.getZipCodesByRadius(request.params.zipCode, request.params.miles);
    return response.status(200).json(data);
  }

  async getLatLongByZipCode(request: Request, response: Response) {
    const data = this._services.getLatLongByZipCode(request.params.zipCode);
    return response.status(200).json(data);
  }
}
