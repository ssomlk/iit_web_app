import { NextApiRequest, NextApiResponse } from "next";
import { recaptchaAxios } from "../../axios/axiosBackend";

interface FormData {
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    contactSubject: string;
    contactMessage: string;
    token: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const formData: FormData = req.body;
  //const human = await validateHuman(formData.token);
  const human = true;
  if (!human) {
    res.status(400);
    return res.json({ errors: ["Please, you're not fooling us, bot."] });
  }

  res.status(201);
  return res.json({ message: "Shanka!" });
};

async function validateHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await recaptchaAxios.post(`/siteverify?secret=${secret}&response=${token}`,{}, {});
  const success = response.data['success'];
  return success;
}