function debouncer(callBack, timer) {
	let timeoutId;
	return function () {
		let context = this;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			callBack.apply(context, arguments);
			clearTimeout(timeoutId);
		}, timer);
	};
}

