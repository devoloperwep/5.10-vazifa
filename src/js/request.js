async function getData(url) {
  const req = await fetch(url);
  const date = await req.json();
  return date;
}

export default getData;
