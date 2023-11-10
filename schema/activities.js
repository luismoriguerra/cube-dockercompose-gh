cube(`activities`, {
  sql: `select * from crowd_public.activities`,
  
  dataSource: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  // pre_aggregations: {
  //   // Pre-aggregation definitions go here.
  //   // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  // }
});
