const API_URL = "https://swapi.dev/api/starships/";

export const fetchStarships = async (page = 1, search = "") => {
  const searchParam = search ? `&search=${search}` : "";
  const res = await fetch(`${API_URL}?page=${page}${searchParam}`);
  const data = await res.json();
  return data;
};
