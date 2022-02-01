export default async function fetcher(url: string) {
  return fetch(`https://fakestoreapi.com/${url}`)
    .then((res) => res.json())
    .then((json) => json);
}
