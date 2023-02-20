import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Film } from "../entities/film/film.entity";

@Injectable()
export class FilmService{
  constructor(
    @InjectRepository(Film)
    private readonly filmRepo:Repository<Film>
  ){}

  async create(film:Partial<Film>):Promise<Film>{
    return await this.filmRepo.save(film)
  }

  async findAll():Promise<Film[]>{
    return await this.filmRepo.find()
  }

  async findOne(id:number):Promise<Film>{
    return await this.filmRepo.findOne({where:{id:id}})
  }

  async update(id:number, film:Partial<Film>):Promise<Film>{
    await this.filmRepo.update(id, film);
    return await this.filmRepo.findOne({where:{id:id}});
  }

  // async deleteFilm(id:number):Promise<Film>{
  //   return await this.filmRepo.delete(id);
  // }
}