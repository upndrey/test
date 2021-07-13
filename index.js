var urls = ['https://t.me/lentach/27600?embed=1', 'https://t.me/lentach/27601?embed=1', 'https://t.me/lentach/27602?embed=1'];
Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.text())
)).then(texts => {
	let parser = new DOMParser();
	let parsedHtml = parser.parseFromString(texts, 'text/html');
	let bodyText = parsedHtml.getElementsByClassName("tgme_widget_message_text");
    for (let i = 0; i < bodyText.length; i++) {
  		console.log(bodyText[i].innerHTML);
	}
})
