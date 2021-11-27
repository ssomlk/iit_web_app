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
  console.log('******** Server ********');
  console.log(formData);
  console.log('******** Server ********');

  const human = await validateHuman(formData.token);
  console.log('******** Human ********');
  console.log(human);
  console.log('******** Human ********');
  if (!human) {
    res.status(400);
    res.json({ errors: ["Please, you're not fooling us, bot."] });
    return;
  }

  res.status(201);
  res.json({ message: "Shanka!" });
};

async function validateHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  //const response = await recaptchaAxios.post(`/siteverify?secret=${secret}&response=${token}`,{}, {});
  //console.log(response.data);
  const data = await response.json();
  //return true;
  return data.success;
}