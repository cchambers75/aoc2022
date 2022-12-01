export const x = "";

const input = await Deno.readTextFile("./input.txt");

const elfArr = input
	.split("\n\n")
	.map((x) => x.split("\n").map((x) => parseInt(x)));

let highest = 0;
let acc = 0;

elfArr[0].forEach((x) => {
	if (!Number.isNaN(x)) {
		acc += x;
	} else if (Number.isNaN(x)) {
		if (acc > highest) {
			highest = acc;
			acc = 0;
		} else {
			acc = 0;
		}
	}
});

console.log(highest);
