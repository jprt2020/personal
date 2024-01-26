"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalService = void 0;
const common_1 = require("@nestjs/common");
let PersonalService = class PersonalService {
    constructor() {
        this.personal = [
            {
                id: 0,
                nombre: 'Yordi Guerrero',
                rut: '19965015-7',
                cargo: 'Supervisor de Montajes'
            },
            {
                id: 1,
                nombre: 'Jorge Quediman',
                rut: '19760128-0',
                cargo: 'Supervisor Team'
            },
            {
                id: 2,
                nombre: 'Yeison Medrano',
                rut: '23573139-8',
                cargo: 'Ayudante Team'
            }
        ];
    }
    findAll() {
        return this.personal;
    }
    findOneById(id) {
        return this.personal[id];
    }
};
exports.PersonalService = PersonalService;
exports.PersonalService = PersonalService = __decorate([
    (0, common_1.Injectable)()
], PersonalService);
//# sourceMappingURL=personal.service.js.map