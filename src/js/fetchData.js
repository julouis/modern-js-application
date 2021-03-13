
export async function fetchData() {
	const response = await fetch(
		"https://character-database.becode.xyz/characters"
	);
	const data = await response.json();
	return data;
}
