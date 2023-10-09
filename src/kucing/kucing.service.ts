import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKucingDto } from './dto/create-kucing.dto';
import { UpdateKucingDto } from './dto/update-kucing.dto';
import { Kucing } from './entities/kucing.entity';

@Injectable()
export class KucingService {
  constructor(
    @InjectRepository(Kucing)
    private readonly kucingRepository: Repository<Kucing>,
  ) {}
  
  create(CreateKucingDto: CreateKucingDto): Promise<Kucing> {
    const kucing = new Kucing();
    kucing.jenis = CreateKucingDto.jenis;
    kucing.deskripsi = CreateKucingDto.deskripsi;
    kucing.karateristik = CreateKucingDto.karateristik;
    kucing.image = CreateKucingDto.image;
    return this.kucingRepository.save(kucing);
  }

  async findAll(): Promise<Kucing[]> {
    return this.kucingRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} kucing`;
  }

  update(id: number, updateKucingDto: UpdateKucingDto) {
    return `This action updates a #${id} kucing`;
  }

  remove(id: number) {
    return `This action removes a #${id} kucing`;
  }
}
