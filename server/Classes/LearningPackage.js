"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningPackage = void 0;
class LearningPackage {
    constructor(id, name, description = '') {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
exports.LearningPackage = LearningPackage;
