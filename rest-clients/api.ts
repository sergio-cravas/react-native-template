const ENDPOINT = "https://jsonplaceholder.typicode.com";

export const get = async (
  url: string,
  options?: Omit<RequestInit, "method">,
) => {
  return fetch(ENDPOINT + url, {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    ...options,
  });
};

export const post = async (
  url: string,
  options?: Omit<RequestInit, "method">,
) => {
  return fetch(ENDPOINT + url, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    ...options,
  });
};

export const put = async (
  url: string,
  options?: Omit<RequestInit, "method">,
) => {
  return fetch(ENDPOINT + url, {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    ...options,
  });
};

export const del = async (
  url: string,
  options?: Omit<RequestInit, "method">,
) => {
  return fetch(ENDPOINT + url, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    ...options,
  });
};
