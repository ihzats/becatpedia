import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KucingService } from "./kucing.service";
import { KucingController } from "./kucing.controller";
import { Kucing } from "./entities/kucing.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Kucing])],
  controllers: [KucingController],
  providers: [KucingService],
})
export class KucingModule {}
