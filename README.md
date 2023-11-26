# Abrir número de telefone no WhatsApp

Extensão para o Mozilla Firefox que adiciona um menu de contexto ao selecionar um texto no navegador.


## Funcionalidades

- Abrir número selecionado no WhatsApp
    - O número pode conter caracteres especiais, como parênteses e traços, que serão removidos
    - O número pode contar com:
        - DDI (+55 no Brasil) + DDD (27, por exemplo) + número
        - DDD + número
        - Somente número
- Caso o número selecionado não conte com DDD e DDI, serão incluídos automaticamente
    - É possível alterar o DDI e DDD padrão
- É possível customizar um texto padrão para a nova conversa


## Instalação

O botão abaixo abre diretamente a página da extensão no Firefox. Na próxima tela, basta clicar em "Adicionar ao Firefox"

[![Button]][Link]

[Button]: https://img.shields.io/badge/INSTALAR-033929?style=for-the-badge&logo=firefox
[Link]: https://addons.mozilla.org/pt-BR/firefox/addon/abrir-n%C3%BAmero-no-whatsapp/


## Números aceitos e resultados

Utilizando o padrão:

```
DDI = +55
DDD = 27
```

Texto selecionado => link aberto

```
99999-9999 => https://wa.me/5527999999999

(21) 99999-99999 => https://wa.me/55219999999999

+55 11 99999-99999 => https://wa.me/55119999999999

Meu número é 99999-9999! Me ligue => https://wa.me/5527999999999
```
