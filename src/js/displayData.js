
var characterID = new Array();

export function displayData(characters) {
	var template = document.querySelector("#template");
	var target = document.querySelector("#target");

	characters.forEach(({ image, name, shortDescription, description, id }) => {
		const cloneHero = template.cloneNode(true).content;

		cloneHero.querySelector("#hero-name").innerHTML = `${name}`;
		cloneHero.querySelector(
			"#hero-short-description"
		).innerHTML = `${shortDescription}`;
		cloneHero.querySelector("#hero-description").innerHTML = `${description}`;
		cloneHero.querySelector(
			"#hero-image"
		).innerHTML = `<img src="data:image/gif;base64,${image}" width="200" height="200">`;
        

		target.appendChild(cloneHero);

		characterID.push(id);
	});
}
