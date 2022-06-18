interface Bottle {
	liquidList: Array<string>;
	liquid: string | null;
	capacity(): Array<number>;
	isRecycle(): boolean;
	material(): string;
	isLiquidAcceptable(liquid: string): boolean;
}

class PlasticBottle implements Bottle {
	capacityList = [1, 0.5, 2, 2.5, 3, 4, 5];
	liquidList = ['Beer', 'Milk', 'Water'];
	liquid = null;

	capacity() {
		return this.capacityList;
	}

	isRecycle() {
		return true;
	}

	isLiquidAcceptable(liquid: string): boolean {
		return this.liquidList.indexOf(liquid) !== -1 ? true : false;
	}

	material() {
		return 'plastic';
	}
}

class MetalBottle implements Bottle {
	capacityList = [0.5, 0.25, 0.8, 1];
	liquidList = ['Beer', 'Water'];
	liquid = null;

	capacity() {
		return this.capacityList;
	}

	isRecycle() {
		return true;
	}

	material() {
		return 'aluminum';
	}

	isLiquidAcceptable(liquid: string): boolean {
		return this.liquidList.indexOf(liquid) !== -1 ? true : false;
	}
}

class GlassBottle implements Bottle {
	capacityList = [0.5, 0.25, 0.8];
	liquidList = ['Beer', 'Milk', 'Water'];
	liquid = null;

	capacity() {
		return this.capacityList;
	}

	isRecycle() {
		return true;
	}

	material() {
		return 'glass';
	}

	isLiquidAcceptable(liquid: string): boolean {
		return this.liquidList.indexOf(liquid) !== -1 ? true : false;
	}
}

abstract class ProduceBottle {
	abstract create(): Bottle;

	produce(): Bottle {
		return this.create();
	}
}

class ProduceMetalBottle extends ProduceBottle {
	public create(): Bottle {
		return new MetalBottle();
	}
}

class ProduceGlassBottle extends ProduceBottle {
	public create(): Bottle {
		return new GlassBottle();
	}
}

class ProducePlasticBottle extends ProduceBottle {
	public create(): Bottle {
		return new PlasticBottle();
	}
}

class Application {
	private bottle: ProduceBottle;
	constructor(bottleType: string) {
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

	public getBottle() {
		if (this.bottle) {
			return this.bottle.produce();
		} else {
			throw 'There is no bottle that you have requested';
		}
	}
}

let app = new Application('metal');
app.getBottle();