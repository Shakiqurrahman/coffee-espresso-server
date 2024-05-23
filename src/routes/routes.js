import { Router } from "express";
import { AllCoffee } from "../controllers/coffee.controller.js";
import { singleCoffee } from "../controllers/singleCoffee.controller.js";
import { addCoffee } from "../controllers/addCoffee.controller.js";
import { updateCoffee } from "../controllers/updateCoffee.controller.js";
import { deleteCoffee } from "../controllers/deleteCoffee.controller.js"

const router = Router();

router.get("/", AllCoffee);
router.get("/:id", singleCoffee);
router.post('/', addCoffee);
router.put("/:id", updateCoffee);
router.delete("/:id", deleteCoffee);

export default router;