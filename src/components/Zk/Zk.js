import { Section } from "../Section/Section";
import { Card } from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";
import { ZkAPI } from "../../api/ZkAPI";

export default function Zk() {
  const { data: dataUSD, pending: pendingUSD } = useFetch(
    ZkAPI.getCurrencyUrl("GEO", "810", "840")
  );

  return (
    <Section title={"Zk"}>
      <Card
        value={dataUSD && dataUSD[0]?.exchangeRate}
        pending={pendingUSD}
        currencyName={"$"}
      />
      <Card />
    </Section>
  );
}
