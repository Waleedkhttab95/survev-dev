import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharedServicesService } from './shared-services.service';

@Controller('shared-services')
export class SharedServicesController {
  constructor(private readonly sharedServicesService: SharedServicesService) {}

  @Post()
  create() {
  }

  @Get()
  findAll() {
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedServicesService.remove(+id);
  }
}
