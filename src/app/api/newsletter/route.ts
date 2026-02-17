import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const PHONE = "0762830309";
const WHATSAPP = "https://wa.me/33762830309";
const PROMO_CODE = "STARLIMO10";

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
  <div style="max-width:480px;margin:0 auto;padding:32px 24px;">
    <h1 style="color:#FB25E2;font-size:24px;margin-bottom:24px;">Star Limousine Paris</h1>
    <p style="margin-bottom:24px;color:#ccc;">Merci pour votre inscription à la newsletter !</p>
    <p style="margin-bottom:16px;color:#ccc;">Voici votre code promo <strong style="color:#fff;">-10%</strong> à indiquer lors de votre réservation :</p>
    <div style="background:#1a1a1a;border:2px solid #FB25E2;border-radius:12px;padding:16px 24px;margin:24px 0;text-align:center;">
      <code style="font-size:28px;font-weight:bold;color:#FB25E2;letter-spacing:2px;user-select:all;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;">${PROMO_CODE}</code>
    </div>
    <p style="margin-bottom:32px;color:#ccc;font-size:14px;">Indiquez ce code lors de votre réservation par téléphone ou WhatsApp.</p>
    <p style="margin-bottom:16px;color:#999;font-size:14px;">Réservez maintenant :</p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <a href="tel:${PHONE}" style="display:block;padding:16px 24px;background:#fff;color:#0a0a0a;text-decoration:none;border-radius:12px;text-align:center;font-weight:bold;">📞 Appeler le 07 62 83 03 09</a>
      <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" style="display:block;padding:16px 24px;background:#25D366;color:#fff;text-decoration:none;border-radius:12px;text-align:center;font-weight:bold;">💬 Contacter par WhatsApp</a>
    </div>
    <p style="margin-top:32px;color:#666;font-size:12px;">Star Limousine Paris · Paris</p>
  </div>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"Star Limousine Paris" <${user}>`,
      to: email,
      subject: "Votre code promo -10% | Star Limousine Paris",
      html,
      text: `Merci pour votre inscription ! Votre code promo -10% : ${PROMO_CODE}\nIndiquez-le lors de votre réservation.\n\nTéléphone : 07 62 83 03 09\nWhatsApp : ${WHATSAPP}`,
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
