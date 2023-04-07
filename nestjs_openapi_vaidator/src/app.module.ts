import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {APP_FILTER} from '@nestjs/core';
import * as OpenApiValidator from 'express-openapi-validator';
import {TestModule} from './modules/test/test-module';
import {OpenApiExceptionFilter} from './filters/openapi-exception.filter';

@Module({
    imports: [TestModule],
    providers: [{provide: APP_FILTER, useClass: OpenApiExceptionFilter}],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(
            ...OpenApiValidator.middleware({
                apiSpec: '/Users/matt/nodejs/ts_lab/nestjs_openapi_vaidator/src/api.yaml',
                ignoreUndocumented: true, // 當 API 尚未定義到 openapi.yml 時，發出 Request 不會出現 Error
                validateRequests: {
                    allowUnknownQueryParameters: true,
                    coerceTypes: true,
                },
                validateFormats: 'full',
            }),
        ).forRoutes('*');
    }
}
