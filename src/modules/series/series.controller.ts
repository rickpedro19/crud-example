import { Controller, Get, Query } from '@nestjs/common';
import { SeriesService } from './series.service';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async allMovies(): Promise<{ filme: string; descrição: string; duração: string; }[]>{
    return await this.seriesService.allMovies()
  }

  @Get('/title')
  async findMovie(@Query('title') title: string): Promise<any>{
    return await this.seriesService.findMovies(title)
  }
}
