import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/user";
import withProtect from "../../../../middleware/withProtect";
import _ from 'lodash';
import Joi from 'joi';

dbConnect();

async function handler(req, res) {
  const { user, method, body } = req;

  switch (method) {
    case "GET":
      return res.status(200).send(user);
    case "PATCH":
      try {
        const { error } = joiUpdate(body);
        if(error) return res.status(400).send(error.details[0].message);
        
        const newUser = await User.findOne({ _id: user._id });
        newUser.set({...body});
        await newUser.save();

        return res.status(200).send(_.pick(newUser, ["_id", "firstName", "lastName", "address", "country", "city", "postCode", "phone", "email"]));
      } catch (error) {
        return res.status(400).send(error);
      }
    default:
      break;
  }
}

function joiUpdate(data) {
  const schema = Joi.object({
    firstName: Joi.string().trim().min(2).max(255),
    lastName: Joi.string().trim().min(2).max(255),
    address: Joi.string().trim().min(2).max(255),
    city: Joi.string().trim().min(2).max(255),
    country: Joi.string().trim().min(2).max(255),
    postCode: Joi.string().trim().min(5).max(255),
    phone: Joi.string().trim().min(5).max(255),
    email: Joi.string().email({minDomainSegments: 2}).trim().min(5).max(255)
  });
  
  return schema.validate(data);
}

export default withProtect(handler);