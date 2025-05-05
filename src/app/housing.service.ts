import { Injectable } from '@angular/core';
import {HousingLocation} from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  private url = 'http://localhost:3000/locations';
//   private url = '/api/locations';  // Use '/api' to match the proxy path

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }

  // async getHousingLocationById(id: number): Promise<HousingLocation> {
  //   try {
  //     const response = await fetch(`${this.url}?id=${id}`);
  //     const data = await response.json();
  //     console.log('Fetched data:', data); // Log the fetched data
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching housing data:', error);
  //     throw error; // Ensure that errors are properly caught and handled
  //   }
  // }
  

//   getAllHousingLocations(): HousingLocation[] {
//     return this.housingLocationList;
//   }
//   getHousingLocationById(id: number): HousingLocation | undefined {
//     return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
//   }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
