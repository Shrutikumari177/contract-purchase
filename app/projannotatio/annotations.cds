using EscalationManagementService as service from '../../srv/service';

annotate service.Escalations with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'description',
            Value : description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'material',
            Value : material,
        },
        {
            $Type : 'UI.DataField',
            Label : 'purchaseOrder_ID',
            Value : purchaseOrder_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'expectedDate',
            Value : expectedDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'status_code',
            Value : status_code,
        },
    ]
);
annotate service.Escalations with {
    purchaseOrder @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'PurchaseOrders',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : purchaseOrder_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'PurchaseOrderType',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Supplier',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'SupplierPhoneNumber',
            },
        ],
    }
};
annotate service.Escalations with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'description',
                Value : description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'material',
                Value : material,
            },
            {
                $Type : 'UI.DataField',
                Label : 'purchaseOrder_ID',
                Value : purchaseOrder_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'expectedDate',
                Value : expectedDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status_code',
                Value : status_code,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
