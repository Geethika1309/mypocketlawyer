export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { user, bot } = req.body || {};
    if (!user || !bot) {
      return res.status(400).json({ message: "Missing user/bot fields" });
    }

    // Build email body (text)
    const text = `New PocketLawyer chat:

User:
${user}

Bot:
${bot}
`;

    // Send via Resend REST API (no dependency needed)
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "PocketLawyer Bot <onboarding@resend.dev>", // ok for testing
        to: "pocketlawyerindia1950@gmail.com",            // ← your inbox
        subject: "New Chat from PocketLawyer",
        text
      })
    });

    if (!r.ok) {
      const err = await r.text();
      return res.status(500).json({ error: err || "Failed to send email" });
    }

    return res.status(200).json({ message: "Email sent" });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Server error" });
  }
}
