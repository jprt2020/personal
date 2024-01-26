"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalModule = void 0;
const common_1 = require("@nestjs/common");
const personal_controller_1 = require("./personal.controller");
const personal_service_1 = require("./personal.service");
let PersonalModule = class PersonalModule {
};
exports.PersonalModule = PersonalModule;
exports.PersonalModule = PersonalModule = __decorate([
    (0, common_1.Module)({
        controllers: [personal_controller_1.PersonalController],
        providers: [personal_service_1.PersonalService]
    })
], PersonalModule);
//# sourceMappingURL=personal.module.js.map