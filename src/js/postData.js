const inputs = Array.from(document.querySelectorAll("#exampleModal input"));

export async function postData () {
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

