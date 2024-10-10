const ENDPOINT = "https://jsonplaceholder.typicode.com";

export const get = async (url: string, options?: RequestInit) => {
  return fetch(ENDPOINT + url, { method: "GET", ...options });
};

export const post = async (url: string, options?: RequestInit) => {
  return fetch(ENDPOINT + url, { method: "POST", ...options });
};

export const put = async (url: string, options?: RequestInit) => {
  return fetch(ENDPOINT + url, { method: "PUT", ...options });
};

export const del = async (url: string, options?: RequestInit) => {
  return fetch(ENDPOINT + url, { method: "DELETE", ...options });
};
