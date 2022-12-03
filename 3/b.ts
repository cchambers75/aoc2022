export const exp = "";

const input = await Deno.readTextFile("./input.txt");

const sack = input.split("\n");

let total = 0;

const prio = new Map();

prio.set("a", 1);
prio.set("b", 2);
prio.set("c", 3);
prio.set("d", 4);
prio.set("e", 5);
prio.set("f", 6);
prio.set("g", 7);
prio.set("h", 8);
prio.set("i", 9);
prio.set("j", 10);
prio.set("k", 11);
prio.set("l", 12);
prio.set("m", 13);
prio.set("n", 14);
prio.set("o", 15);
prio.set("p", 16);
prio.set("q", 17);
prio.set("r", 18);
prio.set("s", 19);
prio.set("t", 20);
prio.set("u", 21);
prio.set("v", 22);
prio.set("w", 23);
prio.set("x", 24);
prio.set("y", 25);
prio.set("z", 26);
prio.set("A", 27);
prio.set("B", 28);
prio.set("C", 29);
prio.set("D", 30);
prio.set("E", 31);
prio.set("F", 32);
prio.set("G", 33);
prio.set("H", 34);
prio.set("I", 35);
prio.set("J", 36);
prio.set("K", 37);
prio.set("L", 38);
prio.set("M", 39);
prio.set("N", 40);
prio.set("O", 41);
prio.set("P", 42);
prio.set("Q", 43);
prio.set("R", 44);
prio.set("S", 45);
prio.set("T", 46);
prio.set("U", 47);
prio.set("V", 48);
prio.set("W", 49);
prio.set("X", 50);
prio.set("Y", 51);
prio.set("Z", 52);

const groups: string[][][] = [];

for (let i = 0; i < sack.length; i += 3) {
	groups.push([sack[i], sack[i + 1], sack[i + 2]].map((x) => x.split("")));
}

groups.forEach((x) => {
	const [first, second, third] = x;
	const comp1 = first.filter((y) => second.includes(y));
	const comp2 = second.filter((z) => third.includes(z));
	const final = comp1.filter((a) => comp2.includes(a));
	total += prio.get(final[0]);
});

console.log(total);
