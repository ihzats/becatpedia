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
exports.KucingController = void 0;
const common_1 = require("@nestjs/common");
const kucing_service_1 = require("./kucing.service");
const create_kucing_dto_1 = require("./dto/create-kucing.dto");
const update_kucing_dto_1 = require("./dto/update-kucing.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let KucingController = exports.KucingController = class KucingController {
    constructor(kucingService) {
        this.kucingService = kucingService;
    }
    async create(req, createKucingDto, file) {
        try {
            let finalImageUrl;
            if (file) {
                finalImageUrl =
                    req.protocol + "://" + req.get("host") + "/uploads/" + file.filename;
            }
            else {
                finalImageUrl =
                    req.protocol +
                        "://" +
                        req.get("host") +
                        "/uploads/" +
                        "product-not-available.jpg";
            }
            await this.kucingService.create({
                ...createKucingDto,
                image: finalImageUrl,
            });
            return { status: "Success", message: "Data successfully created" };
        }
        catch (e) {
            return e;
        }
    }
    findAll() {
        return this.kucingService.findAll();
    }
    findOne(id) {
        return this.kucingService.findOne(+id);
    }
    update(id, updateKucingDto) {
        return this.kucingService.update(+id, updateKucingDto);
    }
    remove(id) {
        return this.kucingService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads",
            filename(req, file, callback) {
                const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
                callback(null, uniqueSuffix + "." + file.originalname.split(".").pop());
            },
        }),
    })),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 2000000 }),
            new common_1.FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ }),
        ],
        fileIsRequired: false,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_kucing_dto_1.CreateKucingDto, Object]),
    __metadata("design:returntype", Promise)
], KucingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KucingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KucingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_kucing_dto_1.UpdateKucingDto]),
    __metadata("design:returntype", void 0)
], KucingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KucingController.prototype, "remove", null);
exports.KucingController = KucingController = __decorate([
    (0, common_1.Controller)("kucing"),
    __metadata("design:paramtypes", [kucing_service_1.KucingService])
], KucingController);
//# sourceMappingURL=kucing.controller.js.map