import { ObjectId } from "mongodb";
import { coffeeCollection } from "../../constants.js";

const deleteCoffee = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await coffeeCollection.deleteOne(query);
  res.send(result);
};

export { deleteCoffee };
