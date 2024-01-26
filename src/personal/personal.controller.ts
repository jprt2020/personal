import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PersonalService } from './personal.service';

@Controller('personal')
export class PersonalController {

    constructor(
        private readonly personalService: PersonalService){

    }


    @Get()
    getAllPersonal() {
        return this.personalService.findAll();
    }

    @Get(':id')
    getPersonalById( @Param('id',ParseIntPipe) id:number ) {
        console.log({id});
        
        return this.personalService[id]
        
    }
}
