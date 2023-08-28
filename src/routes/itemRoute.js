import express from "express";

import * as itemsController from "../controllers/itemController.js";

const router = express.Router();

router.get("/", itemsController.getItems);
router.post("/", itemsController.createItem);
router.put("/:id", itemsController.editItem);
router.delete("/:id", itemsController.deleteItem);

export default router;
