export const exp = "";

const input = await Deno.readTextFile("./input.txt");

const elfArr = input.split("\n").map((x) => [x[0], x[2]]);

let score = 0;

elfArr.forEach((x) => {
	gameRes(x);
});

console.log(score);

function gameRes(x) {
	if (x[0] === "A") {
		if (x[1] === "X") {
			score += 3;
		} else if (x[1] === "Y") {
			score += 4;
		} else {
			score += 8;
		}
	} else if (x[0] === "B") {
		if (x[1] === "X") {
			score += 1;
		} else if (x[1] === "Y") {
			score += 5;
		} else {
			score += 9;
		}
	} else {
		if (x[1] === "X") {
			score += 2;
		} else if (x[1] === "Y") {
			score += 6;
		} else {
			score += 7;
		}
	}
}
