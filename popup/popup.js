document.querySelectorAll('.i18n').forEach((el) => {
	if (el.getAttribute('data-i18n-destination')) {
		el.setAttribute(el.getAttribute('data-i18n-destination'), browser.i18n.getMessage(el.getAttribute('data-i18n')));
	}
	else el.textContent = browser.i18n.getMessage(el.getAttribute('data-i18n'));
});

document.getElementById('formsubmit').addEventListener('submit', e => {
	e.preventDefault();
	browser.storage.local.get({
		awppPrefixoPais: "55",
		awppPrefixoEstado: "27",
		awppTexto: "",
		awppTamanho: 9,
	}, (result) => {
		let numero = document.querySelector('#formsubmit input').value;
		numero = numero.replace(/\D+/g, "");
		if (numero.length < result.awppTamanho) return;
		if (numero.length == result.awppTamanho) numero = result.awppPrefixoPais + result.awppPrefixoEstado + numero;
		else if (numero.length == result.awppTamanho + result.awppPrefixoEstado.length) numero = result.awppPrefixoPais + numero;
		else if (numero.length > result.awppTamanho + result.awppPrefixoEstado.length + result.awppPrefixoPais.length) return;
		let texto = encodeURI(result.awppTexto);
		browser.tabs.create({
			url: `https://wa.me/${numero}?text=${texto}`
		});
		window.close();
	});
});