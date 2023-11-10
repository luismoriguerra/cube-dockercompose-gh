const cubejs = require("@cubejs-client/core");
const sign = require("jwt-encode");
const secret = "secret1234";
const data = {
  appID: `transactions`,
  iat: parseInt(new Date().getTime() / 1000 + 60 * 60),
};
const jwt = sign(data, secret);

const cubejsApi = new cubejs.CubejsApi(jwt, {
  apiUrl: "http://localhost:4000/cubejs-api/v1",
});

const count_query = {
  dimensions: ["LfxRepository.url", "LfxRepository.projectId"],
  order: {
    "LfxRepository.url": "asc",
  },
  limit: 1,
};

async function getResults(query) {
  return await cubejsApi.load(query);
}

async function dryRun(query) {
  return await cubejsApi.dryRun(query);
}

test("Redshift :: Expect row count", async () => {
  const resultSet = await getResults(count_query);
  expect(resultSet.loadResponses[0].data.length).toBe(1);
});
