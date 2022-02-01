export default async function fetcher(url: string) {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((json) => json);
}
