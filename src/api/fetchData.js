const BASE_URL = "http://135.181.30.244:27007/api/summaries/";

export const getCandidates = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
