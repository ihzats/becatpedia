/// <reference types="multer" />
import { KucingService } from "./kucing.service";
import { CreateKucingDto } from "./dto/create-kucing.dto";
import { UpdateKucingDto } from "./dto/update-kucing.dto";
import { Kucing } from "./entities/kucing.entity";
import { Request } from "express";
export declare class KucingController {
    private readonly kucingService;
    constructor(kucingService: KucingService);
    create(req: Request, createKucingDto: CreateKucingDto, file: Express.Multer.File): Promise<any>;
    findAll(): Promise<Kucing[]>;
    findOne(id: string): string;
    update(id: string, updateKucingDto: UpdateKucingDto): string;
    remove(id: string): string;
}
