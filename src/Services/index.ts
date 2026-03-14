import { State, City, Country } from "country-state-city";
import { IState, ICity, ICountry } from "country-state-city";
import zipCodes, { ZipCode } from "zipcodes";
import { IGetCityList, IGetCountryList, IGetStateList } from "../Data";
import { EXCLUDED_TERRITORIES } from "./ExcludedTerritories";

export class Services {
  getCountries(): IGetCountryList[] {
    const values: ICountry[] = Country.getAllCountries();
    const data: IGetCountryList[] = values.map((x) => ({
      name: x.name,
      isoCode: x.isoCode,
    }));
    return data;
  }

  getUSStatesList(): IGetStateList[] {
    const values: IState[] = State.getStatesOfCountry("US");
    const mappedData: IGetStateList[] = values
      .filter((val: IState) => !EXCLUDED_TERRITORIES.includes(val.name))
      .map((x: IState) => ({
        name: x.name,
        stateCode: x.isoCode,
      }));
    return mappedData;
  }

  getCitiesByStateCode(stateCode: string): IGetCityList[] {
    const values: ICity[] = City.getCitiesOfState("US", stateCode);
    const mappedData: IGetCityList[] = values.map((val: ICity) => ({
      name: val.name,
      latitude: val.latitude,
      longitude: val.longitude,
    }));

    return mappedData;
  }

  getZipCode(zipCode: string): any {
    const states = [
      { name: 'Alabama', abbreviation: 'AL' },
      { name: 'Alaska', abbreviation: 'AK' },
      { name: 'Arizona', abbreviation: 'AZ' },
      { name: 'Arkansas', abbreviation: 'AR' },
      { name: 'California', abbreviation: 'CA' },
      { name: 'Colorado', abbreviation: 'CO' },
      { name: 'Connecticut', abbreviation: 'CT' },
      { name: 'Delaware', abbreviation: 'DE' },
      { name: 'Florida', abbreviation: 'FL' },
      { name: 'Georgia', abbreviation: 'GA' },
      { name: 'Hawaii', abbreviation: 'HI' },
      { name: 'Idaho', abbreviation: 'ID' },
      { name: 'Illinois', abbreviation: 'IL' },
      { name: 'Indiana', abbreviation: 'IN' },
      { name: 'Iowa', abbreviation: 'IA' },
      { name: 'Kansas', abbreviation: 'KS' },
      { name: 'Kentucky', abbreviation: 'KY' },
      { name: 'Louisiana', abbreviation: 'LA' },
      { name: 'Maine', abbreviation: 'ME' },
      { name: 'Maryland', abbreviation: 'MD' },
      { name: 'Massachusetts', abbreviation: 'MA' },
      { name: 'Michigan', abbreviation: 'MI' },
      { name: 'Minnesota', abbreviation: 'MN' },
      { name: 'Mississippi', abbreviation: 'MS' },
      { name: 'Missouri', abbreviation: 'MO' },
      { name: 'Montana', abbreviation: 'MT' },
      { name: 'Nebraska', abbreviation: 'NE' },
      { name: 'Nevada', abbreviation: 'NV' },
      { name: 'New Hampshire', abbreviation: 'NH' },
      { name: 'New Jersey', abbreviation: 'NJ' },
      { name: 'New Mexico', abbreviation: 'NM' },
      { name: 'New York', abbreviation: 'NY' },
      { name: 'North Carolina', abbreviation: 'NC' },
      { name: 'North Dakota', abbreviation: 'ND' },
      { name: 'Ohio', abbreviation: 'OH' },
      { name: 'Oklahoma', abbreviation: 'OK' },
      { name: 'Oregon', abbreviation: 'OR' },
      { name: 'Pennsylvania', abbreviation: 'PA' },
      { name: 'Rhode Island', abbreviation: 'RI' },
      { name: 'South Carolina', abbreviation: 'SC' },
      { name: 'South Dakota', abbreviation: 'SD' },
      { name: 'Tennessee', abbreviation: 'TN' },
      { name: 'Texas', abbreviation: 'TX' },
      { name: 'Utah', abbreviation: 'UT' },
      { name: 'Vermont', abbreviation: 'VT' },
      { name: 'Virginia', abbreviation: 'VA' },
      { name: 'Washington', abbreviation: 'WA' },
      { name: 'West Virginia', abbreviation: 'WV' },
      { name: 'Wisconsin', abbreviation: 'WI' },
      { name: 'Wyoming', abbreviation: 'WY' }
    ];
    const data = zipCodes.lookup(zipCode);
    const state = states.find((st) => st.abbreviation === data.state).name;
    const stateAbbreviation = data.state;

    return {
      ...data,
      state,
      stateAbbreviation
    }
  }

  getZipCodesByRadius(zipCode: string, miles: string) {
    return zipCodes.radius(zipCode, +miles);
  }

  getLatLongByZipCode(zipCode: string) {
    return zipCodes.lookup(zipCode);
  }
}
