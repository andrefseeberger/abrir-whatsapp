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
			awppPrefixoPais: "55",
			awppPrefixoEstado: "27",
			awppTexto: "",
			awppTamanho: 9,
		}, (result) => {
			let numero = selection.replace(/\D+/g, "");
			if (numero.length < result.awppTamanho) return;
			if (numero.length == result.awppTamanho) numero = result.awppPrefixoPais + result.awppPrefixoEstado + numero;
			else if (numero.length == result.awppTamanho + result.awppPrefixoEstado.length) numero = result.awppPrefixoPais + numero;
			else if (numero.length > result.awppTamanho + result.awppPrefixoEstado.length + result.awppPrefixoPais.length) return;
			let texto = encodeURI(result.awppTexto);
			browser.tabs.create({
				url: `https://wa.me/${numero}?text=${texto}`,
				index: newTabIndex
			});
		});
	}
});
