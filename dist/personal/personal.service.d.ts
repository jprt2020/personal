export declare class PersonalService {
    private personal;
    findAll(): {
        id: number;
        nombre: string;
        rut: string;
        cargo: string;
    }[];
    findOneById(id: number): {
        id: number;
        nombre: string;
        rut: string;
        cargo: string;
    };
}
