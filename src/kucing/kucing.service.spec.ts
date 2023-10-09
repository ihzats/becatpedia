import { Test, TestingModule } from '@nestjs/testing';
import { KucingService } from './kucing.service';

describe('KucingService', () => {
  let service: KucingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KucingService],
    }).compile();

    service = module.get<KucingService>(KucingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
