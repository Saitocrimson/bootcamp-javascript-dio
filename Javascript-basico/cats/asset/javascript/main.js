const Base_url = 'https://thatcopy.pw/catapi/rest/';
const button = document.getElementById('change_cat');


const getcat = async() =>{
    try{
    const dado = await fetch(Base_url);
    const json = await dado.json();
    return json.webpurl;
    }
    catch(e)
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


