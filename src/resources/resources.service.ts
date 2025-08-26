import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ResourcesService {
  constructor(private readonly configService: ConfigService) {}
  async getResource(resource: string, searchFields: any) {
    const BASE_URL = this.configService.get<string>('DJANGO_API_URL');
    const payload = { search_fields: JSON.parse(searchFields) };

    // Check if all values are empty
    const allEmpty = Object.values(payload.search_fields).every(
      (value) => value === '' || value === null || value === undefined,
    );

    if (allEmpty) {
      return [];
    }

    // Otherwise make the request
    const response = await axios.get(`${BASE_URL}/v1/professions/${resource}`, {
      headers: { 'PK-Api-Key': this.configService.get<string>('PK_API_KEY') },
      params: { search: JSON.stringify(payload) },
    });

    return response.data;
  }

  async getResources() {
    const baseUrl = this.configService.get<string>('DJANGO_API_URL');
    const url = `${baseUrl}/resources/`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching resource:', error?.message);
      throw error;
    }
  }
}
