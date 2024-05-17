// // 1. Desenvolva um menu lateral com links para as atividades:
// • tags html
// • css fundamentos
// • flexbox
// • DOM
// Ao clicar, mostre ao lado do menu a atividade escolhida.
// Observação, a página deve abrir a atividade dinamicamente sem abrir outra página.

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav.menu-navigation a");
    const sectionMain = document.querySelector(".section-main");

    const oldLink = document.querySelector("#dynamic-css");
    if (oldLink) {
      oldLink.remove();
    }
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que o link redirecione a página
        const href = link.getAttribute("href");
  
        // Fazer uma requisição AJAX para o arquivo HTML do link
        fetch(href)
          .then((response) => response.text()) // Obter o texto do conteúdo
          .then((data) => {
            sectionMain.innerHTML = data; // Carregar o conteúdo na seção principal

          const cssLink = document.createElement("link");
          cssLink.rel = "stylesheet";
          cssLink.id = "dynamic-css";
          cssLink.href = `${href.replace('.html', '.css')}`; // Assumindo que o CSS tem o mesmo nome da página HTML
          document.head.appendChild(cssLink);//aplicar css no  cssFunda
          
            
          })
          .catch((err) => {
            console.error("Erro ao carregar o conteúdo:", err);
          });
      });
    });
  });
  