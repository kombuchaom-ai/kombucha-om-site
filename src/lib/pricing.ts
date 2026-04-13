
export function formatBRL(value: number) {
  // Inteiro sem centavos
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function calcSubscriptionTotal(baseMonthlyFromImage: number, months: number) {
  // Regra final confirmada pelo cliente:
  // - o valor exibido na arte já é o PREÇO MENSAL
  // - portanto: total do período = preço_mensal × meses
  return baseMonthlyFromImage * months;
}
