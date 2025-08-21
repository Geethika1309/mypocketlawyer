import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev', // must be verified domain/sender
        to: 'pocketlawyerindia1950@gmail.com',             // replace with your mail
        subject: `New Chat from ${name}`,
        html: `<p><b>Email:</b> ${email}</p>
               <p><b>Message:</b> ${message}</p>`
      });

      return res.status(200).json({ success: true, data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

