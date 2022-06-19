interface GreenTea {
	brew();
}
interface BlackTea {
	brew();
}
class PremiumGreenTea implements GreenTea {
	brew() {}
}
class PremiumBlackTea implements BlackTea {
	brew() {}
}
class OrdinaryGreenTea implements GreenTea {
	brew() {}
}
class OrdinaryBlackTea implements BlackTea {
	brew() {}
}

interface TeaMaker {
	createGreenTea(): GreenTea;
	createBlackTea(): BlackTea;
}

class PremiumTea implements TeaMaker {
	createBlackTea() {
		return new PremiumBlackTea();
	}

	createGreenTea() {
		return new PremiumGreenTea();
	}
}

class OrdinaryTea implements TeaMaker {
	createBlackTea() {
		return new OrdinaryBlackTea();
	}

	createGreenTea() {
		return new OrdinaryGreenTea();
	}
}

class TeaCompany {
	teaLineMaker: TeaMaker | null = null;
	greenTea: GreenTea;
	blackTea: BlackTea;

	constructor(teaLineName: string) {
		if (teaLineName === 'premium') {
			this.teaLineMaker = new PremiumTea();
		}
		if (teaLineName === 'ordinary') {
			this.teaLineMaker = new OrdinaryTea();
		}
	}

	makeProduct() {
		if (this.teaLineMaker) {
			this.blackTea = this.teaLineMaker.createBlackTea();
			this.greenTea = this.teaLineMaker.createGreenTea();
		}
	}
    
}
