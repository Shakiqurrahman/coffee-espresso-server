import { coffeeCollection } from "../../constants.js";

const AllCoffee = async (req, res) => {
  const cursor = coffeeCollection.find();
  const result = await cursor.toArray();
  res.send(result);
};

export { AllCoffee };
