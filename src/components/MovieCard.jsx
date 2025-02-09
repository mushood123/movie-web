import React from 'react'

export const MovieCard = ({ movie }) => {
	const { id, title, vote_average, poster_path, release_date, original_language, adult } = movie;
	const imgUrl = poster_path ?
		`https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'
	const votes = vote_average ? vote_average.toFixed(1) : "N/A"
	const year = release_date ? release_date.split('-')[0] : "N/A"
	console.log(year)
	return (
		<div className='movie-card' >
			<img
				className='text-white'
				src={imgUrl}
				alt={title}
			/>
			<div className='mt-4' >
				<h3>{title}</h3>
				<div className='content' >
					<div className='rating' >
						<img src='star.svg' />
						<p>{votes}</p>
					</div>
					<p className='lang' >{original_language}</p>
					<p className='year' >{year}</p>
				</div>
			</div>
		</div>
	)
}

