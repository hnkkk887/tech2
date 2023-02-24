import dbConnect from "../../../../lib/dbConnect";
import Order from "../../../../models/order";
import Joi from "joi";

async function handler(req, res) {
  const { method, body } = req;
  await dbConnect();

  switch (method) {
    case "POST":

    const { error } = joiRegister(body);
      if(error) return res.status(400).send(error.details[0].message);

      const order = new Order(body);
      await order.save();

      return res.status(200).send("ok");
    default:
      break;
  }
}

function joiRegister(data) {
  const schema = Joi.object({
    firstName: Joi.string().trim().min(2).max(255).required(),
    lastName: Joi.string().trim().min(2).max(255).required(),
    address: Joi.string().trim().min(2).max(255).required(),
    address2: Joi.string().trim().min(2).max(255),
    type: Joi.string().trim().min(2).max(255),
    companyName: Joi.string().trim().min(2).max(255),
    city: Joi.string().trim().min(2).max(255).required(),
    country: Joi.string().trim().min(2).max(255).required(),
    postCode: Joi.string().trim().min(5).max(255).required(),
    notes: Joi.string().trim().min(2).max(555),
    creditCardNumber: Joi.string().trim().min(2).max(25),
    cvv: Joi.string().trim().min(2).max(25),
    exDate: Joi.string().trim().min(2).max(25),
    phone: Joi.string().trim().min(5).max(255).required(),
    email: Joi.string().email({minDomainSegments: 2}).trim().min(5).max(255).required(),
    totalPrice: Joi.number(),
    sign: Joi.string(),
    cartItems: Joi.array()
  });
  
  return schema.validate(data);
}

export default handler;