import { Controller, Get, Param, Query } from '@nestjs/common';
import { ResourcesService } from './resources.service';

@Controller('resources')
export class ResourcesController {
    constructor(private readonly resourcesService: ResourcesService) {}

      @Get()
    getResource(
        @Query('resource') resource: string,
        @Query('searchFields') searchFields: any
    ) {
        return this.resourcesService.getResource(resource, searchFields);
        
    }

    @Get("all")
    getAllResources() {
        return this.resourcesService.getResources()
    }

}
