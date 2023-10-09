import { Repository } from 'typeorm';
import { CreateKucingDto } from './dto/create-kucing.dto';
import { UpdateKucingDto } from './dto/update-kucing.dto';
import { Kucing } from './entities/kucing.entity';
export declare class KucingService {
    private readonly kucingRepository;
    constructor(kucingRepository: Repository<Kucing>);
    create(CreateKucingDto: CreateKucingDto): Promise<Kucing>;
    findAll(): Promise<Kucing[]>;
    findOne(id: number): string;
    update(id: number, updateKucingDto: UpdateKucingDto): string;
    remove(id: number): string;
}
