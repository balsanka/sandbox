var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PlasticBottle = /** @class */ (function () {
    function PlasticBottle() {
        this.capacityList = [1, 0.5, 2, 2.5, 3, 4, 5];
        this.liquidList = ['Beer', 'Milk', 'Water'];
        this.liquid = null;
    }
    PlasticBottle.prototype.capacity = function () {
        return this.capacityList;
    };
    PlasticBottle.prototype.isRecycle = function () {
        return true;
    };
    PlasticBottle.prototype.isLiquidAcceptable = function (liquid) {
        return this.liquidList.indexOf(liquid) !== -1 ? true : false;
    };
    PlasticBottle.prototype.material = function () {
        return 'plastic';
    };
    return PlasticBottle;
}());
var MetalBottle = /** @class */ (function () {
    function MetalBottle() {
        this.capacityList = [0.5, 0.25, 0.8, 1];
        this.liquidList = ['Beer', 'Water'];
        this.liquid = null;
    }
    MetalBottle.prototype.capacity = function () {
        return this.capacityList;
    };
    MetalBottle.prototype.isRecycle = function () {
        return true;
    };
    MetalBottle.prototype.material = function () {
        return 'aluminum';
    };
    MetalBottle.prototype.isLiquidAcceptable = function (liquid) {
        return this.liquidList.indexOf(liquid) !== -1 ? true : false;
    };
    return MetalBottle;
}());
var GlassBottle = /** @class */ (function () {
    function GlassBottle() {
        this.capacityList = [0.5, 0.25, 0.8];
        this.liquidList = ['Beer', 'Milk', 'Water'];
        this.liquid = null;
    }
    GlassBottle.prototype.capacity = function () {
        return this.capacityList;
    };
    GlassBottle.prototype.isRecycle = function () {
        return true;
    };
    GlassBottle.prototype.material = function () {
        return 'glass';
    };
    GlassBottle.prototype.isLiquidAcceptable = function (liquid) {
        return this.liquidList.indexOf(liquid) !== -1 ? true : false;
    };
    return GlassBottle;
}());
var ProduceBottle = /** @class */ (function () {
    function ProduceBottle() {
    }
    ProduceBottle.prototype.produce = function () {
        return this.create();
    };
    return ProduceBottle;
}());
var ProduceMetalBottle = /** @class */ (function (_super) {
    __extends(ProduceMetalBottle, _super);
    function ProduceMetalBottle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProduceMetalBottle.prototype.create = function () {
        return new MetalBottle();
    };
    return ProduceMetalBottle;
}(ProduceBottle));
var ProduceGlassBottle = /** @class */ (function (_super) {
    __extends(ProduceGlassBottle, _super);
    function ProduceGlassBottle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProduceGlassBottle.prototype.create = function () {
        return new GlassBottle();
    };
    return ProduceGlassBottle;
}(ProduceBottle));
var ProducePlasticBottle = /** @class */ (function (_super) {
    __extends(ProducePlasticBottle, _super);
    function ProducePlasticBottle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProducePlasticBottle.prototype.create = function () {
        return new PlasticBottle();
    };
    return ProducePlasticBottle;
}(ProduceBottle));
var Application = /** @class */ (function () {
    function Application(bottleType) {
        if (bottleType === 'metal') {
            this.bottle = new ProduceMetalBottle();
        }
        if (bottleType === 'plastic') {
            this.bottle = new ProducePlasticBottle();
        }
        if (bottleType === 'glass') {
            this.bottle = new ProduceGlassBottle();
        }
    }
    Application.prototype.getBottle = function () {
        if (this.bottle) {
            return this.bottle.produce();
        }
        else {
            throw 'There is no bottle that you have requested';
        }
    };
    return Application;
}());
var app = new Application('metal');
app.getBottle();
