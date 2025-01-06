import { useEffect, useState } from "react";

interface Showtyping {
	id: number;
	title: string;
	synopsis: string;
	country: string;
	year: string;
}

function DisplaySeries() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3310/api/programs")
			.then((response) => response.json())
			.then((response) => {
				setMovie(response);
			});
	}, []);

	return (
		<>
			<section>
				{movie.map((show: Showtyping) => (
					<section key={show.id}>
						<h1>{show.title}</h1>
						<p>{show.synopsis}</p>
						<p>{show.country}</p>
						<p>{show.year}</p>
					</section>
				))}
			</section>
		</>
	);
}
export default DisplaySeries;
