type Direction = 'n' | 's' | 'w' | 'e';

type RoomData = {
    name: string,
    filename: string,
    doors: Direction[]
}

export type { Direction, RoomData };
