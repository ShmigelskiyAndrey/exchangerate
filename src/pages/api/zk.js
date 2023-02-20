export default function handler(req, res) {
  fetch(
    `https://koronapay.com/transfers/online/api/transfers/tariffs?sendingCountryId=RUS&sendingCurrencyId=810&receivingCountryId=GEO&receivingCurrencyId=840&paymentMethod=debitCard&receivingAmount=100&receivingMethod=cash&paidNotificationEnabled=true`
  )
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .finally(() => res.status(500).json({ error: "errortext" }));
}
