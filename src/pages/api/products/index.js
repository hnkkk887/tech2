import dbConnect from "../../../../lib/dbConnect";
import Product from "../../../../models/product";

async function handler(req, res) {
  const { method, body } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      // featured
      const productFeat = await Product.find({ featured: true }).limit(8);

      // new
      const productNew = await Product.find({ new: true}).sort({"saleCount": -1}).skip(8).limit(8);

      // popular
      const productPopular = await Product.find().sort({"saleCount": -1}).limit(8);

      // discount
      const productDiscount = await Product.find({ discount: { $gt: 15 } }).limit(8);

      return res.status(200).send({
        productFeat,
        productNew,
        productPopular,
        productDiscount
      });
  
    default:
      break;
  }
}

export default handler;
