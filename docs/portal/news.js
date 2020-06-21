function exibeNoticias() {
  let divTela = document.getElementById("news");
  let texto = "";

  // Montar texto HTML das noticias
  let dados = JSON.parse(this.responseText);
  for (i = 0; i < 4; i++) {
    var noticia = dados.articles[i];
    var data = new Date(noticia.publishedAt);

    texto =
      texto +
      `
          <div class="box-noticia col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img src="${noticia.urlToImage}" alt="">
          <span class="titulo">${noticia.title}</span><br>
          <span class="creditos">${data.toLocaleDateString()} - 
              ${noticia.source.name}</span><br>
          <span class="text">
          ${noticia.content} <a target="_blank" href="${
        noticia.url
      }">Leia mais ...</a>
          </span>
          </div>           
          `;
  }

  // Preencher a DIV com o texto HTML
  divTela.innerHTML = texto;
}

function executaPesquisa() {
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?language=en&q=covid&apiKey=c80be78f34604a4a8bd373642b94f04b`
  );
  xhr.send();
}

document.getElementById("news").addEventListener("load", executaPesquisa);
