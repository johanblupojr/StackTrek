const Strawberry = (orders, cash) => {
  const pricePerJar = 40;
  const discQuantity = 3;
  const discPrice = 100;
  const discountedJarAmount = Math.floor(orders / discQuantity) * discPrice;
  const remainingJarAmount = (orders % discQuantity) * pricePerJar;
  const totalAmount = discountedJarAmount + remainingJarAmount;
  const change = cash - totalAmount;
  if (cash < totalAmount) {
    return "Insufficient Funds";
  } else {
    return `Change: ${change}`;
  }
};

console.log(Strawberry(6, 200));
