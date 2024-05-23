import { ObjectId } from "mongodb";
import { client } from "../../constants.js";

const singleCoffee = async (req, res) => {
  const coffeeCollection = client.db("coffeeDB").collection("coffee");
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await coffeeCollection.findOne(query);
  res.send(result);
}

export { singleCoffee };