using {
 
    managed,
 
    cuid,
 
    sap.common.CodeList as CodeList
 
} from '@sap/cds/common';
using {CE_PURCHASEORDER_0001 as external} from '../srv/external/CE_PURCHASEORDER_0001';
 
namespace my.dataModel;
 
entity Statuses : CodeList {
 
    key code : String(3)
 
}
type Status : Association to Statuses;
entity Comments : managed, cuid {
 
    comment    : String;
 
    escalation : Association to Escalations;
 
}
 
entity Escalations : managed, cuid {
    description   : String(80);
    material      : String(30);
    purchaseOrder : Association to PurchaseOrders;
    purchaseItems : Association to PurchaseOrderItems;
    expectedDate  : Date;
    status        : Status;
    comments      : Composition of many Comments
                        on comments.escalation = $self;
 
};
 
view PurchaseOrders as
 
    select from external.PurchaseOrder {
 
        key PurchaseOrder as ID,
 
            PurchaseOrderType,
 
            Supplier,
 
            SupplierPhoneNumber,
            CompanyCode,
            PurchasingGroup,
            PurchasingOrganization
 
    };
    view PurchaseOrderItems  as 
    select from external.PurchaseOrderItem {
        key  PurchaseOrderItem as Itemnumber,
            Material,
            Plant,
            OrderPriceUnit,
            NetPriceAmount,
            StorageLocation,


    };