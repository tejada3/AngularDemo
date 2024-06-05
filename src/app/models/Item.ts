export class Item{

    storeItem: String;
    storeName: String;
    Town: String;
    State: String;
    itemQuantity: String;
    itemAmount: String;
    Price: String
    Category: String

    constructor(StoreItem: String, StoreName: String,Town: String, State: String, itemQuantity: String, itemAmount: String, Price: String, Category: String) {
        this.storeItem = StoreItem;
        this.storeName = StoreName;
        this.Town = Town;
        this.State = State;
        this.itemQuantity = itemQuantity;
        this.itemAmount = itemAmount;
        this.Price = Price;
        this.Category = Category

    }

}
