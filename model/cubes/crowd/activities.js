cube(`activities`, {
  sql_table: `crowd_public.activities`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    attributes: {
      sql: `attributes`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    platform: {
      sql: `platform`,
      type: `string`
    },
    
    sourceid: {
      sql: `sourceid`,
      type: `string`
    },
    
    sourceparentid: {
      sql: `sourceparentid`,
      type: `string`
    },
    
    channel: {
      sql: `channel`,
      type: `string`
    },
    
    body: {
      sql: `body`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    url: {
      sql: `url`,
      type: `string`
    },
    
    importhash: {
      sql: `importhash`,
      type: `string`
    },
    
    memberid: {
      sql: `memberid`,
      type: `string`
    },
    
    conversationid: {
      sql: `conversationid`,
      type: `string`
    },
    
    parentid: {
      sql: `parentid`,
      type: `string`
    },
    
    tenantid: {
      sql: `tenantid`,
      type: `string`
    },
    
    createdbyid: {
      sql: `createdbyid`,
      type: `string`
    },
    
    updatedbyid: {
      sql: `updatedbyid`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    objectmemberid: {
      sql: `objectmemberid`,
      type: `string`
    },
    
    objectmemberusername: {
      sql: `objectmemberusername`,
      type: `string`
    },
    
    segmentid: {
      sql: `segmentid`,
      type: `string`
    },
    
    organizationid: {
      sql: `organizationid`,
      type: `string`
    },
    
    createdat: {
      sql: `createdat`,
      type: `time`
    },
    
    updatedat: {
      sql: `updatedat`,
      type: `time`
    },
    
    timestamp: {
      sql: `timestamp`,
      type: `time`
    },
    
    deletedat: {
      sql: `deletedat`,
      type: `time`
    },
    
    searchsyncedat: {
      sql: `searchsyncedat`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
