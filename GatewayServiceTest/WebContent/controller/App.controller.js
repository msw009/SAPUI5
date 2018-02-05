sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"gatewayservicetest/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";
	return Controller.extend("gatewayservicetest.controller.App", {
		formatter: formatter,

		onInit: function() {
			
			var oModel = new sap.ui.model.odata.v2.ODataModel('/sap/opu/odata/sap/Z_SFLIGHT_MSW_SRV_SRV/', true);
			this.getView().setModel(oModel);
			
		}
	});
});
