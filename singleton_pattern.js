class SingleObject {
	constructor() {}
	
	getInstance() {
		if(this.instance == null) {
			this.instance = new SingleObject();
			return this.instance;
		} else {
			return this.instance;
		}
	}
	
	showMessage() {
		console.log('Hello World!');
	}
}

const object = new SingleObject().getInstance();
object.showMessage();