cube(`LfxRepository`, {
  sql: `SELECT
      repository_id,
      url,
      description,
      project_id,
      project_slug,
      short_name
    FROM repository`,

  joins: {},

  preAggregations: {
    main: {
      dimensions: [CUBE.url, CUBE.description],
      indexes: {
        rollup_join_idx: {
          columns: [CUBE.url],
        },
      },
      refreshKey: {
        every: `1 day`,
      },
    },
  },

  refreshKey: {
    every: `1 day`,
  },
  measures: {},

  dimensions: {
    repositoryId: {
      sql: `repository_id`,
      type: `string`,
      primaryKey: true,
    },

    url: {
      sql: `url`,
      type: `string`,
    },

    description: {
      sql: `description`,
      type: `string`,
    },

    projectId: {
      sql: `project_id`,
      type: `string`,
    },

    projectSlug: {
      sql: `project_slug`,
      type: `string`,
    },

    shortName: {
      sql: `short_name`,
      type: `string`,
    },
  },
  dataSource: "redshiftlfx",
});
