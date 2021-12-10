import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from '../prima/prisma.service';
import { Filme } from '@prima/client';

@Injectable()
export class FilmesService {
  create(createFilmeDto: CreateFilmeDto) {
    return 'This action adds a new filme';
  }

  findAll() {
    return `This action returns all filmes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filme`;
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return `This action updates a #${id} filme`;
  }

  remove(id: number) {
    return `This action removes a #${id} filme`;
  }
}
