// Toggle-switch --> Giving it a color after the first click
let toggle = document.querySelector(".switch");

let input = document.querySelector("input");
let slider = document.querySelector(".slider");

function MakeActive() {
	input.classList.add("active");
	slider.classList.add("active");
}
toggle.addEventListener("click", MakeActive);

// Toggle-switch --> Functionality
let priceMonthly = document.querySelectorAll(".price-monthly");
let priceAnnually = document.querySelectorAll(".price-annually");

function GivePrice() {
	if (input.checked == false) {
		for (let i = 0; i < priceMonthly.length; i++) {
			priceMonthly[i].style.display = "initial";
			priceAnnually[i].style.display = "none";
		}
	} else {
		for (let i = 0; i < priceMonthly.length; i++) {
			priceMonthly[i].style.display = "none";
			priceAnnually[i].style.display = "initial";
		}
	}
}
toggle.addEventListener("click", GivePrice);
