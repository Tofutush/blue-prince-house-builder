export type Direction = 'n' | 's' | 'w' | 'e';

export type RoomData = {
	name: string,
	filename: string,
	doors: Direction[]
}

export type PlacedRoom = {
	room: RoomData,
	direction: Direction,
	coords: number[],
	temporary?: boolean
}

export type DirRoom = {
	room: RoomData,
	direction: Direction,
	enabled: boolean
}

export type draftType = {
	active: boolean,
	coords: number[],
	direction: Direction | null
}
