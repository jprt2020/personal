import { PersonalService } from './personal.service';
export declare class PersonalController {
    private readonly personalService;
    constructor(personalService: PersonalService);
    getAllPersonal(): {
        id: number;
        nombre: string;
        rut: string;
        cargo: string;
    }[];
    getPersonalById(id: number): any;
}
