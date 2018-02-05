sap.ui.define([], function() {
	"use strict";
	return {
		formatReleaseDate: function(sReleaseDate, sDiscontinueDate) {
			return sReleaseDate + (sDiscontinueDate ? " (discontinued on " + sDiscontinueDate + ")" : "");
		}
	};
});