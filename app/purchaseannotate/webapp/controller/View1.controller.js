sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("purchaseannotate.controller.View1", {
            onInit: function () {

            },
            onPage2(oEvent) {
                const oItem = oEvent.getSource();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2", {
                    invoicePath: window.encodeURIComponent(oItem.getBindingContext().getPath().substr(1))
                });
            },
            onPress: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteTSW");
            }
        });
    });
