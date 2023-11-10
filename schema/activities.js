cube(`activities`, {
  sql: `select * from activities`,

  dataSource: `default`,

  joins: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true,
    },
    username: {
      sql: `username`,
      type: `string`,
    },
    createdat: {
      sql: `createdat`,
      type: `time`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
  },

  // pre_aggregations: {
  //   // Pre-aggregation definitions go here.
  //   // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  // }
});
