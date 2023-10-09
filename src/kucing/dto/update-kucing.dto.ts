import { PartialType } from "@nestjs/mapped-types";
import { CreateKucingDto } from "./create-kucing.dto";

export class UpdateKucingDto extends PartialType(CreateKucingDto) {}
