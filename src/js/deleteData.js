
export async function deleteData() {
    console.log("test1");
    const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
}
