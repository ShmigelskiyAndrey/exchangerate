class UnistreamAPI {
  static getCurrencyUrl(destination, acceptedCurrency, currency, amount) {
    return `https://online.unistream.ru/card2cash/calculate?destination=${destination}&amount=${amount}&currency=${currency}&accepted_currency=${acceptedCurrency}&profile=unistream`;
  }
}

export { UnistreamAPI };
