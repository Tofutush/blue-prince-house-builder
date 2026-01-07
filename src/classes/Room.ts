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

	rotateDoors(times: number) {
		const order = ['n', 'e', 's', 'w'] as Direction[];
		for (let z = 0; z < this.doors.length; z++)
			this.doors[z] = order[(order.indexOf(this.doors[z]) + times) % 4];
	}
}

export default Room;
