export async function fetcher(url: string) {
  return fetch(`${url}`).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }
    return res.json();
  });
}
