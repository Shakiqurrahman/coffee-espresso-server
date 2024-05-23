import { coffeeCollection } from "../../constants.js";

const addCoffee = async (req, res ) => {
      const newCoffee = req.body;
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
}

export { addCoffee };
