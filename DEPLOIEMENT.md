# 🚀 Guide de Déploiement sur Vercel

## Étape 1 : Préparer le code

Votre site est prêt ! Assurez-vous d'avoir :
- ✅ Un compte GitHub
- ✅ Un compte Vercel (gratuit sur vercel.com)
- ✅ Le domaine vd-subside.ch configuré

## Étape 2 : Pousser sur GitHub

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "🚀 Initial commit - Site VD Subside optimisé SEO"

# Créer un repo sur GitHub et le lier
# Allez sur github.com et créez un nouveau repo "vd-subside"
git remote add origin https://github.com/VOTRE-USERNAME/vd-subside.git

# Pousser le code
git branch -M main
git push -u origin main
```

## Étape 3 : Déployer sur Vercel

### Option A : Via l'interface Vercel (RECOMMANDÉ)

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Add New Project"
3. Importez votre repo GitHub "vd-subside"
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"
6. ⏱️ Attendez 2-3 minutes

### Option B : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour production
vercel --prod
```

## Étape 4 : Configurer le domaine vd-subside.ch

1. Dans Vercel, allez dans Settings > Domains
2. Ajoutez "vd-subside.ch"
3. Vercel vous donnera des DNS à configurer
4. Chez votre registrar de domaine :
   - Type: A Record
   - Name: @
   - Value: 76.76.21.21 (IP Vercel)
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

5. Attendez la propagation DNS (1-24h, souvent 1-2h)

## Étape 5 : Optimisations post-déploiement

### Google Search Console
1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoutez la propriété vd-subside.ch
3. Soumettez le sitemap : https://vd-subside.ch/sitemap.xml

### Google Analytics (optionnel)
1. Créez une propriété GA4
2. Ajoutez le tracking ID dans `app/layout.tsx`

### Performance
- Activez "Edge Functions" dans Vercel
- Activez "Analytics" dans Vercel
- Configurez les "Environment Variables" si nécessaire

## 🎯 Checklist finale

- [ ] Site déployé sur Vercel
- [ ] Domaine vd-subside.ch configuré et actif
- [ ] HTTPS activé (automatique avec Vercel)
- [ ] Sitemap soumis à Google
- [ ] Google Search Console configuré
- [ ] Test mobile (Google Mobile-Friendly Test)
- [ ] Test performance (PageSpeed Insights)
- [ ] Vérification des meta tags (avec l'extension META SEO inspector)

## 📊 Monitoring

Surveillez ces métriques :
- Trafic organique (Google Analytics)
- Positions SEO (Google Search Console)
- Core Web Vitals (Vercel Analytics)
- Taux de conversion (formulaires remplis)

## 🔄 Mises à jour

Pour déployer des mises à jour :

```bash
# Faire vos modifications
git add .
git commit -m "Description de la mise à jour"
git push

# Vercel déploie automatiquement !
```

---

## 🆘 Besoin d'aide ?

- Documentation Vercel : https://vercel.com/docs
- Documentation Next.js : https://nextjs.org/docs
- Support Vercel : support@vercel.com

Votre site est maintenant prêt à dominer le SEO ! 🚀🇨🇭
