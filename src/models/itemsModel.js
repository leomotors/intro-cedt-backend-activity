import { db } from "./db.js";

/**
 * @typedef {Object} Item
 * @property {string} item
 * @property {string} name
 * @property {number} price
 */

/**
 * Validate if body is a valid item
 *
 * @returns {body is Item}
 */
export function validateBody(body) {
  const { item, name, price } = body;

  if (
    !item ||
    !name ||
    !price ||
    typeof item !== "string" ||
    typeof name !== "string" ||
    isNaN(Number(price))
  ) {
    return false;
  }

  return true;
}

/**
 * @returns {Promise<Item[]>}
 */
export async function getItems() {
  return await db.getData("/items");
}

/**
 * @param {Item} body
 */
export async function createItem(body) {
  await db.push("/items[]", body);
}

/**
 * @param {number} id
 * @param {Item} body
 */
export async function editItem(id, body) {
  await db.push(`/items[${id}]`, body);
}

/**
 * @param {number} id
 */
export async function deleteItem(id) {
  await db.delete(`/items[${id}]`);
}
