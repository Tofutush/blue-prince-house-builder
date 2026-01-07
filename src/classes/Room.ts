import type { Direction, RoomProps } from "../types";

class Room {
	name: string;
	color: string[];
	filename: string;
	doors: Direction[];
	direction: Direction;

	constructor(props: RoomProps) {
		this.name = props.name;
		this.color = props.color;
		this.filename = props.filename;
		this.doors = props.doors;
		this.direction = props.direction || 'n';

		// if initially not north, rotate the doors
		if (this.direction !== 'n') {
			if (this.direction === 'e') this.rotateDoors(1);
			else if (this.direction === 's') this.rotateDoors(2);
			else if (this.direction === 'w') this.rotateDoors(3);
		}
	}

	getImgName() {
		if (this.name === 'Antechamber') return 'antechamber.png';
		if (this.name === 'Entrance Hall') return 'entrancehall-4.png';
		if (this.name === 'Room 46') return 'room46-n.png';
		if (this.doors.length === 2 && this.doors.includes('n') && this.doors.includes('s'))
			return this.filename + '-ns.png';
		if (this.doors.length === 2 && this.doors.includes('e') && this.doors.includes('w'))
			return this.filename + '-ew.png';
		return `${this.filename}-${this.direction}.png`;
	}

	rotateDoors(times: number) {
		const order = ['n', 'e', 's', 'w'] as Direction[];
		for (let z = 0; z < this.doors.length; z++)
			this.doors[z] = order[(order.indexOf(this.doors[z]) + times) % 4];
	}
}

export default Room;
