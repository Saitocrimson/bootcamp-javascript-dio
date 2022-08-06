const Base_urL = 'https://api.thecatapi.com/v1/images/search/';
const button = document.getElementById('changecat');
const getcat = async () => {
  try {
    const dado = await fetch(Base_urL);
    const Json = await dado.json();
    //  return json.webpurl;
    return Json[0].url;
  }
  catch (e)
  {
    console.log(e.message);

  }
};

const loadimg = async () => {
  const cat = document.getElementById('cat');
  cat.src = await getcat();

};

button.addEventListener('click', loadimg);
loadimg();
