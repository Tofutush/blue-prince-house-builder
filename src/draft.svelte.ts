import type { Direction } from "./types";

export let draft = $state({
	active: false,
	coords: [0, 0],
	direction: null as Direction | null
});
