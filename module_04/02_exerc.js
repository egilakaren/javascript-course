var inputUser = document.getElementById('user');
var listUsers = document.querySelector('#app ul');

const getUserRepo = name => {
  var user = inputUser.value;
  if (!user) {
    renderError(error);
    alert("Preencha o campo");
  }

  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
        listRepo(response.data);
    })
    .catch(error => {
        renderError(error);
        alert("Não foi possivel realizar a busca");
    });
};


const listRepo = repositorios => {
    listUsers.innerHTML = "";

    for (repo of repositorios) {
        const repoName = document.createTextNode(repo.name);
        const repoItem = document.createElement("li");

        repoItem.appendChild(repoName);
        listUsers.appendChild(repoItem);
    }
};

function renderLoading(loading) {
    listUsers.innerHTML = "";

    var textElement = document.createTextNode("Carregando ... ");
    var loadingElement = document.createElement("li");

    loadingElement.appendChild(textElement);
    listUsers.appendChild(loadingElement);
}

function renderError(error) {
    listUsers.innerHTML = "";

    var msgUserEmpty = !user ? "Preencha o campo" : "Falha ao buscar usuario";

    var textElement = document.createTextNode(msgUserEmpty);
    var errorElement = document.createElement("li");

    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listUsers.appendChild(errorElement);
}