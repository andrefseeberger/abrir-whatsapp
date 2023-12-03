/* Criação do menu de contexto */
browser.contextMenus.create({
	id: "awpp-open",
	title: browser.i18n.getMessage("contextMenuItemTitle"),
	contexts: ["selection"]
});

/* Ação do menu de contexto */
browser.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId == "awpp-open") {
		const newTabIndex = tab.index + 1;
		const selection = info.selectionText;
		browser.storage.local.get({
			awppPrefixoPais: "+55",
			awppPrefixoEstado: "27",
			awppTexto: "",
			awppTamanho: 9,
		}, (result) => {
			let numero = selection.replace(/\D+/g, "");
			let tamanhoEstado = parseInt(result.awppTamanho) + parseInt(result.awppPrefixoEstado.length);
			let tamanhoPais = tamanhoEstado + parseInt(result.awppPrefixoPais.length) - 1;
			if (numero.length < parseInt(result.awppTamanho) || numero.length > tamanhoPais) return;

			// Apenas número de telefone
			if (numero.length == parseInt(result.awppTamanho)) numero = result.awppPrefixoPais + result.awppPrefixoEstado + numero;
			// Número com DDD
			else if (numero.length == (parseInt(result.awppTamanho) + parseInt(result.awppPrefixoEstado.length))) numero = result.awppPrefixoPais + numero;
			// Número com DDI
			else numero = '+' + numero;
			
			let texto = encodeURI(result.awppTexto);
			browser.tabs.create({
				url: `https://wa.me/${numero}?text=${texto}`,
				index: newTabIndex
			});
		});
	}
});
