export const exp = "";

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./input2.txt");

const pairs = input.split("\n");

const singles = pairs.map((x) => {
	return x.split(/[-\r,]/);
});

let count = 0;

singles.forEach((x) => {
	if (
		(parseInt(x[0]) <= parseInt(x[2]) && parseInt(x[1]) >= parseInt(x[3])) ||
		(parseInt(x[0]) >= parseInt(x[2]) && parseInt(x[1]) <= parseInt(x[3]))
	) {
		count++;
		console.log(x);
	}
});

console.log(count);
