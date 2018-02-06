sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"gatewayservicetest/model/formatter",
	'sap/ui/model/Sorter',
	'sap/ui/model/Filter'
], function(Controller, JSONModel, formatter, Sorter, Filter) {
	"use strict";
	return Controller.extend("gatewayservicetest.controller.App", {
		formatter: formatter,

		onInit: function() {
			
			var oModel = new sap.ui.model.odata.v2.ODataModel('/sap/opu/odata/sap/Z_SFLIGHT_MSW_SRV_SRV/', true);
			this.getView().setModel(oModel);
			
		},
		
		onFilter: function (oEvent) {
			this.sSearchQuery = oEvent.getSource().getValue();
			this.fnApplyFiltersAndOrdering();
		},
		
		onReset: function (oEvent){
			this.bGrouped = false;
			this.bDescending = false;
			this.sSearchQuery = 0;
			this.byId("carrid").setValue("");

			this.fnApplyFiltersAndOrdering();
		},
		
		fnApplyFiltersAndOrdering: function (oEvent){
			var aFilters = [],
				aSorters = [];

			aSorters.push(new Sorter("Carrid", this.bDescending));
		
			if (this.sSearchQuery) {
				var oFilter = new Filter("Carrid", sap.ui.model.FilterOperator.Contains, this.sSearchQuery);
				aFilters.push(oFilter);
			}

			this.byId("list").getBinding("items").filter(aFilters).sort(aSorters);
		}
	});
});