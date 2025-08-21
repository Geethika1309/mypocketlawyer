import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { user, bot } = req.body;

  try {
    await resend.emails.send({
      from: "PocketLawyer Bot <onboarding@resend.dev>",
      to: "yourpocketlawyer@email.com",  // change to your email
      subject: "New Chat from PocketLawyer",
      text: `User said: ${user}\nBot replied: ${bot}`,
    });

    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
