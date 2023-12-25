/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const outputArr = [];
  if (transactions.length == 0) {
    return outputArr;
  }
  transactions.map((transaction) => {
    let a = 0;
    const { category, price } = transaction;

    if (outputArr.length == 0) {
      outputArr.push({ category, totalSpent: price });
    } else if (outputArr.length != 0) {
      outputArr.map((item) => {
        if (item.category == category) {
          item.totalSpent += price;
          a = 1;
        }
      });
      if (a == 0) {
        outputArr.push({ category, totalSpent: price });
      }
    }
  });
  return outputArr;
}

module.exports = calculateTotalSpentByCategory;
