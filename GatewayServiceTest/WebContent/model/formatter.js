sap.ui.define([], function() {
	"use strict";
	return {
		formatPrice: function(sReleaseDate, sDiscontinueDate) {
			return sReleaseDate + (sDiscontinueDate ? " (discontinued on " + sDiscontinueDate + ")" : "");
		}
	};
});