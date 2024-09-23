
function calcuateTotalSpentByCategory(transactions){
    const result = {};

    transactions.map(transaction => {
        const {category, price} = transaction;

        if(result[category]){
            result[category] += price;
        } else {
            result[category] = price;
        }

    })

    return Object.keys(result).map(category =>({
           category : category,
           totalSpent : result[category]
    }))
}

const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656076900000, price: 15, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656077000000, price: 20, category: 'Transport', itemName: 'Bus' },
    { id: 4, timestamp: 1656077100000, price: 5, category: 'Food', itemName: 'Soda' },
    { id: 5, timestamp: 1656077200000, price: 30, category: 'Transport', itemName: 'Train' }
];

console.log(calcuateTotalSpentByCategory(transactions));