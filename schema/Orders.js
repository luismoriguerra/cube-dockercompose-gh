if(typeof COMPILE_CONTEXT.securityContext === 'undefined' || typeof COMPILE_CONTEXT.securityContext.appID === 'undefined'){
    COMPILE_CONTEXT.securityContext = {
      securityContext: { securityContext: { appID: 'transactions' } },
    };
  }
  
  const {
    securityContext: { appID },
  } = COMPILE_CONTEXT;
  
  cube(`Orders`, {
    dataSource: appID,
  
    sql: `SELECT * FROM orders`,
  
    preAggregations: {
      ordersByVendor: {
        measures: [Orders.count],
        dimensions: [Vendors.name]
      }
    },
  
    joins: {
      Vendors: {
        sql: `${CUBE}.vendor_id = ${Vendors}.vendor_id`,
        relationship: `belongsTo`
      }
    },
    measures: {
      count: {
        type: `count`
      }
    },
    dimensions: {
      id: {
        sql: `order_id`,
        type: `number`,
        primaryKey: true
      },
      title: {
        sql: `title`,
        type: `string`
      }
    },
  });