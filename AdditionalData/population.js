"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const Population_1 = require("../Population");
const Spaceship_1 = require("@civ-clone/core-spaceship/Spaceship");
const getAdditionalData = () => [
    new AdditionalData_1.default(Spaceship_1.default, 'population', (spaceship) => spaceship.yields().reduce((population, spaceshipYield) => {
        if (spaceshipYield instanceof Population_1.default) {
            population.add(spaceshipYield);
        }
        return population;
    }, new Population_1.default())),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=population.js.map