type Direction = 'n' | 's' | 'e' | 'w';

type RoomProps = {
    name: string;
    color: string[];
    filename: string;
    doors: Direction[];
    direction?: Direction;
}

export type { Direction, RoomProps };
