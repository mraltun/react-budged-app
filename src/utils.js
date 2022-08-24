// Format the currency. First parameter is undefined to default current user's locale ("en-US").
export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "usd",
  style: "currency",
  minimumFractionDigits: 0,
});
