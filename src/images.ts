let imgs = import.meta.glob('./assets/rooms/*.png', {
	eager: true,
	import: 'default',
});
export default Object.fromEntries(Object.entries(imgs).map(([key, val]) => [key.split('/').pop(), val]));
