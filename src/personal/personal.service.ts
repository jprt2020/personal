import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonalService {

    private personal = [
        {
            id:0,
            nombre: 'Yordi Guerrero',
            rut: '19965015-7',
            cargo: 'Supervisor de Montajes'
        },
        {
            id:1,    
            nombre: 'Jorge Quediman',
            rut: '19760128-0',
            cargo: 'Supervisor Team'
       },
       {
            id:2,
            nombre: 'Yeison Medrano',
            rut: '23573139-8',
            cargo: 'Ayudante Team'
        }
    ];

    findAll() {
        return this.personal;
    }
    
    findOneById( id:number ) {

        //  método por JavaScript
        // const _personal = this.personal.find( _personal => _personal.id === id) 
        // return _personal

        return this.personal[id]
    }
  
}
