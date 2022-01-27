const BASE_URL = "http://135.181.30.244:27007/api/summaries/";

export const getCandidates = async (page, filters) => {
  try {
    let filtersToUrl = "";

    if (filters.photo) filtersToUrl += "&photo=true";

    const res = await fetch(`${BASE_URL}?page=${page}${filtersToUrl}`);
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getFilteredCandidates = async (page) => {
  try {
    const res = await fetch(`${BASE_URL}?page=${page}photo=true`);
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
