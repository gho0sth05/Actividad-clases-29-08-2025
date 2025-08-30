import { input, select } from "@inquirer/prompts";
import { Juego } from "./Juego";

const juego = new Juego("Sofi 💙");

async function mainMenu() {
  while (true) {
    const option = await select({
      message: "🎮 Menú del Videojuego",
      choices: [
        { name: "👤 Ver información del jugador", value: "info" },
        { name: "📜 Ver misiones", value: "misiones" },
        { name: "✅ Completar misión", value: "completar" },
        { name: "🚪 Salir", value: "salir" },
      ],
    });

    if (option === "info") {
      console.log(juego.mostrarJugador());
    }

    if (option === "misiones") {
      console.log("Misiones disponibles:");
      console.log(juego.listarMisiones().join("\n"));
    }

    if (option === "completar") {
      const indexStr = await input({ message: "Ingresa el número de la misión a completar:" });
      const index = parseInt(indexStr) - 1;
      const mensaje = juego.completarMision(index);
      console.log(mensaje);
    }

    if (option === "salir") {
      console.log("👋 ¡Hasta la próxima, Sofi!");
      break;
    }
  }
}

mainMenu();
