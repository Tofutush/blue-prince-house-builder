type Direction = 'n' | 's' | 'e' | 'w';
type Color = 'red' | 'orange' | 'gold' | 'green' | 'blue' | 'violet' | 'black' | 'none';

type RoomProps = {
    name: string;
    color: Color[];
    filename: string;
    doors: Direction[];
    direction?: Direction;
}

export type { Direction, Color, RoomProps };
