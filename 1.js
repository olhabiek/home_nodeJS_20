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
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.sound = function () {
        console.log("The animal makes a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, species, breed) {
        var _this = _super.call(this, name, species) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.sound = function () {
        console.log("The dog barks");
    };
    return Dog;
}(Animal));
var myAnimal = new Animal("Generic Animal", "Unknown Species");
myAnimal.sound();
var myDog = new Dog("Bonita Black Star", "Dog", "York mini");
myDog.sound();
