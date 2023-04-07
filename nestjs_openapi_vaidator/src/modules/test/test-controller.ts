import {Body, Controller, HttpCode, HttpStatus, Post,} from '@nestjs/common';

@Controller()
export class TestController {

    @Post('object')
    @HttpCode(HttpStatus.OK)
    public object(@Body() body: Record<string, unknown>) {
        return body;
    }

    @Post('object_arr')
    @HttpCode(HttpStatus.OK)
    public object_arr(@Body() body: Record<string, unknown>) {

        return body;
    }

    @Post('object_arr_arr')
    @HttpCode(HttpStatus.OK)
    public object_arr_arr(@Body() body: Record<string, unknown>) {
        return body;
    }


    @Post('one_of')
    @HttpCode(HttpStatus.OK)
    public oneOf(@Body() body: Record<string, unknown>) {

        return body;
    }

    @Post('allOf')
    @HttpCode(HttpStatus.OK)
    public allOf(@Body() body: Record<string, unknown>) {
        return body;
    }



}
