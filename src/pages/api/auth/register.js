import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/user";
import Joi from "joi";
import cookie from "cookie";

export default async function handler(req, res) {
  const { method, body } = req;
  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { error } = joiRegister(body);
        if(error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: body.email });
        if(user) return res.status(400).send("Invalid email or password");

        user = new User(body);
        await user.save();
        const token = user.setToken();
        
        res.setHeader('Set-Cookie', cookie.serialize("e-electro", token, {
          httpOnly: true,
          secure: process.env.NEXT_PUBLIC_NODE_ENV === "DEV" ? false : true,
          maxAge: '54000000',
          sameSite: 'strict',
          path: '/'
        }));

        return res.status(201).send(_.pick(user, ["_id", "firstName", "lastName", "address", "country", "city", "postCode", "phone", "email"]));
      } catch (error) {
        return res.status(400).send("Invalid email or password");
      }
    default:
      break;
  }
}

function joiRegister(data) {
  const schema = Joi.object({
    firstName: Joi.string().trim().min(2).max(255).required(),
    lastName: Joi.string().trim().min(2).max(255).required(),
    address: Joi.string().trim().min(2).max(255).required(),
    city: Joi.string().trim().min(2).max(255).required(),
    country: Joi.string().trim().min(2).max(255).required(),
    postCode: Joi.string().trim().min(5).max(255).required(),
    phone: Joi.string().trim().min(5).max(255).required(),
    email: Joi.string().email({minDomainSegments: 2}).trim().min(5).max(255).required(),
    password: Joi.string().trim().min(5).max(255).required()
  });
  
  return schema.validate(data);
}