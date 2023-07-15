import { CustomHttpService } from './custom-http.service';
import { TestBed } from '@automock/jest';
import { ConfigService } from '@nestjs/config';

describe('CustomHttpService', () => {
  let service: CustomHttpService;

  beforeAll(() => {
    const { unit } = TestBed.create(CustomHttpService)
      .mock(ConfigService)
      .using({
        get: jest.fn()
      })
      .compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
