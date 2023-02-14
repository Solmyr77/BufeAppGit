import PocketBase from 'pocketbase';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	event.locals.pb.autoCancellation(false);

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
}
