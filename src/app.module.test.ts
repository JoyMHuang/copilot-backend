import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
    });

    it('should be defined', () => {
        const appModule = module.get(AppModule);
        expect(appModule).toBeDefined();
    });
});

// We recommend installing an extension to run jest tests.