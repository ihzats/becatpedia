import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Req,
} from "@nestjs/common";
import { KucingService } from "./kucing.service";
import { CreateKucingDto } from "./dto/create-kucing.dto";
import { UpdateKucingDto } from "./dto/update-kucing.dto";
import { Kucing } from "./entities/kucing.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { Request } from "express";
import { diskStorage } from "multer";

@Controller("kucing")
export class KucingController {
  constructor(private readonly kucingService: KucingService) {}
  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./uploads",
        filename(req, file, callback) {
          const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
          callback(
            null,
            uniqueSuffix + "." + file.originalname.split(".").pop()
          );
        },
      }),
    })
  )
  async create(
    @Req() req: Request, // Menambahkan Request dari express
    @Body() createKucingDto: CreateKucingDto, // Create DTO Product
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 2000000 }),
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ }),
        ],
        fileIsRequired: false,
      })
    )
    file: Express.Multer.File
  ) {
    try {
      let finalImageUrl: string;

      if (file) {
        finalImageUrl =
          req.protocol + "://" + req.get("host") + "/uploads/" + file.filename;
      } else {
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
    } catch (e) {
      return e;
    }
  }

  @Get()
  findAll(): Promise<Kucing[]> {
    return this.kucingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.kucingService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateKucingDto: UpdateKucingDto) {
    return this.kucingService.update(+id, updateKucingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.kucingService.remove(+id);
  }
}
