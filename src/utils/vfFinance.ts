export function calcularValorFuturo(
  valorPresente: number,
  taxaAnual: number,
  prazo: number, // em anos
  aporteMensal: number,
  tipoInvestimento: string
): string {
  const meses = prazo * 12;
  const taxaMensal = (1 + taxaAnual / 100) ** (1 / 12) - 1;

  const montanteInicial = valorPresente * Math.pow(1 + taxaMensal, meses);
  const montanteAportes =
    aporteMensal * ((Math.pow(1 + taxaMensal, meses) - 1) / taxaMensal);

  const valorBruto = montanteInicial + montanteAportes;
  const valorInvestido = valorPresente + aporteMensal * meses;
  const rendimento = valorBruto - valorInvestido;

  let valorLiquido = valorBruto;

  // Isenção de IR para LCI e LCA
  const isentoIR = tipoInvestimento === "LCI" || tipoInvestimento === "LCA";

  if (!isentoIR) {
    const dias = prazo * 365;
    let aliquotaIR = 0;

    if (dias <= 180) aliquotaIR = 0.225;
    else if (dias <= 360) aliquotaIR = 0.2;
    else if (dias <= 720) aliquotaIR = 0.175;
    else aliquotaIR = 0.15;

    const imposto = rendimento * aliquotaIR;
    valorLiquido = valorBruto - imposto;
  }

  return valorLiquido.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
