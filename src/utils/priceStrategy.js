/**
 * Function to format the price based on the given price strategy.
 * @param {number} price - The original price of the hotel.
 * @param {string} strategy - The price strategy ('standard', 'discount', or 'premium').
 * @returns {string} - The formatted price based on the selected strategy.
 */

const getFormattedPrice = (price, strategy, currency) => {
  const priceStrategies = {
    standard: (price) => price,
    discount: (price) => price * 0.8,
    premium: (price) => price * 0.73,
  };

  const currencySymbol = currency || "$";

  return `${currencySymbol} ${priceStrategies[strategy](price).toFixed(2)}`;
};

export { getFormattedPrice };
