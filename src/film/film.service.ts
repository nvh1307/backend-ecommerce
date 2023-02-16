import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Film } from "./film.entity";

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
    return await this.filmRepo.findOne(id)
  }

  async update(id:number, film:Partial<Film>):Promise<Film>{
    await this.filmRepository.update(id, film);
    return await this.filmRepository.findOne(id);
  }

  async delete(id:number):Promise<Film>{
    return await this.filmRepo.delete(id)
  }
}