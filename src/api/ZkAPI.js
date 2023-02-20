class ZkAPI {
  static getCurrencyUrl(destination, acceptedCurrency, currency) {
    return `https://194.85.18.32/transfers/online/api/transfers/tariffs?sendingCountryId=RUS&sendingCurrencyId=${currency}&receivingCountryId=${destination}&receivingCurrencyId=${acceptedCurrency}&paymentMethod=debitCard&receivingAmount=100&receivingMethod=cash&paidNotificationEnabled=true`;
  }
}

export { ZkAPI };
