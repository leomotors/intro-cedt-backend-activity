import { DataError } from "node-json-db";
import * as itemsModel from "../models/itemsModel.js";

/** @type {import('express').RequestHandler} */
export const createItem = async (req, res) => {
  const { body } = req;

  if (!itemsModel.validateBody(body)) {
    res.status(400).json({ message: "Bad Body Request" });
    return;
  }

  await itemsModel.createItem(body);

  res.status(200).json({ message: "OK" });
};

/** @type {import('express').RequestHandler} */
export const getItems = async (req, res) => {
  const items = await itemsModel.getItems();

  res.status(200).json(items);
};

/** @type {import('express').RequestHandler} */
export const editItem = async (req, res) => {
  const id = Number(req.params.id);
  const { body } = req;

  if (isNaN(id) || !itemsModel.validateBody(body)) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }

  try {
    await itemsModel.editItem(id, body);
    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err instanceof DataError) {
      res.status(404).json({ message: "Item Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

/** @type {import('express').RequestHandler} */
export const deleteItem = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: "Bad ID Request" });
  }

  try {
    await itemsModel.deleteItem(id);
    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err instanceof DataError) {
      res.status(404).json({ message: "Item Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
