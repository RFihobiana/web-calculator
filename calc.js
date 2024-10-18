const inputField = document.getElementById('input_field')
const inputButtons = document.querySelectorAll('div#inputs button')

function computeInputs() {
	return inputField.value = eval(inputField.value)
}

/**
 * Clear Input Screen content from the last character
 * @param {number} length number of character to be removed
 * @returns current value printed in the field
 */
function clearInput(length = 1) {
	return inputField.value = inputField.value.slice(0, -length)
}

// Set input buttons click listeners
inputButtons.forEach(button => {
	button.addEventListener('click', () => {
		switch (button.textContent) {
			case "Enter":
				computeInputs()
				break

			case "Del":
				clearInput()
				break;

			case "C":
				inputField.value = ''
				break;

			default:
				inputField.value += button.textContent
				break
		}

		inputField.focus({ preventScroll: false })
	})
})

inputField.addEventListener('keyup', event => {
	if (event.key == 'Enter') computeInputs()
})

// Unable character input in the field
inputField.addEventListener('input', event => {
	if (!/[\d\+\-\/\*\s\.]/ui.test(event.data) && event.inputType !== 'deleteContentBackward') {
		// Incorrect value, delete the last added one
		clearInput()
		// TODO: Change to look as an error but write it
	}
})

inputField.focus({ preventScroll: false })
