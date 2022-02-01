export async function fetcher(url: string) {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((json) => json);
}

export async function add(url: string, data) {
  return fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => json);
}
