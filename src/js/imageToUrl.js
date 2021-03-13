/* 
document.querySelector("#hero-image-post").addEventListener("change", (e) => {
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.onloadend = () => {
		image = reader.result.replace(/^data:image\/[a-z]+;base64,/, "");
		console.log(image);
	};
	reader.readAsDataURL(file);
});
 */


export function imageToUrl(e) {
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.onloadend = () => {
		image = reader.result.replace(/^data:image\/[a-z]+;base64,/, "");
		console.log(image);
	};
	reader.readAsDataURL(file);
}