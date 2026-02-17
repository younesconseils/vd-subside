# 📧 Configuration de la réception des leads

Ce guide explique comment configurer la réception des leads (demandes de subside) via email.

## 🎯 Solution actuelle : Resend

Le site utilise **Resend** pour envoyer les emails de notification quand quelqu'un remplit le formulaire.

### Pourquoi Resend ?
- ✅ **Gratuit** : 100 emails/jour (3000/mois)
- ✅ **Simple** : Configuration en 5 minutes
- ✅ **Fiable** : Taux de délivrabilité élevé
- ✅ **Pas de carte** : Pas besoin de CB pour commencer

---

## 📝 Configuration étape par étape

### 1. Créer un compte Resend

1. Aller sur [resend.com](https://resend.com)
2. Cliquer sur "Sign Up" (gratuit)
3. Créer un compte avec ton email

### 2. Obtenir ta clé API

1. Une fois connecté, aller dans **API Keys**
2. Cliquer sur **Create API Key**
3. Donner un nom : `VD-Subside Production`
4. Sélectionner les permissions : **Full Access** (ou juste "Sending access")
5. Copier la clé (elle commence par `re_...`)

### 3. Configurer Vercel

#### Option A : Via l'interface Vercel (Recommandé)

1. Aller sur [vercel.com](https://vercel.com)
2. Sélectionner ton projet **vd-subside**
3. Aller dans **Settings** → **Environment Variables**
4. Ajouter une nouvelle variable :
   - **Name** : `RESEND_API_KEY`
   - **Value** : Coller ta clé API (celle qui commence par `re_...`)
   - **Environments** : Cocher `Production`, `Preview`, `Development`
5. Cliquer sur **Save**

#### Option B : Via la ligne de commande

```bash
# Dans le dossier du projet
vercel env add RESEND_API_KEY
# Coller ta clé API quand demandé
# Sélectionner : Production, Preview, Development
```

### 4. Redéployer le site

```bash
# Dans le dossier du projet
npx vercel --prod
```

Ou via l'interface Vercel : **Deployments** → **Redeploy**

---

## ✅ Vérifier que ça marche

### Test 1 : Remplir un formulaire

1. Aller sur https://vd-subside.ch/demande
2. Remplir le formulaire avec tes vraies coordonnées
3. Soumettre

### Test 2 : Vérifier la réception

Tu devrais recevoir un email à **contact@vd-subside.ch** avec :
- 🆕 Titre : "Nouvelle demande de subside - [Nom Prénom]"
- 📧 Email formaté avec toutes les infos
- ⚡ Rappel de contacter sous 24h

### En cas de problème

1. **Vérifier les logs Vercel** :
   - Aller sur vercel.com → ton projet → **Deployments**
   - Cliquer sur le dernier déploiement → **Functions**
   - Cliquer sur `/api/contact` → Voir les logs

2. **Vérifier la variable d'environnement** :
   - Settings → Environment Variables
   - La clé `RESEND_API_KEY` doit être présente
   - Elle doit commencer par `re_`

3. **Vérifier Resend** :
   - Aller sur resend.com → **Logs**
   - Tu devrais voir les emails envoyés

---

## 🚀 Options avancées (si besoin)

### Option 2 : Webhook vers Google Sheets / Notion / Airtable

Ajouter cette fonction dans `/app/api/contact/route.ts` après l'envoi d'email :

```typescript
// Envoyer vers un Webhook (n8n, Zapier, Make, etc.)
await fetch('TON_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
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
  }),
});
```

### Option 3 : Base de données (Supabase)

Si tu veux stocker les leads dans une base de données :

1. Créer un compte Supabase (gratuit)
2. Créer une table `leads` avec les colonnes :
   - `id`, `nom`, `prenom`, `email`, `telephone`, `ville`, `situation`, `revenu`, `message`, `source`, `created_at`
3. Installer le client :
   ```bash
   npm install @supabase/supabase-js
   ```
4. Ajouter dans le code

### Option 4 : CRM (HubSpot, Pipedrive, etc.)

Tu peux aussi connecter directement à un CRM professionnel.

---

## 📊 Statistiques et suivi

### Voir les leads reçus

**Option 1 - Emails** :
- Tous les leads arrivent par email à `contact@vd-subside.ch`
- Créer un label Gmail "Leads VD-Subside" pour les organiser

**Option 2 - Logs Vercel** :
- Aller sur vercel.com → Projet → Functions
- Voir les logs de `/api/contact`
- Tous les leads sont loggés avec console.log

**Option 3 - Google Sheets** (via Zapier/Make) :
- Créer un Zap/Scénario qui écoute les emails
- Automatiquement ajouter les leads dans un Google Sheet

---

## 💡 Conseils

1. **Répondre vite** : Les leads attendent une réponse sous 24h (c'est promis sur le site)
2. **Template de réponse** : Préparer un email type pour répondre rapidement
3. **Suivi** : Utiliser un Google Sheet ou CRM pour tracker l'état de chaque lead

---

## 🆘 Support

Si tu as des questions :
- Resend : [resend.com/docs](https://resend.com/docs)
- Vercel : [vercel.com/docs](https://vercel.com/docs)

Bon courage avec tes premiers leads ! 🚀
