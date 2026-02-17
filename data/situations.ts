/**
 * Données fact-checkées depuis les sources officielles du Canton de Vaud
 * Sources:
 * - https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie
 * - https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie/conditions-doctroi
 * - https://www.vd.ch/fileadmin/user_upload/themes/social/Prestations__assurance_et_soutien/Assurance_maladie/Subside/Dépliant_Notice_Subsides_26_-_3_WEB.pdf
 */

export interface Situation {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string;
  icon: string;
  eligibilite: {
    title: string;
    description: string;
    criteres: string[];
  };
  montants: {
    title: string;
    description: string;
    details: string[];
  };
  documents: {
    title: string;
    liste: string[];
  };
  process: {
    title: string;
    etapes: { numero: number; titre: string; description: string; }[];
  };
  faq: { question: string; reponse: string; }[];
  cta: string;
}

export const situations: Situation[] = [
  {
    slug: 'etudiant',
    title: 'Subside Assurance Maladie pour Étudiants',
    metaTitle: 'Subside Assurance Maladie Étudiant Vaud 2026 | VD-Subside',
    metaDescription: 'Subside assurance maladie pour étudiants dans le Canton de Vaud. Conditions, montants 2026 et procédure de demande. Jusqu\'à 331 CHF/mois.',
    h1: 'Subside Assurance Maladie pour Étudiants dans le Canton de Vaud',
    introduction: 'En tant qu\'étudiant dans le Canton de Vaud, vous pouvez bénéficier d\'un subside pour réduire vos primes d\'assurance-maladie. Le montant dépend de votre situation financière et de celle de vos parents si vous êtes encore à leur charge.',
    icon: '🎓',
    eligibilite: {
      title: 'Conditions d\'éligibilité pour étudiants',
      description: 'Le système de subside pour étudiants prend en compte votre âge et votre dépendance financière :',
      criteres: [
        '**18-25 ans en première formation** : Le calcul inclut votre revenu personnel plus un pourcentage du revenu de vos parents si vous gagnez moins de 1\'500 CHF net/mois et restez financièrement dépendant',
        '**Plus de 26 ans ou deuxième formation** : Seul votre propre revenu détermine l\'éligibilité (plus celui de votre conjoint(e) le cas échéant)',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
        'Résidence dans le Canton de Vaud requise',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois',
        '**Subside maximum** : 331 CHF par mois',
        'Le montant exact est calculé progressivement selon votre **revenu déterminant**',
        'À partir de 40\'000 CHF de revenu déterminant, vous recevez le subside minimum (30 CHF)',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Attestation d\'études ou certificat de scolarité',
        'Copie de votre police d\'assurance-maladie',
        'Dernière décision de taxation fiscale (la vôtre et/ou celle de vos parents selon votre situation)',
        'Justificatifs de revenus actuels si vos finances ont changé de plus de 20% (fiches de salaire, décision de rente, extraits bancaires)',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Vérifiez votre éligibilité',
          description: 'Calculez votre revenu déterminant selon votre situation (avec ou sans revenus parentaux). Remplissez notre formulaire ci-dessous pour une évaluation personnalisée.',
        },
        {
          numero: 2,
          titre: 'Préparez vos documents',
          description: 'Rassemblez votre attestation d\'études, votre police d\'assurance-maladie et vos justificatifs de revenus.',
        },
        {
          numero: 3,
          titre: 'Déposez votre demande',
          description: 'Soumettez votre demande en ligne sur prestations.vd.ch ou auprès de votre agence d\'assurances sociales régionale. Notre équipe peut vous accompagner dans cette démarche.',
        },
        {
          numero: 4,
          titre: 'Recevez votre subside',
          description: 'Le subside débute le premier jour du deuxième mois qui suit le dépôt de votre demande. Il se renouvelle automatiquement chaque année si votre situation fiscale ne change pas.',
        },
      ],
    },
    faq: [
      {
        question: 'Suis-je éligible si mes parents habitent hors du Canton de Vaud ?',
        reponse: 'Oui, tant que vous résidez et êtes étudiant dans le Canton de Vaud. Le calcul tiendra compte de votre situation personnelle et éventuellement des revenus de vos parents si vous êtes à leur charge.',
      },
      {
        question: 'Que se passe-t-il si je trouve un emploi étudiant ?',
        reponse: 'Si vos revenus augmentent ou diminuent de plus de 20%, vous devez annoncer ce changement à l\'Office Vaudois de l\'Assurance-Maladie (OVAM). Le montant de votre subside sera alors recalculé.',
      },
      {
        question: 'Dois-je refaire une demande chaque année ?',
        reponse: 'Non. Votre subside se renouvelle automatiquement chaque année en octobre sur la base de votre dernière taxation fiscale, sauf si vous annoncez un changement de situation important.',
      },
      {
        question: 'Puis-je cumuler le subside avec d\'autres aides ?',
        reponse: 'Oui, le subside à l\'assurance-maladie est cumulable avec d\'autres prestations sociales comme les bourses d\'études.',
      },
    ],
    cta: 'Faites votre demande de subside étudiant maintenant',
  },
  {
    slug: 'chomage',
    title: 'Subside Assurance Maladie au Chômage',
    metaTitle: 'Subside Assurance Maladie Chômage Vaud 2026 | Aide Financière',
    metaDescription: 'Subside assurance maladie pour personnes au chômage dans le Canton de Vaud. Conditions, montants 2026 et démarches. Jusqu\'à 331 CHF/mois.',
    h1: 'Subside Assurance Maladie pour Personnes au Chômage',
    introduction: 'Si vous êtes au chômage dans le Canton de Vaud, vous avez très probablement droit à un subside pour alléger vos primes d\'assurance-maladie. Le système cantonal prend en compte la baisse de vos revenus.',
    icon: '💼',
    eligibilite: {
      title: 'Conditions d\'éligibilité au chômage',
      description: 'En période de chômage, vos droits au subside sont calculés ainsi :',
      criteres: [
        'Vos **indemnités de chômage** sont prises en compte dans le calcul du revenu déterminant',
        'Si vos revenus ont **baissé de plus de 20%**, vous devez annoncer votre changement de situation pour actualisation',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
        'Résidence dans le Canton de Vaud requise',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois',
        '**Subside maximum** : 331 CHF par mois',
        'Le montant est calculé progressivement selon votre **revenu déterminant actuel**',
        'En cas de baisse de revenus importante (plus de 20%), votre subside peut être **recalculé et augmenté** sans attendre la prochaine taxation',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Copie de votre police d\'assurance-maladie',
        'Dernière décision de taxation fiscale',
        '**Attestation de l\'Office Régional de Placement (ORP)** confirmant votre statut de chômeur',
        'Justificatifs de vos indemnités de chômage actuelles',
        'Relevés bancaires récents si demandés',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Annoncez votre changement de situation',
          description: 'Dès que vous perdez votre emploi, annoncez ce changement à l\'OVAM (Office Vaudois de l\'Assurance-Maladie). Même si vous aviez déjà un subside, il sera recalculé selon vos nouveaux revenus.',
        },
        {
          numero: 2,
          titre: 'Rassemblez vos justificatifs',
          description: 'Préparez votre attestation ORP, vos décomptes d\'indemnités de chômage et votre police d\'assurance-maladie.',
        },
        {
          numero: 3,
          titre: 'Soumettez votre demande actualisée',
          description: 'Remplissez le formulaire d\'actualisation financière en ligne sur prestations.vd.ch ou contactez votre agence régionale. Notre équipe peut vous accompagner gratuitement.',
        },
        {
          numero: 4,
          titre: 'Recevez votre subside ajusté',
          description: 'Votre subside recalculé débute le premier jour du deuxième mois suivant votre demande d\'actualisation.',
        },
      ],
    },
    faq: [
      {
        question: 'Dois-je faire une nouvelle demande si je suis déjà bénéficiaire de subside ?',
        reponse: 'Oui, vous devez annoncer votre changement de situation (perte d\'emploi) à l\'OVAM. Votre subside sera alors recalculé sur la base de vos nouveaux revenus (indemnités de chômage), ce qui augmentera probablement le montant.',
      },
      {
        question: 'Les indemnités de chômage comptent-elles comme revenu ?',
        reponse: 'Oui, les indemnités de chômage sont prises en compte dans le calcul du revenu déterminant, mais elles sont généralement inférieures à votre salaire précédent, ce qui augmente votre droit au subside.',
      },
      {
        question: 'Que se passe-t-il si je retrouve un emploi ?',
        reponse: 'Vous devez annoncer ce changement à l\'OVAM dans les meilleurs délais. Si vos revenus augmentent de plus de 20%, votre subside sera recalculé. Une augmentation non annoncée peut entraîner une demande de remboursement.',
      },
      {
        question: 'Puis-je garder mon subside pendant toute la durée du chômage ?',
        reponse: 'Oui, tant que vous percevez des indemnités de chômage et que votre revenu déterminant reste éligible, vous conservez votre subside. Il se renouvelle automatiquement.',
      },
    ],
    cta: 'Demandez votre subside adapté au chômage',
  },
  {
    slug: 'retraite',
    title: 'Subside Assurance Maladie pour Retraités',
    metaTitle: 'Subside Assurance Maladie Retraité Vaud 2026 | AVS Rente',
    metaDescription: 'Subside assurance maladie pour retraités AVS dans le Canton de Vaud. Conditions, montants 2026 selon votre rente. Jusqu\'à 331 CHF/mois.',
    h1: 'Subside Assurance Maladie pour Retraités et Rentiers AVS',
    introduction: 'À la retraite dans le Canton de Vaud, vous pouvez bénéficier d\'un subside pour réduire vos primes d\'assurance-maladie. Le montant dépend de vos rentes AVS, LPP et de votre fortune.',
    icon: '👴',
    eligibilite: {
      title: 'Conditions d\'éligibilité pour retraités',
      description: 'Le système de subside pour retraités prend en compte :',
      criteres: [
        'Vos **rentes AVS et LPP** (2e pilier) comptent dans le revenu déterminant',
        'Votre **fortune** est prise en compte : au-delà de 59\'000 CHF (personne seule) ou 118\'000 CHF (couple), 6,7% (1/15) de la fortune excédentaire s\'ajoute au revenu',
        'Exemption de **300\'000 CHF** pour votre résidence principale (ne peut pas dépasser la valeur réelle du bien)',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
        'Résidence dans le Canton de Vaud requise',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois',
        '**Subside maximum** : 331 CHF par mois',
        'Le montant est calculé progressivement selon votre **revenu déterminant** (rentes + fortune)',
        'À partir de 40\'000 CHF de revenu déterminant, vous recevez le subside minimum (30 CHF)',
        'Déductions : **2\'200 CHF** (personne seule) ou **4\'400 CHF** (couple) forfaitaires pour primes d\'assurance',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Copie de votre police d\'assurance-maladie',
        'Dernière décision de taxation fiscale',
        '**Décision de rente AVS** (certificat de rente)',
        'Décision de rente LPP (2e pilier) si applicable',
        'Justificatifs de fortune (extraits bancaires, attestations immobilières) si demandés',
        'Attestation de valeur locative pour votre résidence principale',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Évaluez votre éligibilité',
          description: 'Calculez votre revenu déterminant en additionnant vos rentes AVS, LPP et éventuellement 6,7% de votre fortune excédentaire. Remplissez notre formulaire pour une évaluation personnalisée.',
        },
        {
          numero: 2,
          titre: 'Rassemblez vos documents',
          description: 'Préparez vos décisions de rentes, votre police d\'assurance-maladie et votre dernière taxation fiscale.',
        },
        {
          numero: 3,
          titre: 'Déposez votre demande',
          description: 'Soumettez votre demande en ligne sur prestations.vd.ch ou auprès de votre agence d\'assurances sociales. Notre équipe vous accompagne gratuitement dans vos démarches.',
        },
        {
          numero: 4,
          titre: 'Recevez votre subside',
          description: 'Le subside débute le premier jour du deuxième mois suivant votre demande. Il se renouvelle automatiquement chaque année si votre situation ne change pas.',
        },
      ],
    },
    faq: [
      {
        question: 'Ma rente LPP (2e pilier) est-elle comptée dans le revenu ?',
        reponse: 'Oui, toutes vos rentes (AVS, LPP, 3e pilier) sont prises en compte dans le calcul du revenu déterminant pour le subside.',
      },
      {
        question: 'Ma maison compte-t-elle dans la fortune ?',
        reponse: 'Votre résidence principale bénéficie d\'une exemption de 300\'000 CHF (ne peut pas dépasser la valeur réelle). Seule la partie excédant cette exemption est comptée dans votre fortune.',
      },
      {
        question: 'Que se passe-t-il si je reçois un héritage ?',
        reponse: 'Si votre fortune augmente significativement (plus de 20%), vous devez l\'annoncer à l\'OVAM. Votre subside sera recalculé. Une augmentation non annoncée peut entraîner une demande de remboursement.',
      },
      {
        question: 'Mon conjoint et moi avons-nous droit à deux subsides ?',
        reponse: 'Le calcul se fait pour le ménage (couple). Les revenus et fortunes sont additionnés avec des déductions spécifiques pour couples (4\'400 CHF au lieu de 2\'200 CHF).',
      },
    ],
    cta: 'Demandez votre subside retraité maintenant',
  },
  {
    slug: 'famille-monoparentale',
    title: 'Subside Assurance Maladie Famille Monoparentale',
    metaTitle: 'Subside Assurance Maladie Famille Monoparentale Vaud 2026',
    metaDescription: 'Subside assurance maladie pour familles monoparentales dans le Canton de Vaud. Conditions spécifiques, montants 2026 et aide renforcée.',
    h1: 'Subside Assurance Maladie pour Familles Monoparentales',
    introduction: 'En tant que parent seul avec enfants dans le Canton de Vaud, vous bénéficiez de déductions fiscales spécifiques qui augmentent vos droits au subside. Le système prend en compte votre situation familiale particulière.',
    icon: '👨‍👧',
    eligibilite: {
      title: 'Conditions d\'éligibilité pour familles monoparentales',
      description: 'Le système de subside pour parents seuls inclut des déductions renforcées :',
      criteres: [
        'Déduction forfaitaire de **2\'200 CHF** pour vous (parent seul)',
        'Déduction supplémentaire de **1\'300 CHF par enfant à charge**',
        'Déductions complémentaires de **6\'000 à 13\'000 CHF** selon le nombre d\'enfants',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
        'Chaque enfant à charge peut également bénéficier de son propre subside',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois (par personne)',
        '**Subside maximum** : 331 CHF par mois (par personne)',
        'Le calcul prend en compte les **déductions familiales spécifiques** pour parents seuls',
        'Possibilité de subside pour **chaque membre de la famille** (parent + enfants)',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Copie de votre police d\'assurance-maladie (la vôtre et celle de vos enfants)',
        'Dernière décision de taxation fiscale',
        'Attestation de situation familiale (état civil)',
        'Justificatifs de garde des enfants si demandés',
        'Justificatifs de revenus actuels si changement de plus de 20%',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Calculez vos droits',
          description: 'En tant que parent seul, vous bénéficiez de déductions importantes. Remplissez notre formulaire pour une évaluation personnalisée tenant compte de votre nombre d\'enfants.',
        },
        {
          numero: 2,
          titre: 'Préparez vos documents familiaux',
          description: 'Rassemblez vos polices d\'assurance (pour vous et vos enfants), votre taxation fiscale et attestation de situation familiale.',
        },
        {
          numero: 3,
          titre: 'Soumettez votre demande',
          description: 'Déposez votre demande en ligne sur prestations.vd.ch ou contactez votre agence régionale. Notre équipe vous accompagne gratuitement.',
        },
        {
          numero: 4,
          titre: 'Recevez vos subsides',
          description: 'Les subsides (pour vous et vos enfants) débutent le premier jour du deuxième mois suivant la demande. Renouvellement automatique chaque année.',
        },
      ],
    },
    faq: [
      {
        question: 'Mes enfants ont-ils droit à un subside séparé ?',
        reponse: 'Oui, chaque enfant à charge peut bénéficier de son propre subside (jusqu\'à 331 CHF/mois par enfant) selon le revenu déterminant du ménage.',
      },
      {
        question: 'Les pensions alimentaires sont-elles comptées dans le revenu ?',
        reponse: 'Oui, les pensions alimentaires reçues pour vous ou vos enfants sont prises en compte dans le calcul du revenu déterminant.',
      },
      {
        question: 'Que se passe-t-il si ma situation familiale change ?',
        reponse: 'Tout changement (nouveau partenaire, enfant supplémentaire, etc.) doit être annoncé à l\'OVAM dans les meilleurs délais pour recalcul de vos droits.',
      },
    ],
    cta: 'Demandez votre subside famille monoparentale',
  },
  {
    slug: 'apprenti',
    title: 'Subside Assurance Maladie pour Apprentis',
    metaTitle: 'Subside Assurance Maladie Apprenti Vaud 2026 | Formation CFC',
    metaDescription: 'Subside assurance maladie pour apprentis en formation CFC dans le Canton de Vaud. Conditions, montants 2026 et démarches simplifiées.',
    h1: 'Subside Assurance Maladie pour Apprentis et Personnes en Formation',
    introduction: 'En apprentissage dans le Canton de Vaud, vous pouvez bénéficier d\'un subside adapté à votre situation. Le système prend en compte votre salaire d\'apprenti et éventuellement les revenus de vos parents selon votre âge.',
    icon: '🔧',
    eligibilite: {
      title: 'Conditions d\'éligibilité pour apprentis',
      description: 'Le système de subside pour apprentis fonctionne comme suit :',
      criteres: [
        '**18-25 ans en première formation** : Si vous gagnez moins de 1\'500 CHF net/mois, le calcul inclut votre revenu plus un pourcentage du revenu parental',
        '**Plus de 26 ans ou deuxième formation** : Seul votre salaire d\'apprenti détermine l\'éligibilité',
        'Votre **salaire d\'apprenti** (généralement modeste) favorise un subside élevé',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois',
        '**Subside maximum** : 331 CHF par mois',
        'Avec un **salaire d\'apprenti modeste**, vous avez généralement droit au **subside maximum ou proche du maximum**',
        'Le calcul tient compte de votre revenu limité pendant la formation',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Copie de votre police d\'assurance-maladie',
        '**Contrat d\'apprentissage** ou attestation de formation',
        'Dernière décision de taxation fiscale (la vôtre et/ou celle de vos parents selon votre âge)',
        'Fiches de salaire récentes d\'apprenti',
        'Attestation d\'inscription à l\'école professionnelle',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Vérifiez votre situation',
          description: 'Selon votre âge (18-25 ans ou plus), le calcul diffère. Avec un salaire d\'apprenti, vous êtes très probablement éligible au subside maximum.',
        },
        {
          numero: 2,
          titre: 'Rassemblez vos documents de formation',
          description: 'Préparez votre contrat d\'apprentissage, vos fiches de salaire et votre police d\'assurance-maladie.',
        },
        {
          numero: 3,
          titre: 'Déposez votre demande',
          description: 'Soumettez en ligne sur prestations.vd.ch ou via votre agence régionale. Notre équipe vous aide gratuitement dans vos démarches.',
        },
        {
          numero: 4,
          titre: 'Profitez de votre subside',
          description: 'Le subside débute dès le deuxième mois suivant votre demande et se renouvelle automatiquement pendant toute votre formation.',
        },
      ],
    },
    faq: [
      {
        question: 'Mon salaire d\'apprenti augmente chaque année, dois-je annoncer ?',
        reponse: 'Oui, si l\'augmentation dépasse 20%, vous devez l\'annoncer à l\'OVAM. Toutefois, même avec une augmentation, votre salaire d\'apprenti reste généralement éligible au subside.',
      },
      {
        question: 'Que se passe-t-il après mon CFC ?',
        reponse: 'Dès que vous terminez votre apprentissage et trouvez un emploi avec un salaire complet, vous devez annoncer ce changement. Votre subside sera recalculé selon votre nouveau revenu.',
      },
      {
        question: 'Puis-je cumuler avec d\'autres aides à la formation ?',
        reponse: 'Oui, le subside à l\'assurance-maladie est cumulable avec les bourses d\'études, les aides cantonales et les allocations familiales.',
      },
    ],
    cta: 'Demandez votre subside apprenti maintenant',
  },
  {
    slug: 'independant',
    title: 'Subside Assurance Maladie pour Indépendants',
    metaTitle: 'Subside Assurance Maladie Indépendant Vaud 2026 | Auto-Entrepreneur',
    metaDescription: 'Subside assurance maladie pour indépendants et auto-entrepreneurs dans le Canton de Vaud. Calcul selon revenus réels, montants 2026.',
    h1: 'Subside Assurance Maladie pour Travailleurs Indépendants',
    introduction: 'En tant qu\'indépendant ou auto-entrepreneur dans le Canton de Vaud, vous avez droit au subside selon vos revenus nets d\'activité indépendante. Le système prend en compte vos charges professionnelles.',
    icon: '💼',
    eligibilite: {
      title: 'Conditions d\'éligibilité pour indépendants',
      description: 'Le système de subside pour indépendants fonctionne ainsi :',
      criteres: [
        'Votre **revenu net d\'activité indépendante** (après déduction des charges) est pris en compte',
        'En cas de **baisse de revenus de plus de 20%**, vous pouvez demander une actualisation sans attendre la prochaine taxation',
        'Les **rachats 2e pilier** sont ajoutés au revenu (avec abattement de 20\'000 CHF)',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois',
        '**Subside maximum** : 331 CHF par mois',
        'Le calcul se base sur votre **dernière taxation fiscale définitive**',
        'En cas de **baisse d\'activité**, possibilité d\'actualisation rapide de vos droits',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Copie de votre police d\'assurance-maladie',
        'Dernière décision de taxation fiscale (avec revenus d\'activité indépendante)',
        '**Attestation AVS** confirmant votre statut d\'indépendant',
        'Justificatifs de revenus actuels si baisse de plus de 20% (comptes d\'exploitation récents, chiffre d\'affaires)',
        'Extrait du registre du commerce si société',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Évaluez vos revenus nets',
          description: 'Calculez votre revenu déterminant basé sur votre dernière taxation (revenu net après charges professionnelles). Remplissez notre formulaire pour une estimation.',
        },
        {
          numero: 2,
          titre: 'Préparez vos justificatifs',
          description: 'Rassemblez votre taxation fiscale, votre attestation AVS indépendant et votre police d\'assurance-maladie.',
        },
        {
          numero: 3,
          titre: 'Déposez votre demande',
          description: 'Soumettez en ligne sur prestations.vd.ch ou contactez votre agence régionale. Notre équipe vous accompagne gratuitement.',
        },
        {
          numero: 4,
          titre: 'Gérez vos actualisations',
          description: 'Le subside débute le deuxième mois suivant votre demande. En cas de changement de revenus (>20%), annoncez-le rapidement pour ajustement.',
        },
      ],
    },
    faq: [
      {
        question: 'Mon activité vient de démarrer, puis-je avoir un subside ?',
        reponse: 'Oui, même en début d\'activité. Si vous n\'avez pas encore de taxation fiscale avec revenus indépendants, fournissez vos justificatifs de revenus actuels (chiffre d\'affaires, charges, salaire tiré).',
      },
      {
        question: 'Que se passe-t-il en cas de mauvaise année financière ?',
        reponse: 'Si vos revenus baissent de plus de 20%, annoncez-le à l\'OVAM avec justificatifs (comptes, CA). Votre subside sera recalculé et augmenté pour refléter votre situation actuelle.',
      },
      {
        question: 'Mes charges professionnelles sont-elles déduites ?',
        reponse: 'Oui, le revenu pris en compte est votre **revenu net** après déduction de vos charges professionnelles réelles (selon votre déclaration fiscale).',
      },
    ],
    cta: 'Demandez votre subside indépendant',
  },
  {
    slug: 'temps-partiel',
    title: 'Subside Assurance Maladie Temps Partiel',
    metaTitle: 'Subside Assurance Maladie Temps Partiel Vaud 2026 | 50% 80%',
    metaDescription: 'Subside assurance maladie pour travailleurs à temps partiel dans le Canton de Vaud. Calcul adapté, montants 2026 selon taux d\'activité.',
    h1: 'Subside Assurance Maladie pour Travailleurs à Temps Partiel',
    introduction: 'Vous travaillez à temps partiel dans le Canton de Vaud ? Vous avez droit au subside selon votre revenu réel. Un taux d\'activité réduit (50%, 60%, 80%) favorise un subside plus élevé.',
    icon: '⏰',
    eligibilite: {
      title: 'Conditions d\'éligibilité à temps partiel',
      description: 'Le système de subside pour temps partiel prend en compte :',
      criteres: [
        'Votre **revenu effectif** selon votre taux d\'activité (ex: 50% = environ 50% du salaire complet)',
        'Un **revenu plus bas** qu\'à plein temps augmente mécaniquement vos droits au subside',
        'Le calcul additionne tous vos revenus (si vous cumulez plusieurs emplois à temps partiel)',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois',
        '**Subside maximum** : 331 CHF par mois',
        'Avec un **temps partiel**, votre revenu réduit vous donne souvent droit à un **subside élevé**',
        'Le montant exact dépend de votre revenu annuel total (pas de votre taux d\'activité en soi)',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Copie de votre police d\'assurance-maladie',
        'Dernière décision de taxation fiscale',
        '**Attestation(s) d\'employeur** mentionnant votre taux d\'activité',
        'Fiches de salaire récentes (tous vos emplois si vous en cumulez plusieurs)',
        'Justificatifs de revenus actuels si changement de taux (passage de 100% à 80% par exemple)',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Calculez votre revenu annuel',
          description: 'Additionnez tous vos revenus à temps partiel. Un revenu plus bas qu\'un plein temps vous donne généralement droit à un subside confortable.',
        },
        {
          numero: 2,
          titre: 'Préparez vos attestations',
          description: 'Rassemblez vos fiches de salaire, attestations d\'employeur avec taux d\'activité, et votre taxation fiscale.',
        },
        {
          numero: 3,
          titre: 'Soumettez votre demande',
          description: 'Déposez en ligne sur prestations.vd.ch ou via votre agence régionale. Notre équipe vous guide gratuitement.',
        },
        {
          numero: 4,
          titre: 'Annoncez vos changements de taux',
          description: 'Si votre taux d\'activité change (ex: passage de 50% à 80%), annoncez-le à l\'OVAM pour recalcul de vos droits.',
        },
      ],
    },
    faq: [
      {
        question: 'Je travaille à 60%, ai-je droit à un subside complet ?',
        reponse: 'Le subside n\'est pas proportionnel au taux d\'activité. Il dépend de votre revenu total. Avec un 60%, votre revenu plus bas augmente vos droits au subside (potentiellement le maximum si vos revenus sont modestes).',
      },
      {
        question: 'Je cumule 2 emplois à temps partiel, comment ça se passe ?',
        reponse: 'Tous vos revenus sont additionnés pour le calcul du revenu déterminant. Fournissez toutes vos fiches de salaire et attestations d\'employeur.',
      },
      {
        question: 'Que faire si je passe de temps partiel à temps plein ?',
        reponse: 'Annoncez ce changement à l\'OVAM si vos revenus augmentent de plus de 20%. Votre subside sera recalculé (probablement à la baisse vu l\'augmentation de revenus).',
      },
    ],
    cta: 'Demandez votre subside temps partiel',
  },
  {
    slug: 'famille-nombreuse',
    title: 'Subside Assurance Maladie Famille Nombreuse',
    metaTitle: 'Subside Assurance Maladie Famille Nombreuse Vaud 2026 | 3+ Enfants',
    metaDescription: 'Subside assurance maladie pour familles nombreuses (3 enfants et plus) dans le Canton de Vaud. Déductions renforcées, montants 2026.',
    h1: 'Subside Assurance Maladie pour Familles Nombreuses',
    introduction: 'Famille avec 3 enfants ou plus dans le Canton de Vaud ? Vous bénéficiez de déductions fiscales importantes qui augmentent significativement vos droits au subside pour toute la famille.',
    icon: '👨‍👩‍👧‍👦',
    eligibilite: {
      title: 'Conditions d\'éligibilité pour familles nombreuses',
      description: 'Le système de subside pour familles nombreuses inclut :',
      criteres: [
        'Déduction forfaitaire de **4\'400 CHF** pour le couple',
        'Déduction de **1\'300 CHF par enfant à charge**',
        '**Déductions complémentaires progressives** : 6\'000 CHF (1 enfant), 9\'000 CHF (2 enfants), 13\'000 CHF (3+ enfants)',
        'Le subside vise à limiter vos charges d\'assurance-maladie à **maximum 10% de votre revenu déterminant**',
        '**Chaque membre de la famille** (parents + enfants) peut bénéficier de son propre subside',
      ],
    },
    montants: {
      title: 'Montants des subsides 2026',
      description: 'Les montants officiels pour l\'année 2026 sont :',
      details: [
        '**Subside minimum** : 30 CHF par mois (par personne)',
        '**Subside maximum** : 331 CHF par mois (par personne)',
        'Avec 3+ enfants, les **déductions cumulées** augmentent fortement vos droits',
        '**Exemple** : Famille de 5 personnes (2 parents + 3 enfants) peut recevoir jusqu\'à **1\'655 CHF/mois au total** (5 x 331 CHF)',
      ],
    },
    documents: {
      title: 'Documents nécessaires',
      liste: [
        'Copie des polices d\'assurance-maladie (de tous les membres de la famille)',
        'Dernière décision de taxation fiscale',
        'Attestation de composition du ménage (état civil)',
        'Livrets de famille ou actes de naissance des enfants',
        'Justificatifs de revenus actuels si changement de plus de 20%',
      ],
    },
    process: {
      title: 'Démarches pour obtenir votre subside',
      etapes: [
        {
          numero: 1,
          titre: 'Calculez vos déductions familiales',
          description: 'Avec 3+ enfants, vos déductions sont importantes (4\'400 + (3 x 1\'300) + 13\'000 = 22\'300 CHF minimum). Remplissez notre formulaire pour une estimation.',
        },
        {
          numero: 2,
          titre: 'Préparez vos documents familiaux',
          description: 'Rassemblez toutes les polices d\'assurance (parents + enfants), votre taxation fiscale et attestations familiales.',
        },
        {
          numero: 3,
          titre: 'Soumettez votre demande groupée',
          description: 'Déposez une demande pour toute la famille en ligne sur prestations.vd.ch ou via votre agence. Notre équipe vous accompagne.',
        },
        {
          numero: 4,
          titre: 'Recevez vos subsides familiaux',
          description: 'Les subsides (pour chaque membre) débutent le deuxième mois suivant la demande. Renouvellement automatique annuel.',
        },
      ],
    },
    faq: [
      {
        question: 'Chaque enfant a-t-il son propre subside ?',
        reponse: 'Oui, chaque enfant à charge peut recevoir son propre subside (jusqu\'à 331 CHF/mois par enfant) calculé selon le revenu déterminant du ménage avec déductions familiales.',
      },
      {
        question: 'Les allocations familiales comptent-elles dans le revenu ?',
        reponse: 'Oui, les allocations familiales sont prises en compte dans le revenu déterminant. Toutefois, les importantes déductions pour famille nombreuse compensent largement.',
      },
      {
        question: 'Que se passe-t-il quand un enfant devient majeur ?',
        reponse: 'À 18 ans, l\'enfant peut faire sa propre demande de subside (selon sa situation : études, emploi, etc.). Les déductions familiales pour cet enfant cessent dans votre calcul.',
      },
    ],
    cta: 'Demandez vos subsides famille nombreuse',
  },
];
