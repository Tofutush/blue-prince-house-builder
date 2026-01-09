import type { Direction, RoomData } from "./types";
import roomListJson from './rooms.json';

export const roomList: RoomData[] = roomListJson as RoomData[];

export function getRoomImgName(room: RoomData, direction: Direction) {
	if (!room.filename) throw new Error('no filename');
	// special rooms
	if (room.name === 'Antechamber') return 'antechamber.png';
	if (room.name === 'Entrance Hall') return 'entrancehall-4.png';
	if (room.name === 'Room 46') return 'room46-n.png';
	// stick-shaped rooms
	if (room.doors.length === 2 && room.doors.includes('n') && room.doors.includes('s')) {
		if (direction === 'n' || direction === 's') return room.filename + '-ns.png';
		else return room.filename + '-ew.png';
	}
	// all the others
	return `${room.filename}-${direction}.png`;
}

export function getRoom(name: string) {
	let room = (roomList as RoomData[]).find(r => r.name === name)
	if (!room) throw new Error(`room called "${name}" does not exist`);
	return room;
}
