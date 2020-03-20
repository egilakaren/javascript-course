const isMajor = idade => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      idade >= 18 ? resolve() : reject();
    }, 2000);
  });
};

isMajor(8)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
