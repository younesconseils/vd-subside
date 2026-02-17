# 🚀 Guide de Déploiement Vercel - vd-subside.ch

## Étape 1 : Connexion à Vercel

```bash
cd "/Users/younes/Desktop/Code claude/vd-subside"
npx vercel login
```

Suivez les instructions pour vous connecter (via email ou GitHub).

## Étape 2 : Premier Déploiement

```bash
npx vercel
```

Répondez aux questions :
- **Set up and deploy?** → `Y`
- **Which scope?** → Sélectionnez votre compte
- **Link to existing project?** → `N`
- **What's your project's name?** → `vd-subside`
- **In which directory is your code located?** → `./` (appuyez sur Entrée)
- **Want to override the settings?** → `N`

Vercel va :
1. Détecter Next.js automatiquement
2. Builder le projet
3. Déployer sur une URL temporaire (ex: vd-subside-xyz.vercel.app)

## Étape 3 : Déploiement en Production

Une fois le premier déploiement réussi :

```bash
npm run deploy
# ou
npx vercel --prod
```

Cela déploiera sur l'URL de production.

## Étape 4 : Ajouter le Domaine Personnalisé vd-subside.ch

### Via l'interface Vercel (Recommandé)

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sélectionnez le projet `vd-subside`
3. Allez dans **Settings** → **Domains**
4. Cliquez sur **Add Domain**
5. Entrez : `vd-subside.ch`
6. Vercel vous donnera les enregistrements DNS à configurer

### Configuration DNS chez votre registrar

Vous devrez ajouter ces enregistrements DNS chez votre registrar (ex: Infomaniak, Gandi, etc.) :

#### Pour le domaine racine (vd-subside.ch)

**Option A - Si votre registrar supporte ALIAS/ANAME :**
```
Type: ALIAS (ou ANAME)
Name: @
Value: cname.vercel-dns.com
```

**Option B - Sinon utilisez les IPs de Vercel :**
```
Type: A
Name: @
Value: 76.76.21.21
```

#### Pour le sous-domaine www

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Via CLI (Alternative)

```bash
npx vercel domains add vd-subside.ch
```

Puis suivez les instructions.

## Étape 5 : Vérification

Une fois les DNS configurés (propagation : 5 min à 48h, généralement ~1h) :

1. Visitez https://vd-subside.ch
2. Vérifiez que le certificat SSL est actif (cadenas vert)
3. Testez www.vd-subside.ch → devrait rediriger vers vd-subside.ch

## 🔄 Déploiements Futurs

### Méthode 1 : Via Git (Recommandé pour production)

1. **Connectez GitHub** :
   - Sur Vercel Dashboard → Settings → Git
   - Connectez votre repo GitHub

2. **Auto-deploy sur push** :
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```
   → Vercel déploiera automatiquement !

### Méthode 2 : Déploiement manuel

```bash
npm run deploy
```

## 📊 Variables d'Environnement (si nécessaire)

Si vous ajoutez des secrets (API keys, etc.) :

1. Sur Vercel Dashboard → Settings → Environment Variables
2. Ajoutez vos variables
3. Redéployez

## ✅ Checklist Post-Déploiement

- [ ] Site accessible sur https://vd-subside.ch
- [ ] Certificat SSL actif
- [ ] www redirige vers le domaine principal
- [ ] Formulaire fonctionne
- [ ] Calculateur fonctionne
- [ ] Navigation entre pages fonctionne
- [ ] SEO : vérifier robots.txt et sitemap.xml
- [ ] Analytics configuré (Google Analytics, Plausible, etc.)
- [ ] Test sur mobile

## 🛠️ Commandes Utiles

```bash
# Déploiement production
npm run deploy

# Voir les logs
npx vercel logs

# Lister les déploiements
npx vercel ls

# Supprimer un déploiement
npx vercel rm [deployment-url]

# Voir les domaines
npx vercel domains ls
```

## 🚨 Troubleshooting

### Build échoue
```bash
# Test local du build
npm run build
```

### Domaine ne fonctionne pas
- Vérifiez les DNS : https://dnschecker.org/
- Attendez 1-2h pour la propagation
- Vérifiez les enregistrements sur Vercel Dashboard

### Site ne se met pas à jour
```bash
# Force un nouveau build
npx vercel --prod --force
```

## 📈 Analytics & Monitoring

Vercel fournit gratuitement :
- **Analytics** : Trafic, performances
- **Speed Insights** : Core Web Vitals
- **Web Analytics** : Alternative à Google Analytics (RGPD-compliant)

Activez-les dans Settings → Analytics.

---

**Domaine configuré** : vd-subside.ch
**Framework** : Next.js 16.1.6
**Hébergement** : Vercel (plan gratuit)
**SSL** : Automatique via Let's Encrypt
