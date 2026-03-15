const fs = require('fs');

const data = fs.readFileSync('client/src/lib/products.json', 'utf8');
const products = JSON.parse(data);

const packagesMap = {
    1: [
        { id: "p1", name: "Standard Edition", amount: "Base Game", price: "$39.99", popular: true },
        { id: "p2", name: "Deluxe Edition", amount: "Game + DLC", price: "$59.99" }
    ],
    2: [
        { id: "p1", name: "Standard Edition", amount: "Base Game", price: "$59.99", popular: true },
        { id: "p2", name: "Ultimate Edition", amount: "All DLCs", price: "$79.99" }
    ],
    3: [
        { id: "p1", name: "Starter", amount: "1000 Coins", price: "$9.99" },
        { id: "p2", "name": "Popular", "amount": "2150 Coins", "price": "$19.99", "popular": true },
        { id: "p3", name: "Pro", amount: "4350 Coins", price: "$39.99" },
        { id: "p4", name: "Whale", amount: "11500 Coins", price: "$99.99" }
    ],
    4: [
        { id: "p1", name: "Small", amount: "1380 RP", price: "$10.99" },
        { id: "p2", name: "Medium", amount: "2800 RP", price: "$21.99", popular: true },
        { id: "p3", name: "Large", "amount": "5000 RP", price: "$34.99" },
        { id: "p4", name: "Extra Large", "amount": "7200 RP", price: "$49.99" }
    ],
    5: [
        { id: "p1", name: "Small", amount: "475 VP", price: "$4.99" },
        { id: "p2", name: "Medium", "amount": "1000 VP", price: "$9.99", popular: true },
        { id: "p3", name: "Large", "amount": "2050 VP", price: "$19.99" },
        { id: "p4", name: "Extra Large", "amount": "5350 VP", price: "$49.99" }
    ],
    6: [
        { id: "p1", name: "Starter Pack", amount: "60 UC", price: "$0.99" },
        { id: "p2", name: "Basic Pack", amount: "325 UC", price: "$4.99" },
        { id: "p3", name: "Pro Bundle", amount: "660 UC", price: "$9.99", popular: true },
        { id: "p4", name: "Elite Crate", amount: "1800 UC", price: "$24.99" },
        { id: "p5", name: "Champion Vault", amount: "3850 UC", price: "$49.99" },
        { id: "p6", name: "Ultimate Pack", "amount": "8100 UC", price: "$99.99" }
    ],
    7: [
        { id: "p1", name: "Basic", amount: "$10 Card", price: "$10.00" },
        { id: "p2", name: "Standard", "amount": "$25 Card", price: "$25.00", popular: true },
        { id: "p3", name: "Premium", "amount": "$50 Card", price: "$50.00" },
        { id: "p4", name: "Ultimate", "amount": "$100 Card", price: "$100.00" }
    ],
    8: [
        { id: "p1", name: "Starter", amount: "400 Robux", price: "$4.99" },
        { id: "p2", name: "Standard", "amount": "800 Robux", price: "$9.99", popular: true },
        { id: "p3", name: "Premium", "amount": "1700 Robux", price: "$19.99" },
        { id: "p4", "name": "Ultimate", "amount": "4500 Robux", price: "$49.99" },
        { id: "p5", name: "Max", "amount": "10000 Robux", price: "$99.99" }
    ],
    9: [
        { id: "p1", name: "Basic", amount: "$10 Card", price: "$10.00" },
        { id: "p2", name: "Standard", "amount": "$25 Card", price: "$25.00", popular: true },
        { id: "p3", name: "Premium", "amount": "$50 Card", price: "$50.00" },
        { id: "p4", name: "Ultimate", "amount": "$100 Card", price: "$100.00" }
    ],
    10: [
        { id: "p1", name: "Starter", amount: "130 Coins", price: "$1.99" },
        { id: "p2", name: "Standard", "amount": "550 Coins", price: "$4.99" },
        { id: "p3", name: "Pro", "amount": "1040 Coins", price: "$9.99", popular: true },
        { id: "p4", name: "Elite", "amount": "2130 Coins", price: "$19.99" },
        { id: "p5", "name": "Max", "amount": "3280 Coins", price: "$29.99" }
    ]
};

products.forEach(p => {
    p.packages = packagesMap[p.id] || [];
});

fs.writeFileSync('client/src/lib/products.json', JSON.stringify(products, null, 2), 'utf8');
console.log("Updated products.json successfully.");
