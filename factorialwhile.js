const factorial = n => {
	if (n < 0) n = n * -1;
	if (n <= 0) return 1;
	let factorial = 1;
	while (n > 1) {
		factorial = factorial * n;
		n--;
	}
	return factorial;
}