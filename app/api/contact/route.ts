import { NextResponse } from 'next/server';

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

    // TODO: Intégration avec votre système
    // Options possibles:
    // 1. Envoyer email via SendGrid, Resend, Postmark
    // 2. Sauvegarder dans base de données (Supabase, MongoDB, etc.)
    // 3. Envoyer à CRM (HubSpot, Salesforce, etc.)
    // 4. Webhook vers n8n, Zapier, Make

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

    // Exemple: Envoyer email via service
    // await sendEmail({
    //   to: 'contact@vd-subside.ch',
    //   subject: `Nouvelle demande de subside - ${data.nom} ${data.prenom}`,
    //   html: `
    //     <h2>Nouvelle demande de subside</h2>
    //     <p><strong>Nom:</strong> ${data.nom} ${data.prenom}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Téléphone:</strong> ${data.telephone}</p>
    //     <p><strong>Ville:</strong> ${data.ville}</p>
    //     <p><strong>Situation:</strong> ${data.situation}</p>
    //     <p><strong>Revenu:</strong> ${data.revenu}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //     <p><strong>Source:</strong> ${data.source}</p>
    //   `,
    // });

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
