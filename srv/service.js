
const cds = require('@sap/cds');
 
module.exports = cds.service.impl(async function () {
 
    this.on('resolve', async (req) => {
 
        const tx = cds.tx(req);
 
        const res = await tx.run(
 
            UPDATE('my.dataModel.Escalations')
 
                .set({ 'Status_code': 'CMP' })
 
                .where({ ID: req.params[0].ID })
 
        );
 
    });
 
 
    this.on('READ', 'PurchaseOrders', async (req) => {
 
 
 
        const po = await cds.connect.to('CE_PURCHASEORDER_0001');
    
 
 
 
        let result = po.tx(req).send(
 
 
            { 
                query: req.query, 
 
                headers: {
 
                    apiKey: process.env.apiKey 
 
                }
 
            }
 
 
 
        );
 
 
 
        return result;
 
 
 
    });
 
 
 
    this.before('NEW', 'Escalations', (req) => {
 
 
 
        req.data.Status_code = 'INP';
 
 
 
    });
 
 
 
    this.before('CREATE', 'Escalations', (req) => {
 
 
 
        // After creation, update the status to 'In Progress'
 
 
 
        req.data.status_code = 'INP';
 
 
 
    });
 
 
 
});
// const cds = require('@sap/cds');
// const { PurchaseOrders } = cds.entities("CE_PURCHASEORDER_0001")
 
// const travelService = (srv) => {
 
//     try {
//         srv.on('CREATE', "PurchaseOrders", async (req) => {
//       const data = req.data;
//       if (!data) {
//         throw new Error("Data is undefined.");
//     }
//       const result = await cds.tx(req).run(INSERT.into(PurchaseOrders).entries(data));
//         console.log(result);
//       return result;
//         })
//     }
//         catch(err){
//             console.log(err);
//         }
 
// }
// module.exports= travelService
 
 
 
// const cds = require('@sap/cds');
// const { INSERT } = require('@sap/cds').ql;
 
// const { newPurchaseOrders } = cds.entities("newPurchaseOrders");
// console.log('PurchaseOrders entity:', newPurchaseOrders);
// const travelService = (srv) => {
//     try {
//         srv.on('CREATE', "newPurchaseOrders", async (req) => {
//             const data = req.data;
//             if (!data) {
//                 throw new Error("Data is undefined.");
//             }
 
//             const result = await cds.tx(req).run(INSERT.into(newPurchaseOrders).entries(data));
//             console.log(result);
//             return result;
//         });
//     } catch (err) {
//         console.log(err);
//         throw err; // Re-throw the error to ensure it's properly propagated
//     }
// };
 
// module.exports = travelService;
 
 
// const cds = require('@sap/cds');
// const { INSERT } = require('@sap/cds').ql;
 
// const { PurchaseOrders } = cds.entities("my.dataModel.PurchaseOrders");
// console.log('newPurchaseOrders entity:',PurchaseOrders);
 
// module.exports = (srv) => {
//     srv.on('CREATE', 'PurchaseOrders', async (req) => {
//       const { data } = req;
//       const result = await cds.transaction(req).run(
//         INSERT.into('PurchaseOrders').entries(data)
//       );
//       return result;
//     });
//   };