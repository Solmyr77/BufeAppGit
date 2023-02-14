export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')];

export const server_loads = [0];

export const dictionary = {
	"/": [~2],
	"/admin": [~4],
	"/kosar": [~5],
	"/list": [~6],
	"/login": [~7],
	"/profil": [~8],
	"/register": [~9],
	"/rendelesek": [~10],
	"/[termek]": [~3]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};