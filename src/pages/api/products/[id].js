import dbConnect from "../../../../lib/dbConnect";
import Product from "../../../../models/product";

async function handler(req, res) {
  const { method, body } = req;
  await dbConnect();

  switch (method) {
    case "PATCH":
      let products;

      if(!body.fPage) {
        products = await Product.find({ category: {$in: [body.category]} })
          .sort({"price": [body.filter]})
          .skip((body.currentPage - 1) * 12)
          .limit(12);

        return res.status(200).send(products);
      }

      if(body.filter === 1) {
        products = await Product.find({ category: {$in: [body.category]} })
          .sort({"price": 1})
          .limit(12);
      } else {
        products = await Product.find({ category: {$in: [body.category]} })
          .sort({"price": -1})
          .limit(12);
      }

      return res.status(200).send(products);  
    default:
      break;
  }
}

export default handler;