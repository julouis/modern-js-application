async function fetchData() {
	const response = await fetch(
		"https://character-database.becode.xyz/characters"
	);
	const data = await response.json();
	return data;
}

let data = fetchData();
console.log(data);

// DISPLAY ELEMENTS

var characterID = new Array();

function displayHero(characters) {
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



/* fetchData().then(function displayHero(characters){    
    characters.forEach(({ image, name, shortDescription, description, id}) => {
        const cloneHero = template.cloneNode(true).content;
		
		cloneHero.querySelector("#hero-name").innerHTML = `${name}`;
		cloneHero.querySelector("#hero-short-description").innerHTML = `${shortDescription}`;
		cloneHero.querySelector("#hero-description").innerHTML = `${description}`;
        cloneHero.querySelector("#hero-image").innerHTML = `<img src="data:image/gif;base64,${image}" width="200" height="200">`;
        
        target.appendChild(cloneHero); 

        characterID.push(id)

    })
    
}) */

// IMAGE TO URL

document.querySelector("#hero-image-post").addEventListener("change", (e) => {
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.onloadend = () => {
		image = reader.result.replace(/^data:image\/[a-z]+;base64,/, "");
		console.log(image);
	};
	reader.readAsDataURL(file);
});
//

// POST ELEMENT

const inputs = Array.from(document.querySelectorAll("#exampleModal input"));

async function postHero () {
    const values = inputs.map(({ value }) => value.trim());

    console.log(values);

    const [name, shortDescription, description] = values;

    const response = await fetch(
        "https://character-database.becode.xyz/characters",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                shortDescription,
                description,
                image,
            }),
        }
    );

    document.location.reload();

    console.log(response.status);
    const newHero = await response.json();
    console.log(newHero);
}

// DELETE FUNCTION

async function deleteHero() {
    const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
}



// DELETE FUNCTION

/* document.querySelector("#delete-button").addEventListener("click",async () => {
    
    const response =await fetch(`https://character-database.becode.xyz/characters/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
        document.location.reload();
    
}); */


data.then((characters) => {
	displayHero(characters);
});

document.getElementById("create-hero").addEventListener("click", () => {
    postHero();
});