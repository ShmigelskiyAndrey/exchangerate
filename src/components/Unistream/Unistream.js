import React from "react";
import { Section } from "../Section/Section";
import { Card } from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";
import { UnistreamAPI } from "../../api/UnistreamAPI";

export default function Unistream() {
  const { data: dataUSD, pending: pendingUSD } = useFetch(
    UnistreamAPI.getCurrencyUrl("GEO", "RUB", "USD", "1")
  );

  const { data: dataEUR, pending: pendingEUR } = useFetch(
    UnistreamAPI.getCurrencyUrl("GEO", "RUB", "EUR", "1")
  );

  const { data: dataGEL, pending: pendingGEL } = useFetch(
    UnistreamAPI.getCurrencyUrl("GEO", "RUB", "GEL", "2")
  );

  const { data: dataRUB, pending: pendingRUB } = useFetch(
    UnistreamAPI.getCurrencyUrl("GEO", "RUB", "RUB", "2")
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
      <Card
        value={dataGEL?.fees[0]?.acceptedAmount / 2}
        currencyName={"lari"}
        pending={pendingGEL}
      />
      <Card
        value={dataRUB?.fees[0]?.acceptedAmount / 2}
        currencyName={"Rubli"}
        pending={pendingRUB}
      />
    </Section>
  );
}
