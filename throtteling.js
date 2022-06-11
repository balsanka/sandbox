function throttling(callBack, timer) {
	let isBusy = false;
	let timeoutId;
	return function () {
		let context = this;
		if (!isBusy) {
			isBusy = true;
			callBack.call(context, ...arguments);
			timeoutId = setTimeout(() => {
				isBusy = false;
				clearTimeout(timeoutId);
			}, timer);
		}
	};
}
