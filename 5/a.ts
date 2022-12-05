export {};

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./input2.txt");

const data = input.split("\n\r\n");
const cont = data[0].split("\n").reverse().slice(1);

const contStack: string[][] = [];

for (let i = 0; i < cont.length + 1; i++) {
	contStack.push(cont.map((x) => x.slice(i * 4, i * 4 + 3)));
}

contStack.forEach((x) => {
	for (let i = x.length - 1; i >= 0; i--) {
		if (x[i] === "   ") {
			x.pop();
		} else {
			break;
		}
	}
});

const moves = data[1].split("\r\n");

const moveArr: string[] = moves.map((x) => {
	return x.split(" ");
});

moveArr.forEach((x) => moveCont(x));

function moveCont(x) {
	const numToMove = +x[1];
	const fromCol = +x[3] - 1;
	const toCol = +x[5] - 1;
	const lengthOfFromCol = contStack[fromCol].length;
	const valToMove = contStack[fromCol].splice(
		lengthOfFromCol - numToMove,
		numToMove
	);
	valToMove.reverse().forEach((x) => contStack[toCol].push(x));
}

contStack.forEach((x) => console.log(x[x.length - 1]));
