"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.herviboros = void 0;
var mamiferos_1 = require("./mamiferos");
var herviboros = /** @class */ (function (_super) {
    __extends(herviboros, _super);
    function herviboros(pAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico, pTieneColmillo) {
        var _this = _super.call(this, pAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico) || this;
        _this.tieneColmillo = pTieneColmillo;
        return _this;
    }
    herviboros.prototype.comer = function () {
        console.log("Los hervíboros comen solo plantas, por ello no tienen colmillos afilados");
    };
    return herviboros;
}(mamiferos_1.mamiferos));
exports.herviboros = herviboros;
