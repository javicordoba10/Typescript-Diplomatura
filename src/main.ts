import { authenticate } from "./authenticator";
import "./style.css";
const nombreProyecto: string = "Mi Primer Proyecto TypeScript";
const descripcion: string =
  "Proyecto desarrollado con HTML, CSS y TypeScript.";
const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
  app.innerHTML = `
    <main class="contenedor">
      <h1>${nombreProyecto}</h1>
      <p>${descripcion}</p>
      <button id="btnBienvenida">Comenzar</button>
      <p id="mensaje"></p>
    </main>
  `;
}
const boton = document.querySelector<HTMLButtonElement>(
  "#btnBienvenida"
);
const mensaje = document.querySelector<HTMLParagraphElement>(
  "#mensaje"
);
if (boton && mensaje) {
  boton.addEventListener("click", () => {
    mensaje.textContent =
      "¡Tu aplicación TypeScript está funcionando!";
  });
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="login-form">
    <h3 id="login-tittle">Login</h3>
    <label class="login-label" for="email">Email:</label>
    <input class="login-input" type="email" name="email" id="email-input" />
    <label class="login-label" for="password">Password:</label>
    <input class="login-input" type="password" name="password" id="password-input" />
    <button id="login-button">Enviar</button>
</div>
`

const container = document.querySelector<HTMLDivElement>(".login-form")!;
const emailInput = document.querySelector<HTMLInputElement>("#email-input")!;
const passwordInput = document.querySelector<HTMLInputElement>("#password-input")!;
const button = document.querySelector<HTMLButtonElement>("#login-button")

authenticate(emailInput, passwordInput, container, button);

