"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KucingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const kucing_entity_1 = require("./entities/kucing.entity");
let KucingService = exports.KucingService = class KucingService {
    constructor(kucingRepository) {
        this.kucingRepository = kucingRepository;
    }
    create(CreateKucingDto) {
        const kucing = new kucing_entity_1.Kucing();
        kucing.jenis = CreateKucingDto.jenis;
        kucing.deskripsi = CreateKucingDto.deskripsi;
        kucing.karateristik = CreateKucingDto.karateristik;
        kucing.image = CreateKucingDto.image;
        return this.kucingRepository.save(kucing);
    }
    async findAll() {
        return this.kucingRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} kucing`;
    }
    update(id, updateKucingDto) {
        return `This action updates a #${id} kucing`;
    }
    remove(id) {
        return `This action removes a #${id} kucing`;
    }
};
exports.KucingService = KucingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kucing_entity_1.Kucing)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KucingService);
//# sourceMappingURL=kucing.service.js.map