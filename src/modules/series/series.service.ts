import { Injectable } from '@nestjs/common';

@Injectable()
export class SeriesService {
    private movies = [
        {
          "filme": "Homem-aranha",
          "descrição": "um homem mordido por uma aranha",
          "duração": "1h"
        },
        {
          "filme": "x-men",
          "descrição": "um filme de mutantes",
          "duração": "1h"
        },
        {
          "filme": "vingadores",
          "descrição": "os heróis mais fortes da terra",
          "duração": "3h"
        }
      ];

      async allMovies(): Promise<{ filme: string; descrição: string; duração: string; }[]>{
        return await this.movies
      };
      async findMovies(title: string): Promise<any>{
        const theMovie =  await this.movies.find(movie => movie.filme === title)
        if(!theMovie){
            return {message: 'Filme não encontrado' }
        }
        return theMovie
      }
}
