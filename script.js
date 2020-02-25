//creer nieuwe elementen li en maak ze aan ul vast

function addMoviesToDom(movies) {
	movielist.innerHTML = "";
	movies.forEach(movie => {
		const li = document.createElement("li");
		const img = document.createElement("img");
		const a = document.createElement("a");
		img.src = movie.Poster;
		img.style.height = "400px";
		img.style.width = "300px";
		a.href = `https://www.imdb.com/title/${movie.imdbID}/`;

		document
			.getElementById("movielist")
			.appendChild(li)
			.appendChild(a)
			.appendChild(img);
		document.getElementById("moviecontainer").setAttribute("align", "center");
	});
}

//addMoviesToDom(movies);

// Adding eventlistner to radiobutton

const addEventListeners = document
	.querySelectorAll('input[value="btn"]')
	.forEach(item => {
		item.addEventListener("change", event => {
			handleOnChangeEvent(event);
		});
	});

//Controlling the filters

const handleOnChangeEvent = event => {
	switch (event.target.id) {
		case "latestmov":
			const filterLatest = movies.filter(movie => movie.Year >= 2014);
			addMoviesToDom(filterLatest);

			break;
		case "avengers":
			const filterTitleAveng = movies.filter(movie =>
				movie.Title.includes("Avengers")
			);
			addMoviesToDom(filterTitleAveng);
			break;
		case "xmen":
			const filterTitleXmen = movies.filter(movie =>
				movie.Title.includes("X-Men")
			);
			addMoviesToDom(filterTitleXmen);
			break;
		case "princess":
			const filterTitlePrincess = movies.filter(movie =>
				movie.Title.includes("Princess")
			);
			addMoviesToDom(filterTitlePrincess);
			break;
		case "batman":
			const filterTitleBatman = movies.filter(movie =>
				movie.Title.includes("Batman")
			);
			addMoviesToDom(filterTitleBatman);
			break;
		case "default":
	}
};

document.addEventListener("DOMContentLoaded", () => {
	addMoviesToDom(movies);
	addEventListeners();
});
