import React, { FormEvent } from "react";
import { calcularValorFuturo } from "../../../utils/vfFinance";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Select from "../../common/Select";

const Form: React.FC = () => {
  const [valorPresente, setValorPresente] = React.useState<number>();
  const [taxaAnual, setTaxaAnual] = React.useState<number>();
  const [prazo, setPrazo] = React.useState<number>();
  const [aporteMensal, setAporteMensal] = React.useState<number>();
  const [tipoInvestimento, setTipoInvestimento] = React.useState<string>("CDB");
  const [valorFuturo, setValorFuturo] = React.useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      valorPresente === undefined ||
      taxaAnual === undefined ||
      prazo === undefined ||
      aporteMensal === undefined
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    const resultado = calcularValorFuturo(
      valorPresente,
      taxaAnual,
      prazo,
      aporteMensal,
      tipoInvestimento
    );

    setValorFuturo(resultado);
  };

  return (
    <>
      <form style={{ display: "grid", gap: "12px" }} onSubmit={onSubmit}>
        <Input
          id="valor_presente"
          label="Valor Presente (R$)"
          value={valorPresente}
          onChange={setValorPresente}
        />

        <Input
          id="aporte_mensal"
          label="Aporte Mensal (R$)"
          value={aporteMensal}
          onChange={setAporteMensal}
        />

        <Input
          id="taxa_anual"
          label="Taxa Anual (%)"
          value={taxaAnual}
          onChange={setTaxaAnual}
        />

        <Input
          id="prazo"
          label="Prazo (anos)"
          value={prazo}
          onChange={setPrazo}
        />

        <Select
          id="tipo_investimento"
          label="Tipo de Investimento"
          value={tipoInvestimento}
          onChange={setTipoInvestimento}
          options={[
            { label: "CDB", value: "CDB" },
            { label: "Tesouro Direto", value: "Tesouro Direto" },
            { label: "LCI", value: "LCI" },
            { label: "LCA", value: "LCA" },
          ]}
        />

        <Button type="submit">Calcular</Button>
      </form>

      {valorFuturo !== "" && (
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginTop: "2rem",
            textAlign: "center",
            backgroundColor: "green",
            borderRadius: "6px",
            padding: "1rem",
            color: "white",
          }}
        >
          {valorFuturo}
        </p>
      )}
    </>
  );
};

export default Form;
