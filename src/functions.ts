import roomListJson from './rooms.json';
import type { Direction, RoomData } from "./types";

let roomImgs = Object.fromEntries(Object.entries(import.meta.glob('./assets/rooms/*.png', {
	eager: true,
	import: 'default',
})).map(([key, val]) => [key.split('/').pop(), val]));

export const roomList: RoomData[] = roomListJson as RoomData[];

export function getRoomImg(room: RoomData, direction: Direction) {
	if (!room.filename) throw new Error('no filename');
	// special rooms
	if (room.name === 'Antechamber') return roomImgs['antechamber.png'];
	if (room.name === 'Entrance Hall') return roomImgs['entrancehall-4.png'];
	if (room.name === 'Room 46') return roomImgs['room46-n.png'];
	// stick-shaped rooms
	if (room.doors.length === 2 && room.doors.includes('n') && room.doors.includes('s')) {
		if (direction === 'n' || direction === 's') return room.filename + '-ns.png';
		else return room.filename + '-ew.png';
	}
	// all the others
	return roomImgs[`${room.filename}-${direction}.png`];
}

export function getRoom(name: string) {
	let room = (roomList as RoomData[]).find(r => r.name === name)
	if (!room) throw new Error(`room called "${name}" does not exist`);
	return room;
}
