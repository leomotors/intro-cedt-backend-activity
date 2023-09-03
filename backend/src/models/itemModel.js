const itemSchema = {
  item: "string",
  name: "string",
  price: "number",
};

class Item {
  /**
   * @param {string} item
   * @param {string} name
   * @param {number} price
   */
  constructor(item, name, price) {
    this.item = item;
    this.name = name;
    this.price = price;
  }
}

/**
 * @param {object} obj
 * @returns Item
 */
function itemFromObject(obj) {
  const errors = [];
  for (const field in itemSchema) {
    if (!(field in obj)) {
      errors.push(`Expected key '${field}'`);
    } else {
      if (itemSchema[field] == "number") {
        try {
          obj[field] = parseFloat(obj[field]);
        } catch (e) {
          errors.push(
            `Expected value of '${field}' to be a number, found ${typeof obj[
              field
            ]}`,
          );
        }
      } else if (typeof obj[field] != itemSchema[field]) {
        errors.push(
          `Expected value of '${field}' to be ${
            itemSchema[field]
          }, found ${typeof obj[field]}`,
        );
      }
    }
  }
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
  return new Item(obj.item, obj.name, obj.price);
}

export { Item, itemFromObject };
