import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialiser Resend seulement si la clé API est présente
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validation basique
    if (!data.nom || !data.prenom || !data.email || !data.telephone) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Envoyer l'email de notification (si Resend est configuré)
    if (resend) {
      try {
        await resend.emails.send({
        from: 'VD-Subside <noreply@vd-subside.ch>',
        to: ['info@vd-subside.ch'],
        subject: `🆕 Nouvelle demande de subside - ${data.nom} ${data.prenom}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #16a34a 0%, #059669 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .info-row { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #16a34a; }
                .label { font-weight: bold; color: #16a34a; display: inline-block; width: 140px; }
                .value { color: #333; }
                .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
                .urgent { background: #fef3c7; border-left-color: #f59e0b; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">🆕 Nouvelle demande de subside</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Reçue le ${new Date().toLocaleString('fr-CH')}</p>
                </div>

                <div class="content">
                  <div class="info-row urgent">
                    <span class="label">⚡ À contacter :</span>
                    <span class="value">Dans les 24 heures</span>
                  </div>

                  <div class="info-row">
                    <span class="label">👤 Nom :</span>
                    <span class="value">${data.nom} ${data.prenom}</span>
                  </div>

                  <div class="info-row">
                    <span class="label">📧 Email :</span>
                    <span class="value"><a href="mailto:${data.email}" style="color: #16a34a;">${data.email}</a></span>
                  </div>

                  <div class="info-row">
                    <span class="label">📱 Téléphone :</span>
                    <span class="value"><a href="tel:${data.telephone}" style="color: #16a34a;">${data.telephone}</a></span>
                  </div>

                  ${data.ville ? `
                  <div class="info-row">
                    <span class="label">📍 Ville :</span>
                    <span class="value">${data.ville}</span>
                  </div>
                  ` : ''}

                  ${data.situation ? `
                  <div class="info-row">
                    <span class="label">👥 Situation :</span>
                    <span class="value">${data.situation}</span>
                  </div>
                  ` : ''}

                  ${data.revenu ? `
                  <div class="info-row">
                    <span class="label">💰 Revenu :</span>
                    <span class="value">${data.revenu}</span>
                  </div>
                  ` : ''}

                  ${data.dateNaissance ? `
                  <div class="info-row">
                    <span class="label">🎂 Date de naissance :</span>
                    <span class="value">${data.dateNaissance}</span>
                  </div>
                  ` : ''}

                  ${data.optimiserPrime ? `
                  <div class="info-row">
                    <span class="label">💡 Optimiser prime :</span>
                    <span class="value">${data.optimiserPrime === 'oui' ? '✅ Oui, souhaite optimiser sa prime' : '❌ Non'}</span>
                  </div>
                  ` : ''}

                  ${data.message ? `
                  <div class="info-row">
                    <span class="label">💬 Message :</span>
                    <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${data.message}</div>
                  </div>
                  ` : ''}

                  <div class="info-row">
                    <span class="label">🔗 Source :</span>
                    <span class="value">${data.source === 'campagne-mail' ? '📧 Campagne email' : `<a href="https://vd-subside.ch${data.source}" style="color: #16a34a;">${data.source}</a>`}</span>
                  </div>

                  <div class="footer">
                    <p>Cette demande a été reçue via le formulaire de contact de vd-subside.ch</p>
                    <p style="margin-top: 10px;">
                      <a href="https://vd-subside.ch" style="color: #16a34a; text-decoration: none;">🌐 Accéder au site</a>
                    </p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      });

        console.log('✅ Email envoyé avec succès pour:', data.email);
      } catch (emailError) {
        console.error('❌ Erreur envoi email:', emailError);
        // On continue même si l'email échoue pour ne pas bloquer l'utilisateur
      }
    } else {
      console.warn('⚠️ Resend non configuré - Email non envoyé. Configurez RESEND_API_KEY dans les variables d\'environnement.');
    }

    // Log pour backup
    console.log('📨 Nouvelle demande de subside reçue:', {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone: data.telephone,
      ville: data.ville,
      situation: data.situation,
      revenu: data.revenu,
      message: data.message,
      source: data.source,
      timestamp: new Date().toISOString(),
    });

    // Réponse de succès
    return NextResponse.json(
      {
        success: true,
        message: 'Demande reçue avec succès. Nous vous contacterons sous 24h.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}

// Pour les requêtes GET (optionnel)
export async function GET() {
  return NextResponse.json(
    { message: 'API de contact VD-Subside. Utilisez POST pour soumettre une demande.' },
    { status: 200 }
  );
}
