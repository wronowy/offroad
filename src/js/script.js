const menuToggle = document.querySelector('.menu-toggle')
const sidebar = document.querySelector('.sidebar')
const footerYear = document.querySelector('.footer__year')

let links = document.querySelectorAll('.links a')
let bodyId = document.querySelector('body').id

for (let link of links) {
	if (link.dataset.active == bodyId) {
		link.classList.add('active')
	}
}

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('is-active')
	sidebar.classList.toggle('is-active')
})

activeLink.addEventListener('click')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

function submitForm() {
	const form = document.getElementById('contactForm')
	const inputs = form.querySelectorAll('input, textarea')

	let isValid = true

	inputs.forEach(input => {
		if (!input.checkValidity()) {
			input.classList.add('error')
			isValid = false
		} else {
			input.classList.remove('error')
			input.classList.add('success')
		}
	})

	if (isValid) {
		document.getElementById('popup').style.display = 'block'
		setTimeout(function () {
			document.getElementById('popup').style.display = 'none'
			form.reset()
			inputs.forEach(input => {
				input.classList.remove('success')
			})
		}, 3000)
	}
}

// Dodano obsługę formatowania numeru telefonu
document.getElementById('phone').addEventListener('input', function (event) {
	const input = event.target
	const inputValue = input.value.replace(/\D/g, '') // Usunięcie wszystkich niecyfrowych znaków
	const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')
	input.value = formattedValue
})

handleCurrentYear()
AOS.init();