export const x = "";

const input = await Deno.readTextFile("./input.txt");

const elfArr = input
	.split("\n\n")
	.map((x) => x.split("\n").map((x) => parseInt(x)));

const arrTotal: number[] = [];
let acc = 0;
let total = 0;

elfArr[0].forEach((x) => {
	if (!Number.isNaN(x)) {
		acc += x;
	} else if (Number.isNaN(x)) {
		arrTotal.push(acc);
		acc = 0;
	}
});

arrTotal.sort((a, b) => b - a);

for (let i = 0; i < 3; i++) {
	total += arrTotal[i];
}

console.log(arrTotal);

console.log(total);
