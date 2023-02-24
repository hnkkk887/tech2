import dbConnect from "../../../../lib/dbConnect";
import Product from "../../../../models/product";
import Review from "../../../../models/review";

export default async function handler(req, res) {
  const { method, body, query } = req;
  await dbConnect();
  
  switch (method) {
    case 'GET':
      try {
        let related;

        let product = await Product.findOne({ _id: query.id });
        if(!product) return res.status(401).send("Product not found");
        
        related = await Product.find({ category: product.category[0] })          
          .sort({"saleCount": 1})
          .limit(8);
        
        let reviews = await Review.find({ productID: product._id });

        return res.status(200).send({ ...product, related, reviews });
      } catch (error) {
        return res.status(400).send("Product not found");
      }
    default:
      break;
  }

}