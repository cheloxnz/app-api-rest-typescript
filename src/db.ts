import { Clubs, Matches, Club, Match } from './types';

const clubs: Clubs = require('../data/clubs.json');
const results: Matches = require('../data/results.json');

export function getClub(code: string): string {
	const club = clubs.clubs.find((club) => club.code === code);
	if (!club) {
		throw new Error('Club not exists');
	}
	return club.name;
}

export function getResult(t1: string, t2: string): Match {
	const match = results.matches.find((match) => {
		return t1 === match.team1 && t2 === match.team2;
	});
	if (!match) {
		throw new Error('This match does not exist');
	}
	return match;
}
