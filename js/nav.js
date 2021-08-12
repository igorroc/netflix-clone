var leftBtn = document.getElementsByClassName("leftNav")
var rightBtn = document.getElementsByClassName("rightNav")

for (const el of rightBtn) {
	el.addEventListener("click", () => {
		el.parentElement.scrollLeft += 800
	})
}

for (const el of leftBtn) {
	el.addEventListener("click", () => {
		el.parentElement.scrollLeft -= 800
	})
}

var wrappers = document.querySelectorAll(".wrapperCards")

wrappers.forEach((el) => {
    changeRandomCards(el)
})

// changeRandomCards(myList.children)

function changeRandomCards(wrapper) {
	var cards = ["blacklist.webp", "dark.jpg", "strangerThings.jpg", "babyDriver.webp", "desencanto.jpg", "disjointed.jpg", "finalSpace.jpg", "mundoMisterio.jpg"]
    var vertical = ["elCamino.webp", "htsdof.webp", "lupin.webp", "strangerThings.webp"]
    var min = 0
    var maxC = cards.length
    var maxV = vertical.length

    var isVertical = false
    console.log(wrapper.parentElement)
    if(wrapper.parentElement.classList.contains("verticalCards")){
        isVertical = true
    }
    if(wrapper.parentElement.classList.contains("loadingCards")){
        return
    }

	for (const card of wrapper.children) {
		if (
			card.classList.contains("leftNav") ||
			card.classList.contains("rightNav")
		) {
			continue
		}
        if(!isVertical){
            card.children[0].children[0].src = `./assets/card_${cards[Math.floor(Math.random() * (maxC - min) + min)]}`
        }else{
            card.children[0].children[0].src = `./assets/vertical_${vertical[Math.floor(Math.random() * (maxV - min) + min)]}`
        }
	}
}
