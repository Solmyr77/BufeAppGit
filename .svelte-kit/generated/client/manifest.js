export { matchers } from './matchers.js';

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
	"/admin": [~3],
	"/kosar": [~4],
	"/list": [~5],
	"/login": [~6],
	"/profil": [~7],
	"/register": [~8],
	"/rendelesek": [~9],
	"/[termek]": [~10]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};