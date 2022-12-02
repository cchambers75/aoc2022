export const exp = "";

const input = await Deno.readTextFile("./input.txt");

const elfArr = input.split("\n").map((x) => [x[0], x[2]]);

let score = 0;

elfArr.forEach((x) => {
	if (
		(x[0] === "A" && x[1] === "X") ||
		(x[0] === "B" && x[1] === "Y") ||
		(x[0] === "C" && x[1] === "Z")
	) {
		score += 3;
		if (x[1] === "X") {
			score += 1;
		} else if (x[1] === "Y") {
			score += 2;
		} else {
			score += 3;
		}
	} else {
		gameRes(x);
	}
});

console.log(score);

function gameRes(x) {
	if (x[0] === "A" && x[1] == "Y") {
		score += 8;
	}

	if (x[0] === "A" && x[1] === "Z") {
		score += 3;
	}

	if (x[0] === "B" && x[1] === "X") {
		score += 1;
	}

	if (x[0] === "B" && x[1] === "Z") {
		score += 9;
	}

	if (x[0] === "C" && x[1] === "X") {
		score += 7;
	}

	if (x[0] === "C" && x[1] === "Y") {
		score += 2;
	}
}
