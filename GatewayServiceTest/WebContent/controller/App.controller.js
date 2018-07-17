sap.ui.define([
	"gatewayservicetest/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("gatewayservicetest.controller.App", {

		onInit: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel('/sap/opu/odata/SAP/Z_SFLIGHT_MSW_SRV_01/', true);
			this.getView().setModel(oModel);
		}

	});

});