import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const PROMO_CODE = "A555";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE !== "false";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("SMTP non configuré (SMTP_HOST, SMTP_USER, SMTP_PASS)");
      return NextResponse.json({ error: "Configuration serveur indisponible" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#0a0a0a;color:#fff;line-height:1.6;">
  <div style="max-width:520px;margin:0 auto;padding:32px 24px;">
    <h1 style="color:#F34FC7;font-size:26px;margin-bottom:24px;">STAR LIMOUSINE PARIS</h1>
    <p style="margin:0 0 16px 0;color:#f5f5f5;font-size:16px;">Bonjour,</p>
    <p style="margin:0 0 20px 0;color:#ccc;font-size:15px;">Merci pour votre inscription à la newsletter.</p>
    <p style="margin:0 0 12px 0;color:#ccc;font-size:15px;">Voici votre code pour une remise de <strong style="color:#F34FC7;">10&nbsp;%</strong> sur votre première réservation&nbsp;:</p>
    <div style="background:#1a1a1a;border:2px solid #F34FC7;border-radius:14px;padding:18px 26px;margin:22px 0;text-align:center;">
      <code style="font-size:30px;font-weight:bold;color:#F34FC7;letter-spacing:3px;user-select:all;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;">${PROMO_CODE}</code>
    </div>
    <p style="margin:0 0 16px 0;color:#ccc;font-size:14px;">N&apos;hésitez pas à donner ce code à vos amis qui désirent louer une limousine chez&nbsp;
      <a href="https://www.star-limousine-paris.com" style="color:#F34FC7;text-decoration:none;">www.star-limousine-paris.com</a>.
    </p>
    <p style="margin:0 0 20px 0;color:#ccc;font-size:14px;">Toujours en notifiant bien dans la communication&nbsp;:
      <br />
      <a href="https://www.star-limousine-paris.com" style="color:#F34FC7;text-decoration:none;">www.star-limousine-paris.com</a>
    </p>
    <p style="margin:0 0 16px 0;color:#ccc;font-size:14px;">Merci.</p>
    <p style="margin:0 0 28px 0;color:#ccc;font-size:14px;">Très cordialement,<br />STAR LIMOUSINE PARIS</p>
  </div>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"Star Limousine Paris" <${user}>`,
      to: email,
      subject: "Votre code remise 10% | Star Limousine Paris",
      html,
      text: [
        "Bonjour",
        "",
        "Merci pour votre inscription à la newsletter.",
        "",
        "Voici votre code pour une remise de 10 % sur votre première réservation :",
        "",
        PROMO_CODE,
        "",
        "N'hésitez pas à donner ce code à vos amis qui désirent louer une limousine chez www.star-limousine-paris.com",
        "",
        "Toujours en notifiant bien dans la communication :",
        "www.star-limousine-paris.com",
        "",
        "Merci",
        "",
        "Très cordialement",
        "",
        "STAR LIMOUSINE PARIS",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter send error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
