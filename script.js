function mudarCor() {
  const cores = ["#f2f2f2", "#e0f7fa", "#ffe0b2", "#c8e6c9", "#ffccbc"];
  const corAtual = document.body.style.backgroundColor;
  let novaCor;

  do {
    novaCor = cores[Math.floor(Math.random() * cores.length)];
  } while (novaCor === corAtual);

  document.body.style.backgroundColor = novaCor;
}
