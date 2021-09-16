



abstract class Creature {
	id!: Number;
	name!: String;
	price!: Number;
	time!: String;
	timeArray!: [];
	months!: [];
}

export class Fish extends Creature {
	location!: String;
	size!: String;
}

export class Bug extends Creature {
	location!: String;
}

export class SeaCreature extends Creature {
	size!: String;
	swimPattern!: String;
}