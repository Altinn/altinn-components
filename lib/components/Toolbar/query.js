export const getQueryParams = (query = {}) => {
  const queryParams = Object.keys(query)
    .filter((key) => query[key])
    .map((key) => {
      return [key, query[key]].join("=");
    })
    .join("&");

  return queryParams;
};
