"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKucingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_kucing_dto_1 = require("./create-kucing.dto");
class UpdateKucingDto extends (0, mapped_types_1.PartialType)(create_kucing_dto_1.CreateKucingDto) {
}
exports.UpdateKucingDto = UpdateKucingDto;
//# sourceMappingURL=update-kucing.dto.js.map