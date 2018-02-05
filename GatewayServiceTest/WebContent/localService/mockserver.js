sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";
	return {
		/**
		 * Initializes the mock server.
		 * You can configure the delay with the URL parameter "serverDelay".
		 * The local mock data in this folder is returned instead of the real data for testing.
		 * @public
		 */
		init: function() {
			// create
			var oMockServer = new MockServer({
				rootUri: "/sap/opu/odata/sap/Z_SFLIGHT_MSW_SRV_SRV/",
			});
			debugger;
			var oUriParameters = jQuery.sap.getUriParameters();
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});
			// simulate against the metadata and mock data
			var sPath = jQuery.sap.getModulePath("gatewayservicetest.localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			
			// start
			oMockServer.start();
			jQuery.sap.log.info("Running the app with mock data");
		}
	};
});