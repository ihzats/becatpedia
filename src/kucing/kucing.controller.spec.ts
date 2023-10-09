import { Test, TestingModule } from '@nestjs/testing';
import { KucingController } from './kucing.controller';
import { KucingService } from './kucing.service';

describe('KucingController', () => {
  let controller: KucingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KucingController],
      providers: [KucingService],
    }).compile();

    controller = module.get<KucingController>(KucingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
