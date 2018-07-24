const advisor = Object.create(null, {
    company: {
        enumerable: true,
        writable: true,
        value: "Big Money",
    },
    specialty: {
        enumerable: true,
        writable: true,
        value: "advising people about money"
    },
    name: {
        enumerable: true,
        value: "Clutch Nixon",
    },
    portfolio: {
        enumerable: false,
        value: []
    },
    worth: {
        enumerable: false,
        value: function () {
            let total = 0;
            for (i = 0; i < this.portfolio.length; i++) {
                let stockValue = this.portfolio[i].shares * this.portfolio[i].price;
                total += stockValue;
            }
            return total;
        }
    },
    purchase: {
        enumerable: false,
        value: function (symbol, quant, price) {
            this.portfolio.push({
                stock: symbol,
                shares: quant,
                valuation: price,
            });
        }
    },
    sell: {
        enumerable: false,
        value: function (symbol) {
            let portfolio = advisor.portfolio;
            for (let i = 0; i < portfolio.length; i++) {
                if (portfolio[i].stock === symbol) {
                    portfolio.splice(i , 1);
                }
            }
        }
    }
})

advisor.purchase("AAPL", 50, 25000);
advisor.purchase("MSFT", 100, 99999);
advisor.sell("MSFT", 100, 99999);


let header = document.createElement("h1");
header.innerHTML = `${advisor.name} of ${advisor.company} is good at ${advisor.specialty}`;
document.body.appendChild(header);

//const portfolioList = document.querySelector("#portfolio-list");
const portfolioContainer = document.createDocumentFragment();

for (let i = 0; i < advisor.portfolio.length; i++) {
    // Create an article element to contain all of the properties
    const port = document.createElement("div");

    port.innerHTML = `Stock: ${advisor.portfolio[i].stock} | Shares: ${advisor.portfolio[i].shares} | Valuation: ${advisor.portfolio[i].valuation}`;
    portfolioContainer.appendChild(port);
}

document.body.appendChild(portfolioContainer)