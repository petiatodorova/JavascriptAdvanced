class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space < (this.wines.length + 1)) {
            throw new Error("Not enough space in the cellar.");
        }

        let newWine = { wineName, wineType, price, paid: false };
        this.wines.push(newWine);

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let wineIsInTheArr = false;

        if (!this.wines.find((p) => p[wineName] === wineName)) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        for (const el of this.wines) {
            if (el.wines[wineName] === wineName && el.paid) {
                throw new Error(`${wineName} has already been paid.`);
            } else {
                el.paid = true;
                el.bill += price;
                return `You bought a ${wineName} for a ${price}$.`
            }
        }
    }

    openBottle(wineName) {
        if (!this.wines[wineName]) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        if (this.wines[wineName]){
            if (!this.wines[wineName].paid){
                throw new Error(`${wineName} need to be paid before open the bottle.`);
            } else {
                this.wines.remove(this.wines[wineName]);
                return `You drank a bottle of ${wineName}.`
            }
        }

    }



}

const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


