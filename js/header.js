var header = document.querySelector("#wrapperHeader")
var mainTitle = document.querySelector("main")

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		mainTitle.style.marginTop = "calc(10vw + 68px)"
		header.style.position = "fixed"
		header.style.top = "0px"
		header.style.backgroundColor = "#141414"
	} else {
		mainTitle.style.marginTop = "10vw"
		header.style.position = "relative"
		header.style.top = "0px"
		header.style.background = "transparent"
	}
})
