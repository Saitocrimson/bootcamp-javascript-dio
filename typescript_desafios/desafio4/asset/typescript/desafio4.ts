var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
let ApiKey:any;
let url:any;
let requestToken:string;
let username:any;
let password:any;
let sessionId:number;
let listId = '7101979';

let loginButton = document.getElementById('login-button')  as HTMLButtonElement;
let searchButton = document.getElementById('search-button');
let searchContainer = document.getElementById('search-container');

loginButton?.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})
async function procurarFilme(query:string) {
    query = encodeURI(query)
    console.log(query)
    let result = await HttpClient.get({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
      method: "GET"
    })
    return result
  }
searchButton?.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query:any;
  query = document.getElementById('search') as HTMLInputElement;
  let listaDeFilmes:any= [await procurarFilme(query)];
  let ul = document.createElement('ul');
  ul.id = "lista";
 for (const item of listaDeFilmes.results) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item.original_title))
        ul.appendChild(li)
      }

  
  
  console.log(listaDeFilmes);
  searchContainer?.appendChild(ul);
})

function preencherSenha() {
  password = document.getElementById('senha') as HTMLInputElement;
  validateLoginButton();
}

function preencherLogin() {
  username =  document.getElementById('login') as HTMLInputElement;
}

function preencherApi() {
   let teste = document.getElementById('api-key') as HTMLInputElement;
  ApiKey = teste
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && ApiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
    static async get({
      url,
      method,
      body = null,
    }: {
      url: string;
      method: string;
      body?: any;
    }) {
    return new Promise((resolve, reject) => {

      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        
      }
      
      request.send(body);
      body= JSON.stringify(body);
    })
  }
}



async function adicionarFilme(filmeId:any) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET"
  })
  console.log(result);
}

async function criarRequestToken () {
  let result:any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET"
  })
  requestToken = result.request_token
}

async function logar() {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body:{
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })
}

async function criarSessao() {
  let result:any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  })
  sessionId = result.session_id;
}

async function criarLista(nomeDaLista:string, descricao:string) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    }
  })
  console.log(result);
}

async function adicionarFilmeNaLista(filmeId:number, listaId:number) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId
    }
  })
  console.log(result);
}

async function pegarLista() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })
  console.log(result);
}
