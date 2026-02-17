/**
 * 30 pages longue traîne SEO - Données vérifiées depuis les sources officielles
 * Sources:
 * - https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie
 * - https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie/conditions-doctroi
 * - https://www.vd.ch/fileadmin/user_upload/themes/social/Prestations__assurance_et_soutien/Assurance_maladie/Subside/Arrêté_subsides_2026.pdf
 * - https://www.vd.ch/prestation/demander-des-subsides-a-lassurance-maladie
 * - https://www.caisseavsvaud.ch/fr/Assurances/LAMal-Subside-a-l-assurance-maladie
 */

export interface Guide {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  icon: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    liste?: string[];
  }[];
  faq: { question: string; reponse: string }[];
  cta: string;
  relatedSlugs: string[];
}

export const guides: Guide[] = [
  // ─────────────────────────────────────────────
  // BLOC 1 : DÉMARCHES & PROCESSUS (6 pages)
  // ─────────────────────────────────────────────
  {
    slug: 'comment-faire-demande-subside-vaud',
    metaTitle: 'Comment Faire une Demande de Subside Vaud 2026 | Guide Étape par Étape',
    metaDescription: 'Guide complet pour faire votre demande de subside assurance maladie dans le Canton de Vaud en 2026. Formulaire en ligne, documents, délais OVAM.',
    h1: 'Comment Faire une Demande de Subside dans le Canton de Vaud en 2026',
    icon: '📝',
    intro: 'Dans le Canton de Vaud, la demande de subside assurance maladie n\'est pas automatique. Vous devez déposer un dossier auprès de l\'OVAM, soit en ligne via prestations.vd.ch, soit en vous rendant à votre agence d\'assurances sociales régionale. Ce guide vous explique chaque étape.',
    sections: [
      {
        title: 'La demande en ligne sur prestations.vd.ch',
        content: 'Depuis 2020, l\'État de Vaud permet de déposer sa demande de subside entièrement en ligne. La plateforme prestations.vd.ch est accessible 24h/24 et permet un traitement plus rapide de votre dossier.',
        liste: [
          'Connectez-vous sur **prestations.vd.ch** avec votre identifiant cantonal',
          'Munissez-vous de votre **dernière décision de taxation fiscale**',
          'Scannez votre **carte d\'identité ou permis de séjour** (et celle de votre concubin(e) si ménage commun)',
          'Si vous êtes en formation : scannez votre **attestation de formation**',
          'Remplissez le formulaire et soumettez votre demande',
        ],
      },
      {
        title: 'La demande en agence d\'assurances sociales',
        content: 'Vous pouvez aussi déposer votre demande en personne à l\'agence d\'assurances sociales de votre région de domicile. C\'est recommandé si votre situation est complexe ou si vous avez besoin d\'aide pour remplir le formulaire.',
        liste: [
          'Trouvez votre agence sur le site **vd.ch** selon votre commune de résidence',
          'Apportez votre **police d\'assurance-maladie** pour tous les membres du ménage',
          'Apportez vos **pièces d\'identité** (carte d\'identité, permis de séjour)',
          'Préparez vos **justificatifs de revenus et fortune** si votre situation a changé',
          'Un conseiller vous aidera à remplir le formulaire sur place',
        ],
      },
      {
        title: 'Délai de traitement et prise d\'effet',
        content: 'Le droit au subside prend naissance le **premier jour du deuxième mois** qui suit celui du dépôt de la demande. Exemple concret : si vous déposez votre demande le 20 mars, votre subside sera effectif dès le 1er mai. Exception : les bénéficiaires du revenu d\'insertion (RI), des prestations complémentaires AVS/AI ou de la rente-pont cantonale bénéficient d\'un droit immédiat.',
      },
      {
        title: 'Attention aux services payants non officiels',
        content: 'L\'État de Vaud rappelle que la procédure de demande de subside est **totalement gratuite**. Les entreprises proposant ce service contre rémunération n\'ont signé aucun partenariat avec l\'administration cantonale. Notre service VD-Subside vous accompagne gratuitement dans vos démarches.',
      },
    ],
    faq: [
      {
        question: 'Combien de temps prend le traitement de ma demande ?',
        reponse: 'L\'OVAM traite les demandes dans un délai de quelques semaines. Le subside prend effet le 1er jour du 2e mois suivant le dépôt. En période de forte demande (début d\'année), les délais peuvent être plus longs.',
      },
      {
        question: 'Puis-je faire ma demande à n\'importe quel moment de l\'année ?',
        reponse: 'Oui, vous pouvez déposer votre demande à tout moment. Toutefois, plus vous déposez tôt, plus tôt vous bénéficiez du subside. Le subside n\'est pas rétroactif au-delà du 2e mois suivant la demande.',
      },
      {
        question: 'Que faire si ma demande est refusée ?',
        reponse: 'Vous recevrez une décision motivée par courrier. Contactez l\'OVAM au 021 557 45 45 pour comprendre le motif du refus. Vous pouvez ensuite déposer une nouvelle demande avec un dossier corrigé ou actualisé.',
      },
    ],
    cta: 'Besoin d\'aide pour votre demande ? Contactez-nous',
    relatedSlugs: ['documents-necessaires-subside-vaud', 'delai-subside-vaud-combien-temps'],
  },
  {
    slug: 'documents-necessaires-subside-vaud',
    metaTitle: 'Documents Nécessaires Subside Vaud 2026 | Liste Complète',
    metaDescription: 'Liste complète des documents nécessaires pour votre demande de subside assurance maladie dans le Canton de Vaud. Taxation, pièce d\'identité, police.',
    h1: 'Quels Documents Fournir pour une Demande de Subside dans le Canton de Vaud ?',
    icon: '📋',
    intro: 'Pour déposer une demande de subside auprès de l\'OVAM, vous devez fournir certains documents obligatoires. La liste varie selon que vous déposez en ligne ou en agence, et selon votre situation personnelle (étudiant, famille, indépendant, etc.).',
    sections: [
      {
        title: 'Documents obligatoires pour toute demande',
        content: 'Quel que soit votre profil, ces documents sont systématiquement demandés par l\'OVAM :',
        liste: [
          '**Dernière décision de taxation fiscale** définitive (document principal pour le calcul du RDU)',
          '**Carte d\'identité ou permis de séjour** valide (et celle du concubin(e) si ménage commun)',
          '**Police d\'assurance-maladie** pour chaque membre du ménage concerné',
        ],
      },
      {
        title: 'Documents supplémentaires selon votre situation',
        content: 'En fonction de votre profil, des documents complémentaires peuvent être exigés :',
        liste: [
          '**Étudiants / Apprentis** : Attestation d\'études ou contrat d\'apprentissage',
          '**Chômeurs** : Attestation ORP et décomptes d\'indemnités de chômage',
          '**Indépendants** : Attestation AVS indépendant, comptes d\'exploitation',
          '**Changement de situation financière (>20%)** : Justificatifs de revenus actuels (fiches de salaire, décision de rente, extraits bancaires)',
          '**Propriétaires** : Attestation de valeur locative pour la résidence principale',
        ],
      },
      {
        title: 'Comment scanner vos documents pour la demande en ligne',
        content: 'Pour la demande en ligne sur prestations.vd.ch, vos documents doivent être scannés au format PDF ou image (JPG, PNG). Utilisez une application de scan sur votre smartphone si vous n\'avez pas de scanner. Assurez-vous que tous les textes sont lisibles et que le document est complet.',
      },
    ],
    faq: [
      {
        question: 'Ma taxation fiscale n\'est pas encore disponible, que faire ?',
        reponse: 'L\'OVAM utilise la dernière taxation définitive en force au 16 octobre de l\'année précédente. Si vous n\'en avez pas encore, vous pouvez déposer votre demande avec vos justificatifs de revenus actuels et demander une actualisation financière.',
      },
      {
        question: 'Dois-je fournir les documents pour mes enfants aussi ?',
        reponse: 'Oui, pour demander un subside pour vos enfants, fournissez leur police d\'assurance-maladie. Si un enfant majeur est en formation, une attestation d\'études est requise.',
      },
    ],
    cta: 'Nous vous aidons à préparer votre dossier complet',
    relatedSlugs: ['comment-faire-demande-subside-vaud', 'actualisation-financiere-subside-vaud'],
  },
  {
    slug: 'delai-subside-vaud-combien-temps',
    metaTitle: 'Délai Subside Vaud : Combien de Temps pour le Recevoir ? | 2026',
    metaDescription: 'Combien de temps faut-il pour recevoir son subside assurance maladie dans le Canton de Vaud ? Délais de traitement OVAM, prise d\'effet et exceptions.',
    h1: 'Délai de Subside dans le Canton de Vaud : Combien de Temps Faut-il ?',
    icon: '⏱️',
    intro: 'Le délai entre le dépôt de votre demande et le premier versement de subside est une question fréquente. Dans le Canton de Vaud, la règle est claire : le subside prend effet le 1er jour du 2e mois suivant votre demande, avec quelques exceptions.',
    sections: [
      {
        title: 'Règle générale : le délai de carence de 2 mois',
        content: 'Depuis 2026, un **délai de carence de 2 mois** s\'applique pour les nouvelles demandes de subside. Le droit prend naissance le premier jour du deuxième mois qui suit le dépôt. Exemple : demande déposée le 15 janvier → subside effectif dès le 1er mars. Cette mesure représente une économie d\'environ 3 millions de francs pour le canton.',
      },
      {
        title: 'Exceptions au délai de carence',
        content: 'Certaines catégories de personnes bénéficient d\'un droit immédiat, sans délai de carence :',
        liste: [
          'Bénéficiaires du **revenu d\'insertion (RI)** : droit immédiat avec la prestation RI',
          'Bénéficiaires de **prestations complémentaires AVS/AI** : droit simultané',
          'Bénéficiaires de la **rente-pont cantonale** : droit simultané',
        ],
      },
      {
        title: 'Renouvellement automatique : aucun délai',
        content: 'Si vous bénéficiez déjà d\'un subside, le renouvellement est **automatique** chaque année en octobre, basé sur votre dernière taxation fiscale entrée en force au 16 octobre. Vous êtes averti début novembre du montant pour l\'année suivante. Aucune démarche nécessaire sauf en cas de changement de situation.',
      },
      {
        title: 'Versement du subside',
        content: 'Le subside est versé directement à votre assureur-maladie, pas sur votre compte bancaire. Votre assureur déduit le montant du subside de votre prime mensuelle, et vous ne payez que le solde restant.',
      },
    ],
    faq: [
      {
        question: 'Puis-je obtenir un subside rétroactif ?',
        reponse: 'Le subside n\'est pas rétroactif au-delà de la règle du 2e mois. Si vous étiez éligible mais n\'avez pas fait de demande, vous ne pouvez pas récupérer les mois passés. D\'où l\'importance de déposer votre demande rapidement.',
      },
      {
        question: 'Mon subside a été supprimé par erreur, que faire ?',
        reponse: 'Contactez immédiatement l\'OVAM au 021 557 47 47 ou votre agence d\'assurances sociales. Si la suppression est une erreur, le subside sera rétabli rétroactivement.',
      },
    ],
    cta: 'Ne perdez pas de temps, faites votre demande maintenant',
    relatedSlugs: ['comment-faire-demande-subside-vaud', 'renouvellement-subside-vaud'],
  },
  {
    slug: 'renouvellement-subside-vaud',
    metaTitle: 'Renouvellement Subside Vaud 2026 | Automatique ou à Refaire ?',
    metaDescription: 'Le renouvellement du subside assurance maladie dans le Canton de Vaud est-il automatique ? Dates, procédure et cas nécessitant une nouvelle demande.',
    h1: 'Renouvellement du Subside Assurance Maladie dans le Canton de Vaud',
    icon: '🔄',
    intro: 'Bonne nouvelle : dans le Canton de Vaud, le renouvellement du subside est automatique si votre situation n\'a pas changé. L\'OVAM recalcule vos droits chaque année en octobre sur la base de votre dernière taxation fiscale.',
    sections: [
      {
        title: 'Le renouvellement automatique en octobre',
        content: 'Chaque année, l\'OVAM détermine le nouveau droit aux subsides de ses résidents en utilisant la dernière décision de taxation en vigueur au **16 octobre**. Les bénéficiaires actuels sont avertis **début novembre** du montant de leur subside pour l\'année suivante (dès le 1er janvier).',
      },
      {
        title: 'Quand faut-il refaire une demande ?',
        content: 'Vous devez déposer une nouvelle demande uniquement dans ces cas :',
        liste: [
          'Vous n\'avez **jamais bénéficié** de subside auparavant',
          'Votre subside a été **supprimé** l\'année précédente (revenus trop élevés)',
          'Vous avez **déménagé dans le Canton de Vaud** récemment',
          'Vous avez fait l\'objet d\'une **décision de refus** et votre situation a changé',
        ],
      },
      {
        title: 'Changements à annoncer obligatoirement',
        content: 'Même avec un renouvellement automatique, vous devez annoncer à l\'OVAM tout changement significatif :',
        liste: [
          'Changement de **situation familiale** (mariage, divorce, naissance)',
          '**Variation de revenus** de plus de 20% (perte d\'emploi, nouveau travail, héritage)',
          '**Déménagement** hors du Canton de Vaud',
          'Passage en **prestations complémentaires** AVS/AI ou revenu d\'insertion',
        ],
      },
    ],
    faq: [
      {
        question: 'Mon subside a baissé cette année, pourquoi ?',
        reponse: 'Le montant du subside est recalculé chaque année selon votre dernière taxation. Si vos revenus ou votre fortune ont augmenté, votre subside diminue. Les barèmes cantonaux peuvent aussi évoluer.',
      },
      {
        question: 'Je n\'ai rien reçu en novembre, est-ce normal ?',
        reponse: 'Si vous étiez bénéficiaire et n\'avez pas reçu de notification, contactez l\'OVAM au 021 557 47 47. Il est possible que votre taxation n\'ait pas été traitée à temps ou qu\'un changement ait affecté vos droits.',
      },
    ],
    cta: 'Vérifiez vos droits au subside pour 2026',
    relatedSlugs: ['delai-subside-vaud-combien-temps', 'actualisation-financiere-subside-vaud'],
  },
  {
    slug: 'actualisation-financiere-subside-vaud',
    metaTitle: 'Actualisation Financière Subside Vaud | Baisse de Revenus >20%',
    metaDescription: 'Vos revenus ont baissé de plus de 20% ? Demandez une actualisation financière de votre subside assurance maladie dans le Canton de Vaud.',
    h1: 'Actualisation Financière du Subside : Que Faire en Cas de Baisse de Revenus',
    icon: '📉',
    intro: 'Si vos revenus ont diminué de plus de 20% par rapport à votre dernière taxation fiscale (perte d\'emploi, divorce, baisse d\'activité), vous pouvez demander une actualisation financière sans attendre le prochain renouvellement automatique en octobre.',
    sections: [
      {
        title: 'Quand demander une actualisation ?',
        content: 'L\'actualisation est possible dès que votre situation financière a changé de manière significative :',
        liste: [
          '**Perte d\'emploi** et passage au chômage',
          '**Divorce ou séparation** entraînant une baisse du revenu du ménage',
          '**Passage à la retraite** (rente inférieure au salaire)',
          '**Réduction du temps de travail** (ex: passage de 100% à 50%)',
          '**Baisse d\'activité indépendante** significative',
          '**Invalidité** ou maladie longue durée',
        ],
      },
      {
        title: 'Comment procéder',
        content: 'Annoncez votre changement de situation à l\'OVAM en fournissant les justificatifs de vos nouveaux revenus (décomptes chômage, attestation de salaire réduit, certificat de rente, etc.). L\'OVAM recalculera votre subside sur la base de votre situation actuelle. Le nouveau montant prend effet le 1er du 2e mois suivant votre annonce.',
      },
      {
        title: 'Attention à l\'obligation d\'annoncer les hausses aussi',
        content: 'L\'obligation fonctionne dans les deux sens : si vos revenus **augmentent** de plus de 20%, vous devez également l\'annoncer. Un manquement peut entraîner une demande de remboursement des subsides perçus en trop.',
      },
    ],
    faq: [
      {
        question: 'Que signifie exactement "baisse de plus de 20%" ?',
        reponse: 'C\'est une baisse de 20% ou plus de votre revenu annuel brut par rapport au montant figurant sur votre dernière taxation fiscale. Par exemple, si votre revenu taxé était de 60\'000 CHF et qu\'il passe sous les 48\'000 CHF, vous pouvez demander l\'actualisation.',
      },
      {
        question: 'L\'actualisation est-elle rétroactive ?',
        reponse: 'Non, le nouveau subside prend effet le 1er jour du 2e mois suivant l\'annonce de changement. D\'où l\'importance d\'annoncer rapidement tout changement significatif.',
      },
    ],
    cta: 'Vos revenus ont baissé ? Contactez-nous pour une actualisation',
    relatedSlugs: ['renouvellement-subside-vaud', 'subside-vaud-perte-emploi'],
  },
  {
    slug: 'recours-refus-subside-vaud',
    metaTitle: 'Subside Vaud Refusé : Que Faire ? Solutions et Étapes Pratiques',
    metaDescription: 'Votre demande de subside assurance maladie dans le Canton de Vaud a été refusée ? Découvrez les motifs de refus, les solutions concrètes et comment refaire une demande.',
    h1: 'Demande de Subside Refusée : Que Faire ? Les Solutions Concrètes',
    icon: '🔄',
    intro: 'Si votre demande de subside a été refusée par l\'OVAM, ne paniquez pas. Il existe plusieurs solutions pratiques pour obtenir votre subside. Comprenez d\'abord les motifs de refus, puis suivez nos conseils pour régulariser votre situation.',
    sections: [
      {
        title: 'Motifs fréquents de refus',
        content: 'L\'OVAM peut refuser votre demande dans plusieurs cas. Comprendre le motif est la première étape pour trouver une solution :',
        liste: [
          '**Revenu déterminant trop élevé** : votre RDU dépasse les plafonds d\'éligibilité. Vérifiez si tous vos frais déductibles ont bien été pris en compte',
          '**Fortune excédentaire** : votre fortune dépasse les seuils (59\'000 CHF seul, 118\'000 CHF couple). Certains éléments peuvent être déduits',
          '**Non-résidence** : vous n\'habitez pas dans le Canton de Vaud au moment de la demande',
          '**Capacité de gain non exploitée** : l\'OVAM estime que vous ne mettez pas toute votre capacité de gain à contribution',
          '**Cession de biens** : vous avez cédé des biens sans contrepartie équivalente',
          '**Dossier incomplet** : il manque des documents ou justificatifs dans votre demande',
        ],
      },
      {
        title: 'Contacter l\'OVAM pour comprendre le refus',
        content: 'La première chose à faire est de **contacter l\'OVAM directement** pour bien comprendre le motif exact du refus. L\'OVAM est joignable par téléphone au **021 557 45 45** du lundi au vendredi de 8h à 12h et de 13h à 16h30. Les conseillers peuvent vous expliquer clairement pourquoi votre demande a été refusée et vous indiquer les pièces manquantes ou les erreurs à corriger. Cette étape est gratuite et souvent suffisante pour débloquer la situation.',
      },
      {
        title: 'Déposer une nouvelle demande corrigée',
        content: 'Si votre situation a évolué ou si le refus est lié à un dossier incomplet, la solution la plus simple est de **déposer une nouvelle demande**. Vous pouvez refaire une demande à tout moment avec des documents actualisés. Assurez-vous d\'inclure tous les justificatifs nécessaires : dernière taxation fiscale, attestation de salaire actuelle, preuves de charges déductibles (pension alimentaire, frais de garde, etc.). Si votre revenu a baissé récemment (perte d\'emploi, réduction d\'activité), joignez une **demande d\'actualisation financière** pour que l\'OVAM prenne en compte votre revenu actuel plutôt que celui de la dernière taxation.',
      },
      {
        title: 'Se faire accompagner gratuitement',
        content: 'Vous n\'êtes pas seul dans cette démarche. Plusieurs organismes dans le Canton de Vaud proposent un **accompagnement gratuit** pour vous aider à constituer un dossier solide :',
        liste: [
          '**Centre Social Protestant (CSP)** : accompagnement social gratuit, aide à remplir les formulaires',
          '**Caritas Vaud** : permanences sociales gratuites dans plusieurs villes du canton',
          '**OVAM directement** : les conseillers peuvent vous guider par téléphone ou sur rendez-vous',
          '**Communes et services sociaux** : votre commune peut vous orienter et vous aider dans vos démarches',
          '**VD-Subside** : notre équipe vous accompagne gratuitement pour refaire votre demande avec un dossier complet',
        ],
      },
      {
        title: 'Vérifier et optimiser votre dossier',
        content: 'Pour maximiser vos chances lors d\'une nouvelle demande, vérifiez ces points importants :',
        liste: [
          '**Déductions oubliées** : pension alimentaire versée, frais de garde, cotisations AVS/AI, frais de formation',
          '**Revenus actualisés** : si vos revenus ont baissé depuis la dernière taxation, demandez une actualisation',
          '**Situation familiale** : un changement (naissance, séparation, mariage) peut modifier votre éligibilité',
          '**Documents complets** : assurez-vous que tous les justificatifs demandés sont bien joints au dossier',
          '**Adresse à jour** : vérifiez que votre domicile est bien enregistré dans le Canton de Vaud',
        ],
      },
    ],
    faq: [
      {
        question: 'Puis-je refaire une demande après un refus ?',
        reponse: 'Oui, absolument. Vous pouvez déposer une nouvelle demande de subside à tout moment, notamment si votre situation financière ou familiale a changé. Assurez-vous de fournir des documents à jour et un dossier complet.',
      },
      {
        question: 'Combien de temps faut-il attendre pour refaire une demande ?',
        reponse: 'Il n\'y a pas de délai d\'attente obligatoire. Vous pouvez refaire une demande dès que vous avez réuni les documents nécessaires ou que votre situation a évolué (baisse de revenu, changement familial, etc.).',
      },
      {
        question: 'Comment savoir exactement pourquoi ma demande a été refusée ?',
        reponse: 'Le courrier de refus de l\'OVAM contient le motif précis. Si ce n\'est pas clair, contactez l\'OVAM au 021 557 45 45 pour obtenir des explications détaillées. C\'est gratuit et les conseillers sont là pour vous aider.',
      },
      {
        question: 'L\'accompagnement pour refaire ma demande est-il vraiment gratuit ?',
        reponse: 'Oui, que ce soit via notre service, le Centre Social Protestant, Caritas Vaud ou directement l\'OVAM, l\'accompagnement est entièrement gratuit. Vous n\'avez rien à payer.',
      },
    ],
    cta: 'Votre demande a été refusée ? Nous vous aidons gratuitement à refaire votre dossier',
    relatedSlugs: ['comment-faire-demande-subside-vaud', 'actualisation-financiere-subside-vaud', 'documents-necessaires-subside-vaud'],
  },

  // ─────────────────────────────────────────────
  // BLOC 2 : CALCUL & MONTANTS (6 pages)
  // ─────────────────────────────────────────────
  {
    slug: 'calculer-subside-vaud-rdu',
    metaTitle: 'Calculer son Subside Vaud 2026 | RDU Revenu Déterminant Unifié',
    metaDescription: 'Comment calculer votre subside assurance maladie à Vaud ? Comprendre le RDU (Revenu Déterminant Unifié), les déductions et les plafonds 2026.',
    h1: 'Comment Calculer son Subside dans le Canton de Vaud : le RDU Expliqué',
    icon: '🧮',
    intro: 'Le montant de votre subside dépend de votre Revenu Déterminant Unifié (RDU). Ce calcul prend en compte vos revenus, votre fortune et votre situation familiale avec des déductions spécifiques. Voici comment le comprendre.',
    sections: [
      {
        title: 'Qu\'est-ce que le RDU (Revenu Déterminant Unifié) ?',
        content: 'Le RDU est le montant de référence utilisé par l\'OVAM pour calculer votre droit au subside. Il est composé de votre revenu net (selon votre taxation fiscale) plus une majoration de la fortune excédentaire, moins les déductions auxquelles vous avez droit.',
      },
      {
        title: 'Formule de calcul du RDU',
        content: 'Le calcul du RDU suit cette formule :',
        liste: [
          '**Revenu net** selon la dernière taxation fiscale définitive',
          '**+ Rachats 2e pilier** (après franchise de 20\'000 CHF)',
          '**+ 6,7% (1/15) de la fortune** excédant 59\'000 CHF (seul) ou 118\'000 CHF (couple)',
          '**- Déduction forfaitaire** pour primes : 2\'200 CHF (seul) ou 4\'400 CHF (couple)',
          '**- 1\'300 CHF** par enfant mineur ou majeur financièrement dépendant',
          '**- Déductions enfants** : 6\'000 CHF (1 enfant), 13\'000 CHF (2), +7\'000 CHF par enfant suppl.',
          '**Franchise résidence principale** : 300\'000 CHF déduits de la valeur immobilière',
        ],
      },
      {
        title: 'Le taux d\'effort de 10%',
        content: 'L\'objectif du subside est de limiter vos primes d\'assurance-maladie à **maximum 10% de votre RDU**. Si, après subside ordinaire, vos primes dépassent encore ce seuil, un subside spécifique complémentaire peut être accordé.',
      },
      {
        title: 'Les deux régions de primes',
        content: 'Le Canton de Vaud est divisé en deux régions de primes qui influencent le calcul :',
        liste: [
          '**Région 1** : Lausanne, Ouest lausannois, Nyon, La Côte, Lavaux, Riviera (primes plus élevées)',
          '**Région 2** : Chablais, Pays d\'Enhaut, Oron, Cossonay, Broye, Vully, Gros-de-Vaud, Jura-Nord vaudois (primes plus basses)',
        ],
      },
    ],
    faq: [
      {
        question: 'Où puis-je faire une simulation de mon subside ?',
        reponse: 'L\'OVAM propose un calculateur en ligne officiel sur prestations.vd.ch. Munissez-vous de votre dernière décision de taxation pour obtenir une estimation fiable.',
      },
      {
        question: 'Mon conjoint gagne beaucoup mais pas moi, comment ça se passe ?',
        reponse: 'Pour les couples, les revenus des deux conjoints sont additionnés pour former un RDU commun. Les déductions couples (4\'400 CHF) et la franchise fortune couple (118\'000 CHF) s\'appliquent.',
      },
    ],
    cta: 'Calculez votre subside avec notre aide',
    relatedSlugs: ['bareme-subside-vaud-2026', 'plafond-revenu-subside-vaud'],
  },
  {
    slug: 'bareme-subside-vaud-2026',
    metaTitle: 'Barème Subside Vaud 2026 | Montants Officiels OVAM',
    metaDescription: 'Barème officiel des subsides assurance maladie du Canton de Vaud pour 2026. Montants min/max, taux selon RDU, régions de primes.',
    h1: 'Barème des Subsides Assurance Maladie Vaud 2026 : Montants Officiels',
    icon: '📊',
    intro: 'Les montants des subsides pour 2026 ont été fixés par le Conseil d\'État vaudois via l\'arrêté subsides 2026. Le subside varie de 4% à 60% de la prime de référence selon votre situation financière.',
    sections: [
      {
        title: 'Montants 2026 : minimum et maximum',
        content: 'Pour l\'année 2026, les montants des subsides s\'échelonnent comme suit :',
        liste: [
          '**Subside minimum** : 30 CHF par mois (pour les revenus proches du plafond)',
          '**Subside maximum** : 331 CHF par mois (pour les revenus les plus modestes)',
          'Le subside représente entre **4% et 60%** de la prime de référence',
          'Le montant exact est calculé progressivement selon votre RDU',
        ],
      },
      {
        title: 'Impact de la hausse des primes 2026',
        content: 'En 2026, les primes d\'assurance-maladie augmentent en moyenne de **4,9%** dans le Canton de Vaud, soit environ 20,70 CHF par mois. Par catégorie : adultes +4,3% (21,80 CHF/mois), jeunes +3,4% (12,10 CHF/mois), enfants +5,2% (7 CHF/mois). Le budget cantonal des subsides dépasse pour la première fois le milliard de francs.',
      },
      {
        title: 'Nombre de bénéficiaires',
        content: 'Environ **306\'000 personnes** (36% de la population vaudoise assurée) bénéficient d\'un subside dans le Canton de Vaud. Ce chiffre montre que plus d\'un tiers de la population est éligible – vérifiez vos droits !',
      },
    ],
    faq: [
      {
        question: 'Le barème change-t-il chaque année ?',
        reponse: 'Oui, le Conseil d\'État fixe de nouveaux barèmes chaque année en fonction de l\'évolution des primes d\'assurance-maladie et du budget cantonal.',
      },
      {
        question: 'Pourquoi mon subside a baissé alors que les primes augmentent ?',
        reponse: 'Les primes augmentent de 4,9% en moyenne mais les subsides n\'augmentent pas dans les mêmes proportions. Entre 2020 et 2026, les primes ont augmenté de 31% contre 26% pour les subsides.',
      },
    ],
    cta: 'Vérifiez combien vous pouvez recevoir',
    relatedSlugs: ['calculer-subside-vaud-rdu', 'plafond-revenu-subside-vaud'],
  },
  {
    slug: 'plafond-revenu-subside-vaud',
    metaTitle: 'Plafond de Revenu Subside Vaud 2026 | Revenus Maximum Éligibilité',
    metaDescription: 'Quel est le plafond de revenu pour bénéficier du subside assurance maladie dans le Canton de Vaud ? Seuils 2026 selon situation familiale.',
    h1: 'Plafond de Revenu pour le Subside Assurance Maladie Vaud 2026',
    icon: '📈',
    intro: 'Beaucoup pensent gagner trop pour avoir droit au subside. Pourtant, avec les déductions familiales, la franchise sur la résidence principale et les seuils actuels, un grand nombre de ménages vaudois sont éligibles – même avec des revenus moyens.',
    sections: [
      {
        title: 'Plafonds indicatifs selon la situation familiale',
        content: 'Les plafonds de RDU approximatifs pour bénéficier du subside minimum (30 CHF/mois) sont :',
        liste: [
          '**Personne seule** : RDU jusqu\'à environ 52\'000 CHF',
          '**Couple sans enfant** : RDU jusqu\'à environ 69\'000 CHF',
          '**Couple avec 1 enfant** : RDU jusqu\'à environ 76\'000 CHF',
          '**Couple avec 2 enfants** : RDU jusqu\'à environ 83\'000 CHF',
          '**Famille monoparentale 1 enfant** : RDU jusqu\'à environ 59\'000 CHF',
        ],
      },
      {
        title: 'N\'oubliez pas les déductions !',
        content: 'Le RDU n\'est pas votre salaire brut. De nombreuses déductions s\'appliquent avant d\'arriver au RDU :',
        liste: [
          'Déduction forfaitaire primes : **2\'200 CHF** (seul) ou **4\'400 CHF** (couple)',
          'Déduction par enfant : **1\'300 CHF** chacun',
          'Déduction enfants à charge : **6\'000 à 13\'000+ CHF**',
          'Franchise résidence principale : **300\'000 CHF** sur la valeur immobilière',
          'Franchise fortune commerciale (indépendants) : **100\'000 CHF**',
        ],
      },
      {
        title: 'Pourquoi vérifier même avec un "bon" salaire ?',
        content: 'Avec 36% de la population vaudoise qui bénéficie d\'un subside, les plafonds sont plus élevés qu\'on ne le pense. Un couple avec deux enfants et un revenu combiné de 90\'000 CHF peut être éligible grâce aux déductions. Vérifiez vos droits !',
      },
    ],
    faq: [
      {
        question: 'Je gagne 5\'000 CHF/mois, ai-je droit au subside ?',
        reponse: 'Cela dépend de votre situation familiale et de votre fortune. 5\'000 CHF/mois = 60\'000 CHF/an brut. Après déductions, votre RDU pourrait être éligible, surtout si vous avez des enfants.',
      },
      {
        question: 'Mon salaire a augmenté, vais-je perdre mon subside ?',
        reponse: 'Pas forcément. Le subside est progressif – il diminue à mesure que vos revenus augmentent. Vous pourriez recevoir un montant réduit plutôt que de perdre votre droit complètement.',
      },
    ],
    cta: 'Vérifiez si vos revenus vous donnent droit au subside',
    relatedSlugs: ['calculer-subside-vaud-rdu', 'bareme-subside-vaud-2026'],
  },
  {
    slug: 'fortune-subside-vaud-impact',
    metaTitle: 'Impact de la Fortune sur le Subside Vaud 2026 | Immobilier, Épargne',
    metaDescription: 'Comment votre fortune (immobilier, épargne, 3e pilier) impacte-t-elle votre droit au subside assurance maladie dans le Canton de Vaud ?',
    h1: 'Comment la Fortune Impacte Votre Droit au Subside dans le Canton de Vaud',
    icon: '🏠',
    intro: 'Votre fortune (comptes bancaires, immobilier, placements) est prise en compte dans le calcul du subside. Mais des franchises importantes existent, notamment pour votre résidence principale. Voici comment cela fonctionne.',
    sections: [
      {
        title: 'Calcul de la majoration fortune',
        content: 'La fortune est intégrée au RDU via une majoration de **1/15 (6,7%)** de la fortune qui excède les franchises :',
        liste: [
          '**Franchise personne seule / famille monoparentale** : 59\'000 CHF',
          '**Franchise couple** (avec ou sans enfants) : 118\'000 CHF',
          '**Franchise résidence principale** : 300\'000 CHF (ne peut dépasser la valeur fiscale du bien)',
          '**Franchise fortune commerciale** (indépendants) : 100\'000 CHF',
        ],
      },
      {
        title: 'Exemple concret',
        content: 'Un couple propriétaire avec une maison valant 500\'000 CHF et 150\'000 CHF d\'épargne. Fortune totale = 650\'000 CHF. Après franchise résidence (300\'000) et franchise couple (118\'000), la fortune excédentaire est 232\'000 CHF. Majoration = 232\'000 × 6,7% = 15\'544 CHF ajoutés au RDU. Ce montant peut sembler important mais ne rend pas forcément inéligible au subside.',
      },
      {
        title: 'Ce qui n\'est PAS compté',
        content: 'Attention : les dettes hypothécaires et privées ne sont **pas déduites** de la fortune pour le calcul du subside. Seules les franchises officielles s\'appliquent.',
      },
    ],
    faq: [
      {
        question: 'Mon 3e pilier compte-t-il dans la fortune ?',
        reponse: 'Le 3e pilier lié (3a) n\'est généralement pas compté dans la fortune imposable tant qu\'il n\'est pas versé. Le 3e pilier libre (3b) est comptabilisé dans votre fortune.',
      },
      {
        question: 'Je suis propriétaire, ai-je quand même droit au subside ?',
        reponse: 'Oui, grâce à la franchise de 300\'000 CHF sur votre résidence principale. De nombreux propriétaires modestes bénéficient du subside.',
      },
    ],
    cta: 'Vérifiez l\'impact de votre fortune sur votre subside',
    relatedSlugs: ['calculer-subside-vaud-rdu', 'plafond-revenu-subside-vaud'],
  },
  {
    slug: 'subside-vaud-couple-marie',
    metaTitle: 'Subside Vaud Couple Marié 2026 | Calcul, Déductions, Montants',
    metaDescription: 'Comment fonctionne le subside assurance maladie pour un couple marié dans le Canton de Vaud ? Calcul commun, déductions 2026 et montants.',
    h1: 'Subside Assurance Maladie pour Couples Mariés dans le Canton de Vaud',
    icon: '💑',
    intro: 'Pour les couples mariés dans le Canton de Vaud, le subside est calculé sur le revenu du ménage (les deux revenus additionnés) avec des déductions spécifiques pour couples. Chaque conjoint peut recevoir son propre subside.',
    sections: [
      {
        title: 'Calcul pour couples mariés',
        content: 'Le RDU du couple est calculé comme suit :',
        liste: [
          'Les **revenus des deux conjoints** sont additionnés',
          'Déduction forfaitaire couple : **4\'400 CHF** (au lieu de 2\'200 CHF pour une personne seule)',
          'Franchise fortune couple : **118\'000 CHF** (au lieu de 59\'000 CHF)',
          'Si vous avez des enfants : déduction supplémentaire de **1\'300 CHF par enfant** + déductions enfants à charge',
        ],
      },
      {
        title: 'Deux subsides distincts',
        content: 'Même si le calcul est commun, **chaque conjoint reçoit son propre subside**, versé directement à son assureur-maladie respectif. Le montant peut aller de 30 à 331 CHF par mois par personne.',
      },
      {
        title: 'Cas du concubinage (non mariés)',
        content: 'Si vous vivez en concubinage sans être mariés, chaque partenaire fait une demande séparée basée sur son propre revenu. Cela peut être plus avantageux dans certains cas où un partenaire gagne nettement moins que l\'autre.',
      },
    ],
    faq: [
      {
        question: 'Mon conjoint est frontalier, avons-nous droit au subside ?',
        reponse: 'Le subside est lié à la résidence dans le Canton de Vaud. Si votre conjoint est domicilié à Vaud et affilié à l\'assurance-maladie suisse, il peut bénéficier du subside selon le RDU du ménage.',
      },
      {
        question: 'En cas de divorce, que se passe-t-il ?',
        reponse: 'Chaque ex-conjoint fait ensuite sa propre demande basée sur son revenu individuel. Annoncez le divorce à l\'OVAM pour recalcul immédiat.',
      },
    ],
    cta: 'Calculez le subside pour votre couple',
    relatedSlugs: ['calculer-subside-vaud-rdu', 'subside-vaud-nouveau-resident'],
  },
  {
    slug: 'subside-vaud-nouveau-resident',
    metaTitle: 'Subside Vaud Nouveau Résident 2026 | Arrivée Canton de Vaud',
    metaDescription: 'Nouveau résident dans le Canton de Vaud ? Découvrez comment obtenir un subside assurance maladie dès votre arrivée. Conditions et démarches 2026.',
    h1: 'Subside Assurance Maladie pour Nouveaux Résidents du Canton de Vaud',
    icon: '🏡',
    intro: 'Vous venez d\'emménager dans le Canton de Vaud ? Que vous veniez d\'un autre canton suisse ou de l\'étranger, vous pouvez demander un subside assurance maladie dès votre installation. Voici les démarches spécifiques.',
    sections: [
      {
        title: 'Droit au subside dès l\'arrivée',
        content: 'En tant que nouveau résident, vous pouvez déposer une demande de subside dès que vous êtes domicilié et assuré dans le Canton de Vaud. Si vous n\'avez pas encore de taxation fiscale vaudoise, l\'OVAM se basera sur vos justificatifs de revenus actuels.',
      },
      {
        title: 'Arrivée depuis un autre canton suisse',
        content: 'Si vous veniez d\'un autre canton :',
        liste: [
          'Annoncez votre arrivée à votre **commune** et à l\'**OVAM**',
          'Fournissez votre **dernière taxation fiscale** (même d\'un autre canton)',
          'L\'OVAM utilisera cette taxation pour le calcul initial',
          'Votre subside de l\'ancien canton cesse automatiquement',
        ],
      },
      {
        title: 'Arrivée depuis l\'étranger',
        content: 'Si vous arrivez de l\'étranger (permis B, C, L) :',
        liste: [
          'Vous avez **3 mois** pour vous affilier à une assurance-maladie suisse (rétroactif à la date d\'arrivée)',
          'Déposez votre demande de subside avec vos **justificatifs de revenus actuels** (contrat de travail, fiches de salaire)',
          'L\'OVAM évaluera votre situation sans taxation fiscale suisse initiale',
          'Votre **permis de séjour** (ou récépissé) est requis comme pièce d\'identité',
        ],
      },
    ],
    faq: [
      {
        question: 'Je suis frontalier, ai-je droit au subside ?',
        reponse: 'Les frontaliers qui ont opté pour l\'assurance-maladie suisse (et non l\'assurance de leur pays de résidence) et qui sont domiciliés dans le Canton de Vaud peuvent avoir droit au subside.',
      },
      {
        question: 'Mon permis est en cours de renouvellement, puis-je faire une demande ?',
        reponse: 'Oui, vous pouvez déposer votre demande avec le récépissé de renouvellement. L\'essentiel est d\'être domicilié et assuré dans le Canton de Vaud.',
      },
    ],
    cta: 'Nouveau à Vaud ? Vérifiez votre droit au subside',
    relatedSlugs: ['comment-faire-demande-subside-vaud', 'documents-necessaires-subside-vaud'],
  },

  // ─────────────────────────────────────────────
  // BLOC 3 : SITUATIONS SPÉCIFIQUES (8 pages)
  // ─────────────────────────────────────────────
  {
    slug: 'subside-vaud-perte-emploi',
    metaTitle: 'Subside Vaud après Perte d\'Emploi 2026 | Licenciement, Chômage',
    metaDescription: 'Vous venez de perdre votre emploi dans le Canton de Vaud ? Découvrez comment obtenir ou augmenter votre subside assurance maladie rapidement.',
    h1: 'Subside Assurance Maladie après une Perte d\'Emploi dans le Canton de Vaud',
    icon: '🔴',
    intro: 'La perte d\'un emploi est une situation stressante, mais elle ouvre souvent droit à un subside assurance maladie plus élevé dans le Canton de Vaud. Voici comment agir rapidement pour alléger vos charges.',
    sections: [
      {
        title: 'Agissez immédiatement',
        content: 'Dès que vous perdez votre emploi, annoncez ce changement à l\'OVAM. N\'attendez pas votre prochaine taxation fiscale – la procédure d\'actualisation financière permet un recalcul rapide de vos droits.',
        liste: [
          'Inscrivez-vous au **chômage (ORP)** dans votre région',
          'Annoncez votre changement de situation à l\'**OVAM** (en ligne ou en agence)',
          'Fournissez votre **attestation ORP** et vos **décomptes d\'indemnités**',
          'Le nouveau subside prend effet le **1er du 2e mois** suivant votre annonce',
        ],
      },
      {
        title: 'Impact sur votre subside',
        content: 'Les indemnités de chômage représentent environ 70-80% de votre ancien salaire. Cette baisse de revenus augmente mécaniquement votre droit au subside. Si vous n\'aviez pas de subside avant, vous pourriez désormais y avoir droit. Si vous en aviez déjà un, son montant sera probablement augmenté.',
      },
      {
        title: 'Fin de droit au chômage',
        content: 'Si vous arrivez en fin de droit au chômage et basculez au **revenu d\'insertion (RI)**, votre subside sera ajusté automatiquement. Les bénéficiaires du RI ont droit au subside sans délai de carence.',
      },
    ],
    faq: [
      {
        question: 'Mon employeur m\'a licencié, dois-je attendre le chômage pour demander ?',
        reponse: 'Non, annoncez le changement dès réception de votre licenciement. L\'OVAM recalculera sur la base de vos futurs revenus (indemnités chômage estimées).',
      },
      {
        question: 'J\'ai touché des indemnités de licenciement, ça impacte le subside ?',
        reponse: 'Les indemnités de licenciement peuvent temporairement augmenter votre revenu déterminant pour l\'année en cours. Toutefois, si vos revenus réguliers (indemnités chômage) sont plus bas, l\'actualisation financière tiendra compte de cette baisse.',
      },
    ],
    cta: 'Vous avez perdu votre emploi ? Contactez-nous rapidement',
    relatedSlugs: ['actualisation-financiere-subside-vaud', 'delai-subside-vaud-combien-temps'],
  },
  {
    slug: 'subside-vaud-divorce-separation',
    metaTitle: 'Subside Vaud après Divorce ou Séparation 2026 | Nouveaux Droits',
    metaDescription: 'Après un divorce ou une séparation dans le Canton de Vaud, vos droits au subside assurance maladie changent. Recalcul, démarches et montants 2026.',
    h1: 'Subside Assurance Maladie après un Divorce ou une Séparation',
    icon: '💔',
    intro: 'Un divorce ou une séparation modifie profondément votre situation financière et donc vos droits au subside. Le passage d\'un revenu de couple à un revenu individuel ouvre souvent droit à un subside plus important.',
    sections: [
      {
        title: 'Impact du divorce sur le subside',
        content: 'Après un divorce :',
        liste: [
          'Votre subside est recalculé sur votre **revenu individuel** (plus le revenu commun du couple)',
          'Vous passez au statut **personne seule** : franchise fortune de 59\'000 CHF (au lieu de 118\'000)',
          'La déduction forfaitaire primes passe à **2\'200 CHF** (au lieu de 4\'400)',
          'Si vous avez la garde des enfants, vous bénéficiez des **déductions famille monoparentale**',
          'Les **pensions alimentaires reçues** comptent dans votre revenu',
          'Les **pensions alimentaires versées** sont déduites de votre revenu',
        ],
      },
      {
        title: 'Démarches à effectuer',
        content: 'Annoncez votre divorce ou séparation à l\'OVAM dès que possible. Fournissez le jugement de divorce ou l\'attestation de séparation, et vos justificatifs de revenus actuels (le vôtre uniquement). Le recalcul peut significativement augmenter votre subside.',
      },
      {
        title: 'Garde des enfants',
        content: 'Le parent ayant la garde principale bénéficie des déductions pour enfants à charge (1\'300 CHF par enfant + déductions complémentaires). En cas de garde alternée, contactez l\'OVAM pour déterminer la répartition.',
      },
    ],
    faq: [
      {
        question: 'Mon ex-conjoint ne verse pas la pension alimentaire, ça change quelque chose ?',
        reponse: 'Les pensions non versées ne sont normalement pas comptées dans votre revenu. Signalez la situation à l\'OVAM avec les justificatifs. Le BRAPA (Bureau de recouvrement et d\'avances de pensions alimentaires) peut vous aider à obtenir les pensions dues.',
      },
      {
        question: 'Nous sommes séparés mais pas encore divorcés, que faire ?',
        reponse: 'Une séparation de fait (deux domiciles distincts) permet déjà un recalcul individuel. Annoncez votre séparation à l\'OVAM avec justificatif de votre nouveau domicile.',
      },
    ],
    cta: 'Divorce récent ? Vérifiez vos nouveaux droits au subside',
    relatedSlugs: ['actualisation-financiere-subside-vaud', 'plafond-revenu-subside-vaud'],
  },
  {
    slug: 'subside-vaud-jeune-26-ans',
    metaTitle: 'Subside Vaud Jeune 18-25 ans 2026 | Premier Emploi, Formation',
    metaDescription: 'Subside assurance maladie pour les jeunes de 18 à 25 ans dans le Canton de Vaud. Premier emploi, études, formation : conditions et montants 2026.',
    h1: 'Subside Assurance Maladie pour les Jeunes de 18 à 25 Ans dans le Canton de Vaud',
    icon: '🧑‍🎓',
    intro: 'Entre 18 et 25 ans, le système de subside vaudois tient compte de votre situation spécifique : premier emploi, études, apprentissage. Le calcul peut inclure les revenus de vos parents si vous êtes encore à leur charge.',
    sections: [
      {
        title: 'Le calcul spécifique pour les 18-25 ans',
        content: 'Si vous avez entre 18 et 25 ans et êtes en **première formation** avec un revenu inférieur à **1\'500 CHF net/mois**, le calcul du subside inclut votre revenu personnel plus un pourcentage du revenu de vos parents (si vous êtes financièrement dépendant).',
      },
      {
        title: 'Dès 26 ans : calcul individuel',
        content: 'À partir de 26 ans, ou si vous êtes en deuxième formation, le calcul se base **uniquement sur votre propre revenu** (et celui de votre conjoint(e) le cas échéant). Aucun rattachement aux revenus parentaux.',
      },
      {
        title: 'Catégorie de prime "jeune adulte"',
        content: 'Les 19-25 ans bénéficient d\'une catégorie de prime "jeune adulte" plus basse que la prime adulte. En 2026, la hausse pour cette catégorie est de 3,4% en moyenne dans le Canton de Vaud, soit 12,10 CHF/mois.',
      },
    ],
    faq: [
      {
        question: 'J\'ai 20 ans et je travaille à plein temps, suis-je traité comme un jeune ?',
        reponse: 'Si vous n\'êtes plus en première formation et gagnez plus de 1\'500 CHF/mois, votre subside est calculé sur votre propre revenu uniquement, comme un adulte.',
      },
      {
        question: 'Mes parents refusent de me donner leur taxation, que faire ?',
        reponse: 'Contactez l\'OVAM qui pourra accéder aux informations fiscales de vos parents via l\'administration cantonale. Votre demande ne sera pas bloquée.',
      },
    ],
    cta: 'Vous avez entre 18 et 25 ans ? Vérifiez votre subside',
    relatedSlugs: ['comment-faire-demande-subside-vaud', 'calculer-subside-vaud-rdu'],
  },
  {
    slug: 'subside-vaud-femme-enceinte-maternite',
    metaTitle: 'Subside Vaud Grossesse & Maternité 2026 | Femme Enceinte',
    metaDescription: 'Subside assurance maladie pendant la grossesse et la maternité dans le Canton de Vaud. Droits, montants et démarches pour futures mamans.',
    h1: 'Subside Assurance Maladie Pendant la Grossesse et la Maternité',
    icon: '🤰',
    intro: 'La grossesse et la maternité entraînent des changements dans votre situation familiale et financière. Dans le Canton de Vaud, votre droit au subside peut évoluer favorablement avec l\'arrivée d\'un enfant.',
    sections: [
      {
        title: 'Pendant la grossesse',
        content: 'Votre subside ne change pas pendant la grossesse. Cependant, l\'assurance-maladie de base (LAMal) couvre tous les frais liés à la grossesse et à l\'accouchement sans franchise ni quote-part dès la 13e semaine.',
      },
      {
        title: 'Après la naissance',
        content: 'L\'arrivée d\'un enfant change votre situation :',
        liste: [
          'Annoncez la naissance à l\'OVAM pour **recalcul avec déductions enfant**',
          'Votre enfant a droit à son **propre subside** (jusqu\'à 331 CHF/mois)',
          'Déduction supplémentaire de **1\'300 CHF** par enfant + déductions complémentaires',
          'Si vous réduisez votre temps de travail : actualisation financière possible',
          'N\'oubliez pas d\'assurer votre bébé dans les **3 mois** suivant la naissance',
        ],
      },
      {
        title: 'Congé maternité et revenus',
        content: 'Pendant le congé maternité, vous percevez des allocations (80% du salaire via APG). Si cette baisse dépasse 20% de votre revenu habituel, vous pouvez demander une actualisation financière pour augmenter votre subside temporairement.',
      },
    ],
    faq: [
      {
        question: 'Mon bébé est-il automatiquement couvert par mon subside ?',
        reponse: 'Non, votre bébé doit être affilié à sa propre assurance-maladie dans les 3 mois suivant la naissance. Déposez ensuite une demande de subside pour lui auprès de l\'OVAM.',
      },
      {
        question: 'Les allocations de maternité comptent-elles comme revenu ?',
        reponse: 'Oui, les allocations perte de gain maternité sont comptées dans le revenu. Mais elles sont souvent inférieures à votre salaire habituel, ce qui peut augmenter votre droit au subside.',
      },
    ],
    cta: 'Future maman ? Calculez votre subside avec enfant',
    relatedSlugs: ['actualisation-financiere-subside-vaud', 'subside-vaud-couple-marie'],
  },
  {
    slug: 'subside-vaud-permis-b-c-etranger',
    metaTitle: 'Subside Vaud Permis B, C, L | Étrangers et Résidents 2026',
    metaDescription: 'Subside assurance maladie pour résidents étrangers (permis B, C, L) dans le Canton de Vaud. Conditions spécifiques et démarches 2026.',
    h1: 'Subside Assurance Maladie pour Résidents Étrangers dans le Canton de Vaud',
    icon: '🌍',
    intro: 'Vous résidez dans le Canton de Vaud avec un permis B (séjour), C (établissement), L (séjour de courte durée) ou F (admission provisoire) ? Vous avez les mêmes droits au subside que les résidents suisses, aux mêmes conditions.',
    sections: [
      {
        title: 'Éligibilité selon le type de permis',
        content: 'Le droit au subside est le même pour tous les résidents du Canton de Vaud, quelle que soit leur nationalité :',
        liste: [
          '**Permis C** (établissement) : mêmes droits que les Suisses',
          '**Permis B** (séjour) : éligible si domicilié et assuré à Vaud',
          '**Permis L** (courte durée) : éligible si assuré en Suisse',
          '**Permis F** (admission provisoire) : éligible',
          '**Requérants d\'asile (permis N)** : cas particulier, contactez l\'EVAM',
        ],
      },
      {
        title: 'Documents spécifiques pour étrangers',
        content: 'En plus des documents habituels, préparez :',
        liste: [
          '**Permis de séjour** valide (ou récépissé de renouvellement)',
          'Si vous n\'avez pas encore de taxation vaudoise : **contrat de travail** et **fiches de salaire**',
          'Pour les concubins : permis de séjour du/de la partenaire si ménage commun',
        ],
      },
      {
        title: 'Pas de taxation fiscale suisse ?',
        content: 'Si vous venez d\'arriver et n\'avez pas encore de taxation fiscale suisse, l\'OVAM évaluera votre situation sur la base de vos revenus actuels (contrat de travail, fiches de salaire). Le subside sera recalculé dès réception de votre première taxation vaudoise.',
      },
    ],
    faq: [
      {
        question: 'Mon permis expire bientôt, mon subside continue-t-il ?',
        reponse: 'Oui, tant que votre permis est renouvelé et que vous restez domicilié dans le Canton de Vaud. Le récépissé de renouvellement suffit pendant la procédure.',
      },
      {
        question: 'Je suis frontalier avec assurance LAMal, ai-je droit au subside ?',
        reponse: 'Si vous avez choisi l\'assurance LAMal suisse (et non l\'assurance de votre pays de résidence) et que vous êtes domicilié à Vaud, vous pouvez avoir droit au subside.',
      },
    ],
    cta: 'Résident étranger à Vaud ? Vérifiez votre droit au subside',
    relatedSlugs: ['subside-vaud-nouveau-resident', 'documents-necessaires-subside-vaud'],
  },
  {
    slug: 'subside-vaud-travailleur-frontalier',
    metaTitle: 'Subside Vaud Travailleur Frontalier 2026 | LAMal ou CMU',
    metaDescription: 'Subside assurance maladie pour travailleurs frontaliers dans le Canton de Vaud. Choix LAMal/CMU, conditions et éligibilité 2026.',
    h1: 'Subside Assurance Maladie pour Travailleurs Frontaliers dans le Canton de Vaud',
    icon: '🚗',
    intro: 'En tant que travailleur frontalier dans le Canton de Vaud, votre droit au subside dépend de votre choix d\'assurance : LAMal suisse ou couverture dans votre pays de résidence (CMU en France). Seuls les frontaliers assurés en LAMal peuvent y prétendre.',
    sections: [
      {
        title: 'Frontaliers assurés en LAMal : éligibles',
        content: 'Si vous avez opté pour l\'assurance-maladie suisse (LAMal) et que vous êtes domicilié dans le Canton de Vaud, vous pouvez bénéficier du subside aux mêmes conditions que les autres résidents vaudois.',
      },
      {
        title: 'Frontaliers assurés à l\'étranger (CMU) : non éligibles',
        content: 'Si vous avez choisi la couverture de votre pays de résidence (CMU en France par exemple), vous ne pouvez pas bénéficier du subside vaudois car vous n\'êtes pas assuré en LAMal.',
      },
      {
        title: 'Cas du conjoint frontalier',
        content: 'Si un des conjoints est frontalier et l\'autre résident vaudois, le conjoint résident peut bénéficier du subside. Le revenu du ménage est pris en compte pour le calcul du RDU si le couple est marié.',
      },
    ],
    faq: [
      {
        question: 'Puis-je changer de la CMU à la LAMal pour obtenir le subside ?',
        reponse: 'Le droit d\'option entre CMU et LAMal s\'exerce normalement dans les 3 mois suivant le début d\'activité en Suisse. Un changement ultérieur est possible sous certaines conditions – renseignez-vous auprès de l\'OVAM.',
      },
      {
        question: 'Mon salaire suisse est élevé, ai-je quand même droit au subside ?',
        reponse: 'Le salaire suisse est souvent élevé en valeur absolue mais le coût de la vie aussi. Avec les primes élevées et les déductions, de nombreux frontaliers sont éligibles au subside. Vérifiez votre RDU.',
      },
    ],
    cta: 'Frontalier à Vaud ? Vérifiez votre éligibilité',
    relatedSlugs: ['subside-vaud-permis-b-c-etranger', 'calculer-subside-vaud-rdu'],
  },
  {
    slug: 'subside-vaud-invalide-ai',
    metaTitle: 'Subside Vaud Invalidité AI 2026 | Rente AI et Subside',
    metaDescription: 'Subside assurance maladie pour bénéficiaires AI dans le Canton de Vaud. Calcul avec rente AI, prestations complémentaires et montants 2026.',
    h1: 'Subside Assurance Maladie pour Personnes en Situation d\'Invalidité (AI)',
    icon: '♿',
    intro: 'Si vous percevez une rente AI dans le Canton de Vaud, vous avez très probablement droit à un subside assurance maladie. Les bénéficiaires de prestations complémentaires AI ont même droit à une prise en charge complète de leurs primes.',
    sections: [
      {
        title: 'Rente AI et subside ordinaire',
        content: 'La rente AI est prise en compte comme revenu dans le calcul du RDU. Cependant, les rentes AI étant souvent modestes, la plupart des bénéficiaires ont droit à un subside conséquent, souvent proche du maximum (331 CHF/mois).',
      },
      {
        title: 'Prestations complémentaires AI',
        content: 'Si vous bénéficiez de **prestations complémentaires (PC) AI**, votre subside couvre généralement la **totalité de votre prime** d\'assurance-maladie. Le droit est **immédiat** (pas de délai de carence de 2 mois).',
      },
      {
        title: 'Invalidité partielle',
        content: 'En cas de rente AI partielle (quart, demi, trois-quarts de rente), vos autres revenus (salaire à temps partiel, autres rentes) s\'ajoutent à votre rente AI pour le calcul du RDU. Le subside est ajusté en conséquence.',
      },
    ],
    faq: [
      {
        question: 'Ma rente AI a été augmentée/diminuée, mon subside change-t-il ?',
        reponse: 'Oui, tout changement de rente AI impacte votre RDU. Annoncez la modification à l\'OVAM pour un recalcul. Le changement sera pris en compte au prochain renouvellement ou via une actualisation.',
      },
      {
        question: 'Je bénéficie de PC, dois-je quand même faire une demande de subside ?',
        reponse: 'Si vous bénéficiez de PC, le subside est généralement calculé automatiquement. Vérifiez auprès de votre caisse de compensation que votre subside est bien en place.',
      },
    ],
    cta: 'Bénéficiaire AI ? Vérifiez vos droits au subside',
    relatedSlugs: ['calculer-subside-vaud-rdu', 'bareme-subside-vaud-2026'],
  },
  {
    slug: 'subside-vaud-revenu-insertion-ri',
    metaTitle: 'Subside Vaud et Revenu d\'Insertion (RI) 2026 | Aide Sociale',
    metaDescription: 'Bénéficiaire du revenu d\'insertion (RI) dans le Canton de Vaud ? Votre subside assurance maladie est automatique. Conditions et montants 2026.',
    h1: 'Subside Assurance Maladie et Revenu d\'Insertion (RI) dans le Canton de Vaud',
    icon: '🤝',
    intro: 'Si vous bénéficiez du revenu d\'insertion (RI) dans le Canton de Vaud, vous avez droit au subside assurance maladie automatiquement, sans délai de carence. Le subside couvre généralement la totalité de votre prime.',
    sections: [
      {
        title: 'Subside automatique avec le RI',
        content: 'Les bénéficiaires du revenu d\'insertion bénéficient du subside **sans avoir à faire de demande séparée**. Le droit s\'ouvre **immédiatement** avec le RI, sans le délai de carence habituel de 2 mois.',
      },
      {
        title: 'Montant du subside avec le RI',
        content: 'En règle générale, le subside couvre la **totalité de la prime** d\'assurance-maladie obligatoire (LAMal). Vous ne devriez avoir aucun reste à charge sur votre prime de base. Attention : les assurances complémentaires ne sont pas couvertes.',
      },
      {
        title: 'Fin du RI : que se passe-t-il ?',
        content: 'Si vous sortez du RI (reprise d\'emploi, autre prestation), votre subside est recalculé selon votre nouveau revenu. Vous ne perdez pas automatiquement le droit au subside – il sera ajusté selon votre situation.',
      },
    ],
    faq: [
      {
        question: 'Dois-je choisir l\'assurance la moins chère ?',
        reponse: 'Le RI couvre les primes de l\'assurance obligatoire de base. Il est recommandé de choisir un modèle économique (médecin de famille, HMO, Telmed) pour minimiser les coûts.',
      },
      {
        question: 'Mon assistant social s\'occupe-t-il de la demande de subside ?',
        reponse: 'En général, oui. Votre assistant social au Centre social régional (CSR) s\'occupe de la coordination entre le RI et le subside. Vérifiez avec lui que tout est en ordre.',
      },
    ],
    cta: 'Bénéficiaire RI ? Vérifiez que votre subside est actif',
    relatedSlugs: ['subside-vaud-perte-emploi', 'delai-subside-vaud-combien-temps'],
  },

  // ─────────────────────────────────────────────
  // BLOC 4 : QUESTIONS PRATIQUES (6 pages)
  // ─────────────────────────────────────────────
  {
    slug: 'ovam-contact-telephone-horaires',
    metaTitle: 'OVAM Contact, Téléphone, Horaires 2026 | Office Vaudois Assurance Maladie',
    metaDescription: 'Contactez l\'OVAM (Office Vaudois de l\'Assurance-Maladie) : téléphone 021 557 47 47, horaires, agences régionales et demande en ligne.',
    h1: 'OVAM : Contact, Téléphone et Horaires de l\'Office Vaudois de l\'Assurance-Maladie',
    icon: '📞',
    intro: 'L\'OVAM (Office Vaudois de l\'Assurance-Maladie) est l\'organisme cantonal qui gère les subsides à l\'assurance-maladie dans le Canton de Vaud. Voici toutes les informations pour les contacter.',
    sections: [
      {
        title: 'Téléphone et horaires',
        content: 'Le numéro principal de l\'OVAM est le **021 557 47 47**. L\'office est ouvert du **lundi au vendredi** de **8h à 11h45** et de **13h30 à 16h**. En dehors de ces horaires, vous pouvez déposer votre demande en ligne sur prestations.vd.ch.',
      },
      {
        title: 'Agences d\'assurances sociales régionales',
        content: 'Le Canton de Vaud dispose de plusieurs agences d\'assurances sociales réparties dans les principales régions. Vous pouvez vous y rendre en personne pour déposer votre demande ou obtenir des conseils. Trouvez votre agence sur le site vd.ch selon votre commune de résidence.',
      },
      {
        title: 'Demande en ligne 24h/24',
        content: 'La plateforme **prestations.vd.ch** vous permet de déposer votre demande de subside en ligne, à tout moment. C\'est la méthode la plus rapide et la plus pratique. Vous aurez besoin de scanner vos documents et de les télécharger sur la plateforme.',
      },
    ],
    faq: [
      {
        question: 'L\'OVAM est-il le même que la caisse AVS ?',
        reponse: 'Non, l\'OVAM est un office spécifique qui gère uniquement les subsides à l\'assurance-maladie. La caisse AVS gère les rentes AVS/AI, les allocations familiales, etc. Ils travaillent ensemble via les agences d\'assurances sociales.',
      },
      {
        question: 'Puis-je prendre rendez-vous à l\'OVAM ?',
        reponse: 'Les agences d\'assurances sociales fonctionnent principalement sans rendez-vous pendant les heures d\'ouverture. Pour des situations complexes, appelez d\'abord le 021 557 47 47 pour prendre rendez-vous.',
      },
    ],
    cta: 'Besoin d\'aide ? Nous pouvons vous accompagner gratuitement',
    relatedSlugs: ['comment-faire-demande-subside-vaud', 'documents-necessaires-subside-vaud'],
  },
  {
    slug: 'changer-assurance-maladie-subside-vaud',
    metaTitle: 'Changer d\'Assurance Maladie avec un Subside Vaud 2026',
    metaDescription: 'Vous avez un subside et voulez changer de caisse maladie dans le Canton de Vaud ? Procédure, délais et impact sur votre subside 2026.',
    h1: 'Changer d\'Assurance Maladie quand on a un Subside dans le Canton de Vaud',
    icon: '🔀',
    intro: 'Bonne nouvelle : avoir un subside ne vous empêche pas de changer de caisse-maladie. Le subside est transféré automatiquement à votre nouvel assureur. Vous pouvez même économiser davantage en choisissant un assureur moins cher.',
    sections: [
      {
        title: 'Le subside suit votre nouvel assureur',
        content: 'Quand vous changez de caisse-maladie, votre subside est automatiquement redirigé vers votre nouvel assureur. Vous n\'avez pas besoin de refaire une demande de subside. Il suffit d\'informer l\'OVAM de votre changement d\'assureur.',
      },
      {
        title: 'Périodes de résiliation',
        content: 'Vous pouvez résilier votre assurance-maladie de base :',
        liste: [
          '**Avant le 30 novembre** pour un changement au 1er janvier',
          '**Avant le 31 mars** pour un changement au 1er juillet (uniquement si vous avez une franchise ordinaire de 300 CHF)',
          'Résiliez par **lettre recommandée** à votre assureur actuel',
        ],
      },
      {
        title: 'Choisir un assureur économique',
        content: 'Avec un subside, choisir un assureur moins cher permet de réduire encore plus votre reste à charge. Les modèles alternatifs (médecin de famille, HMO, Telmed) offrent des primes réduites de 10-25% par rapport au modèle libre.',
      },
    ],
    faq: [
      {
        question: 'Mon subside couvre-t-il les assurances complémentaires ?',
        reponse: 'Non, le subside couvre uniquement la prime de l\'assurance obligatoire (LAMal). Les assurances complémentaires (LCA) ne sont pas couvertes.',
      },
      {
        question: 'Que faire si mon nouvel assureur refuse le subside ?',
        reponse: 'Les assureurs ne peuvent pas refuser un subside. C\'est l\'OVAM qui le verse directement à l\'assureur. Si un problème survient, contactez l\'OVAM au 021 557 47 47.',
      },
    ],
    cta: 'Besoin d\'aide pour choisir votre assurance avec subside ?',
    relatedSlugs: ['bareme-subside-vaud-2026', 'ovam-contact-telephone-horaires'],
  },
  {
    slug: 'subside-vaud-enfant-mineur',
    metaTitle: 'Subside Vaud pour Enfants Mineurs 2026 | Prime Enfant',
    metaDescription: 'Subside assurance maladie pour enfants mineurs dans le Canton de Vaud. Montants 2026, conditions et comment en bénéficier pour vos enfants.',
    h1: 'Subside Assurance Maladie pour Enfants Mineurs dans le Canton de Vaud',
    icon: '👶',
    intro: 'Chaque enfant mineur résidant dans le Canton de Vaud peut bénéficier de son propre subside assurance maladie. En 2026, avec la hausse des primes enfants de 5,2%, le subside est plus important que jamais.',
    sections: [
      {
        title: 'Subside individuel par enfant',
        content: 'Chaque enfant a droit à son propre subside, calculé selon le revenu déterminant du ménage. Le subside peut aller de 30 à 331 CHF par mois par enfant, ce qui peut significativement réduire vos charges familiales.',
      },
      {
        title: 'Hausse des primes enfants en 2026',
        content: 'En 2026, les primes pour les enfants augmentent en moyenne de **5,2%** dans le Canton de Vaud, soit environ 7 CHF de plus par mois. Le subside aide à absorber cette augmentation.',
      },
      {
        title: 'Demande pour les enfants',
        content: 'Le subside pour vos enfants est inclus dans votre demande de ménage. Assurez-vous de fournir la police d\'assurance-maladie de chaque enfant. Le subside est versé directement à l\'assureur de chaque enfant.',
      },
    ],
    faq: [
      {
        question: 'Mon enfant de 18 ans doit-il faire sa propre demande ?',
        reponse: 'À 18 ans, votre enfant est considéré comme adulte. S\'il est en formation et gagne moins de 1\'500 CHF/mois, son subside peut continuer à être calculé partiellement avec les revenus parentaux (jusqu\'à 25 ans).',
      },
      {
        question: 'Les allocations familiales comptent-elles pour le subside de l\'enfant ?',
        reponse: 'Les allocations familiales comptent dans le revenu du ménage pour le calcul du RDU. Cependant, les déductions par enfant (1\'300 CHF + déductions complémentaires) compensent largement.',
      },
    ],
    cta: 'Faites la demande de subside pour vos enfants',
    relatedSlugs: ['calculer-subside-vaud-rdu', 'bareme-subside-vaud-2026'],
  },
  {
    slug: 'subside-vaud-prestations-complementaires',
    metaTitle: 'Subside Vaud et Prestations Complémentaires AVS/AI 2026',
    metaDescription: 'Bénéficiaire de PC AVS/AI dans le Canton de Vaud ? Votre subside couvre la totalité de votre prime assurance maladie. Conditions 2026.',
    h1: 'Subside et Prestations Complémentaires (PC) AVS/AI dans le Canton de Vaud',
    icon: '🏛️',
    intro: 'Les bénéficiaires de prestations complémentaires (PC) à l\'AVS ou à l\'AI dans le Canton de Vaud bénéficient d\'un traitement privilégié : leur subside couvre généralement la totalité de la prime d\'assurance-maladie, et le droit s\'ouvre immédiatement.',
    sections: [
      {
        title: 'Subside intégral avec les PC',
        content: 'Si vous bénéficiez de prestations complémentaires AVS ou AI, votre subside est calculé pour couvrir la **totalité de votre prime** d\'assurance-maladie obligatoire. Votre reste à charge est nul sur la prime de base.',
      },
      {
        title: 'Pas de délai de carence',
        content: 'Contrairement aux demandes ordinaires (2 mois de délai), les bénéficiaires de PC obtiennent leur subside **immédiatement**, en même temps que la prestation complémentaire.',
      },
      {
        title: 'Coordination automatique',
        content: 'La coordination entre les PC et le subside est généralement automatique via votre caisse de compensation. Vérifiez toutefois auprès de votre caisse que le subside est bien en place et correctement calculé.',
      },
    ],
    faq: [
      {
        question: 'Je perçois des PC et mon assureur me réclame une prime, est-ce normal ?',
        reponse: 'Le subside couvre la prime de référence cantonale. Si votre prime effective est supérieure (modèle libre, franchise basse), vous pouvez avoir un reste à charge. Envisagez de passer à un modèle plus économique.',
      },
      {
        question: 'Mes PC sont en cours de demande, puis-je avoir un subside en attendant ?',
        reponse: 'Oui, faites une demande de subside ordinaire en attendant la décision sur vos PC. Une fois les PC accordées, le subside sera ajusté automatiquement.',
      },
    ],
    cta: 'Bénéficiaire de PC ? Vérifiez que votre subside est en place',
    relatedSlugs: ['subside-vaud-invalide-ai', 'ovam-contact-telephone-horaires'],
  },
  {
    slug: 'economiser-prime-assurance-maladie-vaud',
    metaTitle: 'Économiser sur sa Prime Assurance Maladie Vaud 2026 | Astuces',
    metaDescription: 'Comment réduire sa prime d\'assurance maladie dans le Canton de Vaud ? Subside, changement de caisse, franchise, modèle HMO. Guide complet 2026.',
    h1: 'Comment Économiser sur sa Prime d\'Assurance Maladie dans le Canton de Vaud',
    icon: '💰',
    intro: 'Avec des primes en hausse de 4,9% en 2026 dans le Canton de Vaud, il est crucial d\'optimiser vos coûts. Entre le subside, le choix de modèle, la franchise et le changement de caisse, vous pouvez économiser plusieurs centaines de francs par mois.',
    sections: [
      {
        title: '1. Demandez votre subside',
        content: 'C\'est la mesure la plus impactante. Avec 36% de la population vaudoise qui en bénéficie, vérifiez votre éligibilité. Le subside peut atteindre 331 CHF/mois par personne, soit jusqu\'à **3\'972 CHF d\'économie par an**.',
      },
      {
        title: '2. Changez de caisse-maladie',
        content: 'Les écarts de primes entre assureurs peuvent atteindre **100-200 CHF/mois** pour des prestations identiques (l\'assurance de base est la même partout). Comparez les offres chaque automne avant le 30 novembre.',
      },
      {
        title: '3. Choisissez un modèle alternatif',
        content: 'Les modèles d\'assurance alternative permettent d\'économiser 10-25% sur votre prime :',
        liste: [
          '**Médecin de famille** : vous consultez d\'abord votre médecin traitant',
          '**HMO** : vous consultez dans un centre médical partenaire',
          '**Telmed** : vous appelez une hotline médicale avant de consulter',
          'Ces modèles offrent les mêmes prestations que le modèle libre',
        ],
      },
      {
        title: '4. Adaptez votre franchise',
        content: 'La franchise adulte va de 300 à 2\'500 CHF. Une franchise plus élevée réduit votre prime mensuelle mais augmente votre participation en cas de soins. Choisissez une franchise élevée si vous êtes en bonne santé et rarement malade.',
      },
    ],
    faq: [
      {
        question: 'Puis-je cumuler toutes ces économies ?',
        reponse: 'Oui ! Subside + caisse économique + modèle alternatif + franchise élevée = économie maximale. Un famille peut économiser plus de 5\'000 CHF/an en optimisant tous ces leviers.',
      },
      {
        question: 'Le changement de modèle impacte-t-il mon subside ?',
        reponse: 'Non, votre subside ne change pas si vous changez de modèle ou de franchise. Mais en choisissant un modèle moins cher, votre reste à charge diminue encore plus.',
      },
    ],
    cta: 'Optimisez vos primes : demandez votre subside',
    relatedSlugs: ['changer-assurance-maladie-subside-vaud', 'bareme-subside-vaud-2026'],
  },
  {
    slug: 'subside-vaud-remboursement-trop-percu',
    metaTitle: 'Remboursement Subside Trop Perçu Vaud 2026 | Que Faire ?',
    metaDescription: 'L\'OVAM vous demande de rembourser un subside trop perçu dans le Canton de Vaud ? Comprendre les motifs, contester et solutions de paiement.',
    h1: 'Remboursement de Subside Trop Perçu : Que Faire dans le Canton de Vaud ?',
    icon: '⚠️',
    intro: 'Il arrive que l\'OVAM demande le remboursement de subsides perçus en trop, généralement suite à une augmentation de revenus non annoncée ou une erreur dans le dossier. Voici comment comprendre et gérer cette situation.',
    sections: [
      {
        title: 'Pourquoi un remboursement est-il demandé ?',
        content: 'Les motifs les plus fréquents :',
        liste: [
          '**Augmentation de revenus** non annoncée à l\'OVAM (>20%)',
          '**Changement de situation familiale** non déclaré (mariage, héritage)',
          '**Erreur dans la taxation fiscale** corrigée ultérieurement',
          '**Double perception** de prestations (PC + subside mal coordonnés)',
        ],
      },
      {
        title: 'Comment réagir',
        content: 'Si vous estimez que la demande de remboursement est injustifiée, **contactez immédiatement l\'OVAM** au 021 557 45 45 pour comprendre le détail du calcul. Réunissez vos justificatifs (anciennes attestations de salaire, changement de situation) et demandez une révision du dossier. Vous pouvez aussi vous faire accompagner gratuitement par le Centre Social Protestant ou Caritas Vaud.',
      },
      {
        title: 'Facilités de paiement',
        content: 'Si le remboursement est justifié mais que vous ne pouvez pas payer en une fois, contactez l\'OVAM pour demander un **plan de paiement échelonné**. En cas de situation financière difficile, une remise de dette partielle ou totale peut être envisagée.',
      },
    ],
    faq: [
      {
        question: 'Quel est le délai de prescription pour le remboursement ?',
        reponse: 'L\'OVAM peut demander le remboursement des subsides perçus en trop sur une période allant jusqu\'à 5 ans en arrière. Passé ce délai, la créance est prescrite.',
      },
      {
        question: 'Le remboursement peut-il être déduit de mon futur subside ?',
        reponse: 'Oui, l\'OVAM peut retenir une partie de votre subside actuel pour rembourser le trop-perçu. Le montant retenu est limité pour ne pas vous mettre en difficulté financière.',
      },
    ],
    cta: 'Besoin d\'aide avec un remboursement de subside ?',
    relatedSlugs: ['recours-refus-subside-vaud', 'actualisation-financiere-subside-vaud'],
  },

  // ─────────────────────────────────────────────
  // BLOC 5 : QUESTIONS "COMBIEN" & COMPARAISONS (4 pages)
  // ─────────────────────────────────────────────
  {
    slug: 'combien-subside-vaud-par-mois',
    metaTitle: 'Combien de Subside par Mois à Vaud 2026 | Montant Selon Revenu',
    metaDescription: 'Combien de subside assurance maladie recevez-vous par mois dans le Canton de Vaud ? De 30 à 331 CHF selon votre revenu. Exemples concrets 2026.',
    h1: 'Combien de Subside Assurance Maladie par Mois dans le Canton de Vaud ?',
    icon: '💵',
    intro: 'Le subside mensuel dans le Canton de Vaud varie de 30 CHF (revenu proche du plafond) à 331 CHF (revenus les plus modestes) par personne. Voici des exemples concrets selon différents profils.',
    sections: [
      {
        title: 'Fourchette des montants 2026',
        content: 'Le subside 2026 se situe entre :',
        liste: [
          '**30 CHF/mois** : subside minimum (RDU proche du plafond)',
          '**331 CHF/mois** : subside maximum (revenus les plus bas)',
          '**Le subside représente 4% à 60%** de la prime de référence cantonale',
          'Le calcul est **progressif** : plus votre revenu est bas, plus le subside est élevé',
        ],
      },
      {
        title: 'Exemples concrets',
        content: 'Voici des estimations indicatives pour différents profils (montants approximatifs) :',
        liste: [
          '**Étudiant sans revenu** : ~250-331 CHF/mois',
          '**Personne seule, 40\'000 CHF/an** : ~80-120 CHF/mois',
          '**Couple avec 2 enfants, 75\'000 CHF/an** : ~100-180 CHF/mois (par personne)',
          '**Retraité seul, AVS + petit 2e pilier** : ~150-250 CHF/mois',
          '**Chômeur, indemnités 3\'000 CHF/mois** : ~200-280 CHF/mois',
        ],
      },
      {
        title: 'Le subside pour toute la famille',
        content: 'N\'oubliez pas que chaque membre de la famille peut recevoir son propre subside. Une famille de 4 personnes peut recevoir jusqu\'à **1\'324 CHF/mois au total** (4 × 331 CHF). C\'est une économie de **15\'888 CHF par an** sur vos primes d\'assurance.',
      },
    ],
    faq: [
      {
        question: 'Le montant peut-il changer en cours d\'année ?',
        reponse: 'Le montant est fixé pour l\'année (janvier à décembre). Il ne change qu\'en cas d\'actualisation financière (baisse/hausse de revenus >20%) ou au renouvellement annuel en octobre.',
      },
      {
        question: 'Le subside est-il imposable ?',
        reponse: 'Non, le subside assurance maladie n\'est pas un revenu imposable. Il réduit directement votre prime, ce qui réduit aussi votre déduction fiscale pour primes d\'assurance.',
      },
    ],
    cta: 'Calculez votre subside mensuel',
    relatedSlugs: ['bareme-subside-vaud-2026', 'calculer-subside-vaud-rdu'],
  },
  {
    slug: 'subside-vaud-region-1-region-2',
    metaTitle: 'Subside Vaud Région 1 vs Région 2 | Différence Primes 2026',
    metaDescription: 'Votre commune est en Région 1 ou Région 2 dans le Canton de Vaud ? Impact sur vos primes d\'assurance maladie et votre subside 2026.',
    h1: 'Régions de Primes dans le Canton de Vaud : Impact sur Votre Subside',
    icon: '🗺️',
    intro: 'Le Canton de Vaud est divisé en deux régions de primes d\'assurance-maladie. Votre région de résidence influence le montant de vos primes et donc potentiellement votre subside.',
    sections: [
      {
        title: 'Région 1 : primes plus élevées',
        content: 'La Région 1 regroupe les zones urbaines et périurbaines où les coûts de santé sont plus élevés :',
        liste: [
          '**Lausanne** et Ouest lausannois (Renens, Prilly, Ecublens, Crissier)',
          '**Nyon** et La Côte (Morges, Rolle, Gland)',
          '**Lavaux** (Pully, Lutry)',
          '**Riviera** (Vevey, Montreux, La Tour-de-Peilz)',
        ],
      },
      {
        title: 'Région 2 : primes plus basses',
        content: 'La Région 2 regroupe les zones rurales et semi-urbaines :',
        liste: [
          '**Chablais** (Aigle, Bex, Villeneuve)',
          '**Pays d\'Enhaut** (Château-d\'Oex)',
          '**Nord vaudois** (Yverdon-les-Bains, Orbe, Payerne)',
          '**Broye**, Vully, Gros-de-Vaud, Oron, Cossonay',
        ],
      },
      {
        title: 'Impact sur le subside',
        content: 'Le subside est calculé en pourcentage de la **prime de référence** de votre région. En Région 1, les primes (et donc la prime de référence) sont plus élevées, ce qui peut donner un subside légèrement plus élevé en valeur absolue. Cependant, le reste à charge peut aussi être plus important.',
      },
    ],
    faq: [
      {
        question: 'Je déménage de Région 2 en Région 1, mon subside change-t-il ?',
        reponse: 'Oui, votre subside sera recalculé selon la prime de référence de votre nouvelle région. Annoncez votre déménagement à l\'OVAM.',
      },
      {
        question: 'Puis-je m\'assurer dans la région de mon lieu de travail ?',
        reponse: 'Non, la région de primes est déterminée par votre commune de résidence (domicile), pas par votre lieu de travail.',
      },
    ],
    cta: 'Vérifiez votre subside selon votre région',
    relatedSlugs: ['calculer-subside-vaud-rdu', 'economiser-prime-assurance-maladie-vaud'],
  },
  {
    slug: 'subside-vaud-vs-autres-cantons',
    metaTitle: 'Subside Vaud vs Autres Cantons Suisses 2026 | Comparaison',
    metaDescription: 'Comment le subside du Canton de Vaud se compare-t-il aux autres cantons suisses ? Montants, conditions et particularités vaudoises 2026.',
    h1: 'Subside Vaud vs Autres Cantons : Comment se Compare le Système Vaudois ?',
    icon: '🇨🇭',
    intro: 'Chaque canton suisse a son propre système de subsides. Avec un budget dépassant 1 milliard de CHF en 2026, le Canton de Vaud est l\'un des cantons les plus généreux. Voici comment il se compare.',
    sections: [
      {
        title: 'Budget record de plus d\'un milliard',
        content: 'En 2026, le budget cantonal vaudois pour les subsides dépasse pour la première fois le **milliard de francs**. Environ **306\'000 personnes** (36% de la population) en bénéficient. C\'est l\'un des taux les plus élevés de Suisse.',
      },
      {
        title: 'Particularités du système vaudois',
        content: 'Le Canton de Vaud se distingue par :',
        liste: [
          'L\'objectif de **limiter les primes à 10% du revenu** (taux d\'effort)',
          'Un système de **subside spécifique** complémentaire si le taux d\'effort dépasse 10%',
          'Le **renouvellement automatique** en octobre chaque année',
          'La possibilité d\'**actualisation financière rapide** en cas de changement',
          'Des **déductions généreuses** pour familles (1\'300 CHF/enfant)',
        ],
      },
      {
        title: 'Comparaison avec Genève et autres cantons',
        content: 'À Genève, le subside est plafonné différemment et le système de calcul diffère. Le Canton de Vaud est réputé pour son système relativement accessible avec des plafonds de revenus parmi les plus élevés de Suisse romande.',
      },
    ],
    faq: [
      {
        question: 'Je déménage d\'un autre canton à Vaud, que faire ?',
        reponse: 'Votre subside de l\'ancien canton cessera automatiquement. Déposez une nouvelle demande auprès de l\'OVAM dès votre installation à Vaud avec votre dernière taxation fiscale.',
      },
      {
        question: 'Le subside vaudois est-il le plus élevé de Suisse ?',
        reponse: 'En valeur absolue, les cantons avec les primes les plus élevées (Genève, Bâle-Ville) ont des subsides maximaux plus élevés. Mais en proportion et en nombre de bénéficiaires, Vaud est parmi les plus généreux.',
      },
    ],
    cta: 'Profitez du système vaudois : demandez votre subside',
    relatedSlugs: ['bareme-subside-vaud-2026', 'plafond-revenu-subside-vaud'],
  },
  {
    slug: 'hausse-primes-assurance-maladie-vaud-2026',
    metaTitle: 'Hausse des Primes Assurance Maladie Vaud 2026 | +4,9% Que Faire ?',
    metaDescription: 'Les primes d\'assurance maladie augmentent de 4,9% en 2026 dans le Canton de Vaud. Comment compenser avec le subside et d\'autres économies.',
    h1: 'Hausse des Primes d\'Assurance Maladie 2026 dans le Canton de Vaud : Que Faire ?',
    icon: '📈',
    intro: 'En 2026, les primes d\'assurance-maladie augmentent en moyenne de **4,9%** dans le Canton de Vaud, soit environ 20,70 CHF de plus par mois. Voici comment limiter l\'impact sur votre budget.',
    sections: [
      {
        title: 'Détail de la hausse 2026',
        content: 'La hausse des primes dans le Canton de Vaud par catégorie :',
        liste: [
          '**Adultes (26+)** : +4,3% soit +21,80 CHF/mois en moyenne',
          '**Jeunes adultes (19-25)** : +3,4% soit +12,10 CHF/mois',
          '**Enfants (0-18)** : +5,2% soit +7 CHF/mois',
          'Depuis 2020, les primes ont augmenté de **31%** cumulés',
        ],
      },
      {
        title: 'Le subside ne compense pas entièrement',
        content: 'Entre 2020 et 2026, les primes ont augmenté de 31% mais les subsides seulement de 26%. Cet écart signifie que même les bénéficiaires de subside ressentent partiellement la hausse. D\'où l\'importance de combiner le subside avec d\'autres mesures d\'économie.',
      },
      {
        title: 'Actions concrètes pour 2026',
        content: 'Pour compenser la hausse :',
        liste: [
          '**Vérifiez votre droit au subside** : 36% des Vaudois en bénéficient',
          '**Comparez les caisses** : les écarts sont considérables à prestations identiques',
          '**Passez à un modèle alternatif** (HMO, médecin de famille, Telmed) : -10 à -25%',
          '**Augmentez votre franchise** si vous êtes rarement malade',
          '**Résiliez avant le 30 novembre** pour changer au 1er janvier',
        ],
      },
    ],
    faq: [
      {
        question: 'Mon subside va-t-il augmenter avec la hausse des primes ?',
        reponse: 'Le barème des subsides est revu chaque année. Le Conseil d\'État ajuste les montants, mais pas toujours dans les mêmes proportions que la hausse des primes.',
      },
      {
        question: 'La hausse va-t-elle continuer en 2027 ?',
        reponse: 'Les prévisions indiquent une poursuite de la hausse, bien que le rythme puisse varier. D\'où l\'importance d\'optimiser votre situation dès maintenant.',
      },
    ],
    cta: 'Compensez la hausse : demandez votre subside maintenant',
    relatedSlugs: ['economiser-prime-assurance-maladie-vaud', 'bareme-subside-vaud-2026'],
  },
];
