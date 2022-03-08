// common function for getting id & price
const updatePrice = (id,price)=>{
  const memoryCost = document.getElementById(id);
  memoryCost.innerText = price;
  updateTotal();
}
// common function for convert string to Number 
const strToNumber = id => {
  const bestPriceElement = document.getElementById(id);
  const bestPrice = Number(bestPriceElement.innerText);
  return bestPrice;
}
// memory 
const defaultMemory = () => {updatePrice('memory-cost', 0)};
const memoryBtn = () => {updatePrice('memory-cost', 180)};
// Storage 
const storageBtn1 = () => {updatePrice('storage-cost', 0)};
const storageBtn2 = () => {updatePrice('storage-cost', 100)};
const storageBtn3 = () => {updatePrice('storage-cost', 180)};
// deliveryCost 
const deliveryBtn1 =() => {updatePrice('delivery-cost', 0)};
const deliveryBtn2 =() => {updatePrice('delivery-cost', 20)};
// Update Total 
const updateTotal = () => {
  const getBestPrice = strToNumber('best-price');
  const memoryCost = strToNumber('memory-cost');
  const storageCost = strToNumber('storage-cost');
  const deliveryCost = strToNumber('delivery-cost');
  const extraTotalCost = getBestPrice + memoryCost + storageCost + deliveryCost;
  // get extraTotalCost & inTotalCost
  const extraTotalElement = document.getElementById('extra-total-cost');
  const inTotalElement = document.getElementById('in-total');
  // set Value 
  extraTotalElement.innerText = extraTotalCost;
  inTotalElement.innerText = extraTotalCost;
}
// applyPromoCode 
const applyBtn = () => {
  const totalElement = document.getElementById('extra-total-cost')
  const inTotalElement = document.getElementById('in-total')
  const promoInput = document.getElementById('promo-code')
  const promoValue = promoInput.value
  const totalAmount = Number(totalElement.innerText)
  const discountAmount = document.getElementById('discount-amount');
  if (promoValue == 'hot20') {
    const discount = (totalAmount / 100) * 20;
    discountAmount.innerText = discount.toFixed(2);
    inTotalElement.innerText = totalAmount - discount;
    document.getElementById('wrong-promo').classList.add("d-none")
    document.getElementById('add-promo').classList.remove("d-none")
} else {
    document.getElementById('wrong-promo').classList.remove("d-none")
}
promoInput.value = '' // clearing the promo input section
}