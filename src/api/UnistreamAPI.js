class UnistreamAPI {
  static getCurrencyUrl(destination, acceptedCurrency, currency) {
    return `https://online.unistream.ru/card2cash/calculate?destination=${destination}&amount=1&currency=${currency}&accepted_currency=${acceptedCurrency}&profile=unistream`;
  }
}

export { UnistreamAPI };
