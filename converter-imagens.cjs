const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const pastas = [
  path.join(__dirname, "public"),
  path.join(__dirname, "src", "assets", "images"),
];

const extensoes = [".jpg", ".jpeg", ".png"];

async function converterPasta(pasta) {
  if (!fs.existsSync(pasta)) {
    console.log(`Pasta não encontrada: ${pasta}`);
    return;
  }

  const arquivos = fs.readdirSync(pasta);

  for (const arquivo of arquivos) {
    const caminhoOriginal = path.join(pasta, arquivo);
    const dados = fs.statSync(caminhoOriginal);

    if (dados.isDirectory()) {
      await converterPasta(caminhoOriginal);
      continue;
    }

    const extensao = path.extname(arquivo).toLowerCase();

    if (!extensoes.includes(extensao)) {
      continue;
    }

    const nomeSemExtensao = path.basename(arquivo, extensao);
    const caminhoWebp = path.join(pasta, `${nomeSemExtensao}.webp`);

    try {
      await sharp(caminhoOriginal)
        .webp({ quality: 82 })
        .toFile(caminhoWebp);

      console.log(`Convertida: ${caminhoOriginal}`);
    } catch (erro) {
      console.error(`Erro em ${arquivo}: ${erro.message}`);
    }
  }
}

async function executar() {
  for (const pasta of pastas) {
    console.log(`\nConvertendo pasta: ${pasta}`);
    await converterPasta(pasta);
  }

  console.log("\nTodas as imagens foram processadas.");
}

executar().catch(console.error);