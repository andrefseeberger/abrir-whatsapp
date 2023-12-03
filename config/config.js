function saveOptions(e) {
	e.preventDefault();
	browser.storage.local.set({
		awppPrefixoPais: document.querySelector("#awppPrefixoPais").value,
		awppPrefixoEstado: document.querySelector("#awppPrefixoEstado").value,
		awppTexto: document.querySelector("#awppTexto").value,
		awppTamanho: document.querySelector("#awppTamanho").value
	});
}

function restoreOptions() {
	function setValues(result) {
		document.querySelector("#awppPrefixoPais").value = result.awppPrefixoPais;
		document.querySelector("#awppPrefixoEstado").value = result.awppPrefixoEstado;
		document.querySelector("#awppTexto").value = result.awppTexto;
		document.querySelector("#awppTamanho").value = result.awppTamanho;
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}

	let gettingItem = browser.storage.local.get({
		awppPrefixoPais: "+55",
		awppPrefixoEstado: "27",
		awppTexto: "",
		awppTamanho: 9,
	});
	gettingItem.then(setValues, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

document.querySelectorAll('.i18n').forEach((el) => {
	el.textContent = browser.i18n.getMessage(el.getAttribute('data-i18n'));
});