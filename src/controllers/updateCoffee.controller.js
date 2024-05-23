import { ObjectId } from "mongodb";
import { coffeeCollection } from "../../constants.js";

const updateCoffee = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updatedCoffee = req.body;
    const coffee = {
      $set: {
        name: updatedCoffee.name,
        price: updatedCoffee.price,
        supplier: updatedCoffee.supplier,
        taste: updatedCoffee.taste,
        category: updatedCoffee.category,
        details: updatedCoffee.details,
        photo: updatedCoffee.photo,
      },
    };
    const result = await coffeeCollection.updateOne(filter, coffee, options);
    res.send(result);
  };

  export { updateCoffee };