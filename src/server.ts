import express from 'express';
import { getClub, getResult } from './db';

export default function createServer() {
	const app = express();

	app.get('/results/:team1/:team2', (req, res) => {
		try {
			let equipo1 = getClub(req.params.team1);
			let equipo2 = getClub(req.params.team2);
			let match = getResult(equipo1, equipo2);
			if (match.score) {
				res.json({
					date: match.date,
					result: `${equipo1} ${match.score.ft[0]} - ${match.score.ft[1]} ${equipo2}`,
				});
			} else {
				res.json({
					date: match.date,
				});
			}
		} catch (e) {
			res.status(400).json({
				error: e.message,
			});
		}
	});

	return app;
}
