import "./style.css";
// 1. Variables tipadas (anotación e inferencia)
const projectName: string = "Control de Lotes Ganaderos";
const pricePerKg = 2400; // inferido como number (ARS/kg estimado)
let appliedGainKg: number = 0;

// 2. Arrays tipados
const lotNames: string[] = ["Lote Norte", "Lote Sur", "Lote Arroyo"];
const lotAvgWeightsKg: number[] = [320, 285, 350];
const lotHeadsCount: number[] = [45, 60, 30];

// 3. Primera función tipada: calcula el valor estimado total de un lote
function calculateEstimatedValue(
  heads: number,
  weightKg: number,
  price: number
): number {
  return heads * weightKg * price;
}

// 4. Segunda función tipada: genera el texto descriptivo de un lote
function formatLotSummary(
  name: string,
  heads: number,
  weightKg: number,
  price: number
): string {
  const totalValue = calculateEstimatedValue(heads, weightKg, price);
  const formattedValue = totalValue.toLocaleString("es-AR");
  return `${name}: ${heads} cabezas · ${weightKg} kg prom. · Valor est.: $${formattedValue}`;
}

// Función auxiliar tipada para renderizar la interfaz
function renderLots(extraWeightKg: number): void {
  const listElement = document.querySelector<HTMLUListElement>("#lots-list");
  const summaryElement = document.querySelector<HTMLParagraphElement>("#summary-text");

  if (!listElement || !summaryElement) {
    return;
  }

  listElement.innerHTML = "";

  let totalHeads: number = 0;
  let totalPortfolioValue: number = 0;

  for (let i = 0; i < lotNames.length; i++) {
    const name = lotNames[i];
    const heads = lotHeadsCount[i];
    const currentWeight = lotAvgWeightsKg[i] + extraWeightKg;

    totalHeads += heads;
    totalPortfolioValue += calculateEstimatedValue(heads, currentWeight, pricePerKg);

    const item = document.createElement("li");
    item.className = "lot-card";
    item.textContent = formatLotSummary(name, heads, currentWeight, pricePerKg);
    listElement.appendChild(item);
  }

  summaryElement.textContent = `${projectName} — Total: ${totalHeads} cabezas | Valor estimado general: $${totalPortfolioValue.toLocaleString("es-AR")} (Ganancia simulada: +${extraWeightKg} kg/cab.)`;
}

// 5. Interacción mediante evento
const simulateButton = document.querySelector<HTMLButtonElement>("#simulate-gain-btn");

if (simulateButton) {
  simulateButton.addEventListener("click", () => {
    appliedGainKg += 15;
    renderLots(appliedGainKg);
  });
}

// Render inicial
renderLots(appliedGainKg);