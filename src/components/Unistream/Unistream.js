import React from "react";
import { Section } from "../Section/Section";
import { Card } from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";
import { UnistreamAPI } from "../../api/UnistreamAPI";

export default function Unistream() {
  const { data: dataUSD, pending: pendingUSD } = useFetch(
    UnistreamAPI.getCurrencyUrl("GEO", "RUB", "USD")
  );

  const { data: dataEUR, pending: pendingEUR } = useFetch(
    UnistreamAPI.getCurrencyUrl("GEO", "RUB", "EUR")
  );

  return (
    <Section title={"Unistream"}>
      <Card
        value={dataUSD?.fees[0]?.acceptedAmount}
        currencyName={"$"}
        pending={pendingUSD}
      />
      <Card
        value={dataEUR?.fees[0]?.acceptedAmount}
        currencyName={"euro"}
        pending={pendingEUR}
      />
    </Section>
  );
}
