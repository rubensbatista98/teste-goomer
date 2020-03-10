async function api(url) {
  const response = await fetch(`http://challange.goomer.com.br/${url}`);

  if (response.status >= 400) {
    throw new Error();
  }

  return response.json();
}

export default api;
