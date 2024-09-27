async function loadPrefixs(client) {
  const { loadFiles } = require("../Functions/fileLoader")
  const ascii = require("ascii-table")
  const table = new ascii().setHeading("Comandos", "Estatus")

  await client.prefixs.clear()

  const Files = await loadFiles("CommandsPrefixs")

  Files.forEach((file) => {
    const prefixs = require(file);
    client.prefixs.set(prefixs.name, prefixs);

    table.addRow(prefixs.name, "🟩")
  })

  return console.log(table.toString(), "\nCommandos con Prefijos Cargados");
};

module.exports = { loadPrefixs };