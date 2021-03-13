import { fetchData } from './fetchData.js';
import { postData } from './postData.js';
import { displayData } from './displayData.js';

let data = fetchData();

data.then((characters) => {
	displayData(characters);
});