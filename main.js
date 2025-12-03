let stars = document.querySelectorAll(".fa-star");

stars.forEach((element) => {
	element.addEventListener("click", (event) => {
		console.log(event.target);
		event.target.classList.toggle("fa-solid");
		event.target.classList.toggle("fa-regular");
	});
});