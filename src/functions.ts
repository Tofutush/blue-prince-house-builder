import roomListJson from './rooms.json';
import type { Direction, RoomData } from "./types";

let roomImgs = Object.fromEntries(Object.entries(import.meta.glob('./assets/rooms/*.png', {
	eager: true,
	import: 'default',
})).map(([key, val]) => [key.split('/').pop(), val]));

export const roomList: RoomData[] = roomListJson as RoomData[];

const specialSticks = [
	"spareroom-secret",
	"lockerroom",
	"secretpassage",
	"ballroom",
	"rumpusroom",
	"draftingstudio",
	"workshop",
	"veranda"
];
const fourRooms = [
	"passageway",
	"cloister",
	"archives",
	"entrancehall",
	"weightroom",
	"vestibule"
];

export function getRoomImg(room: RoomData, direction: Direction) {
	if (!room.filename) throw new Error('no filename');
	// special rooms
	if (room.name === 'Antechamber') return roomImgs['antechamber.png'];
	if (room.name === 'Room 46') return roomImgs['room46-n.png'];
	if (room.name === 'Chamber of Mirrors' && direction === 'n') return roomImgs['chamberofmirrors-4.png'];
	if (fourRooms.includes(room.filename)) return roomImgs[room.filename + '-4.png'];
	// stick-shaped rooms
	if (room.doors.length === 2 && room.doors.includes('n') && room.doors.includes('s') && !specialSticks.includes(room.filename)) {
		if (direction === 'n' || direction === 's') return roomImgs[room.filename + '-ns.png'];
		else return roomImgs[room.filename + '-ew.png'];
	}
	// all the others
	return roomImgs[`${room.filename}-${direction}.png`];
}

export function getRoom(name: string) {
	let room = (roomList as RoomData[]).find(r => r.name === name)
	if (!room) throw new Error(`room called "${name}" does not exist`);
	return room;
}

export function rotateDoors(room: RoomData, direction: Direction) {
	let directions: Direction[] = ['n', 'e', 's', 'w'];
	let newDoors: Direction[] = [];
	let index: number = 0;
	if (direction === 'n') index = 0;
	else if (direction === 'e') index = 1;
	else if (direction === 's') index = 2;
	else if (direction === 'w') index = 3;
	for (let z = 0; z < room.doors.length; z++) {
		newDoors.push(directions[(directions.indexOf(room.doors[z]) + index) % 4])
	}
	return newDoors;
}
