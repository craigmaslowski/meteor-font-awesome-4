Handlebars.registerHelper('faIcon', function (icon) {
	return new Handlebars.SafeString('<i class="fa fa-' + icon + '"></i>');
});