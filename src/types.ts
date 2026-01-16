export type Direction = 'n' | 's' | 'w' | 'e';

export type RoomData = {
	name: string,
	filename: string,
	doors: Direction[],
	outer?: boolean
}

export type PlacedRoom = {
	room: RoomData,
	direction: Direction,
	coords: number[],
	temporary?: boolean
}

export type draftType = {
	active: boolean,
	coords: number[],
	direction: Direction | null,
	outer?: boolean,
	monk: boolean
}
