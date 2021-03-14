import { fetchData } from './fetchData.js';
import { postData } from './postData.js';
import { displayData } from './displayData.js';
import { deleteData } from './deleteData.js';

let data = fetchData();

document.querySelector("#hero-image-post").addEventListener("change", (e) => {
    imageToUrl(e);
})

data.then((characters) => {
	displayData(characters);
	
	document.querySelector("#delete-button").addEventListener("click", () => {
		deleteData();
	})
});

document.getElementById("create-hero").addEventListener("click", () => {
    postData();
});

