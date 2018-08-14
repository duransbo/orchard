window.onload = function () {

	var setImageArticle = function() {
		var articles = document.querySelectorAll('.blog-article');
		var i;

		for (i = 0; i < articles.length; i++) {
			articles[i].style.backgroundImage = 'url(' + articles[i].getAttribute('data-image') + ')';
		}
	};

	setImageArticle();

};