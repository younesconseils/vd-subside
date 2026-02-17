# 🚀 Démarrage Rapide - VD Subside

## ✅ Votre site est prêt !

Le site **vd-subside.ch** est maintenant installé et testé avec succès.

## 📂 Structure du projet

```
vd-subside/
├── app/                      # Pages Next.js
│   ├── page.tsx             # Page d'accueil
│   ├── calculateur/         # Page calculateur
│   ├── ville/[slug]/        # Pages par ville (dynamiques)
│   ├── layout.tsx           # Layout principal avec SEO
│   ├── sitemap.ts           # Génération automatique du sitemap
│   └── robots.ts            # Configuration robots.txt
├── components/              # Composants réutilisables
│   ├── Hero.tsx            # Hero avec formulaire
│   ├── Calculator.tsx      # Calculateur multi-étapes
│   ├── Benefits.tsx        # Avantages
│   ├── HowItWorks.tsx      # Comment ça marche
│   ├── Cities.tsx          # Liste des villes
│   ├── FAQ.tsx             # Questions fréquentes
│   ├── CTA.tsx             # Call-to-action
│   └── Testimonials.tsx    # Témoignages
└── public/                 # Fichiers statiques (images, etc.)
```

## 🏃 Commandes principales

### Développement
```bash
npm run dev
```
Ouvre le site sur http://localhost:3000

### Production (build)
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🎯 Prochaines étapes

### 1. Tester localement
```bash
npm run dev
```
Visitez http://localhost:3000 et testez :
- ✅ Le formulaire rapide dans le hero
- ✅ Le calculateur complet
- ✅ La navigation entre les pages
- ✅ La version mobile (F12 > Toggle device toolbar)

### 2. Personnaliser le contenu

**Fichiers à modifier** :
- `app/layout.tsx` - Meta tags, titre du site
- `components/Hero.tsx` - Texte du hero
- `components/FAQ.tsx` - Questions/réponses
- `components/Testimonials.tsx` - Témoignages clients

### 3. Ajouter vos images

Placez vos images dans `public/` :
- `public/logo.svg` - Logo du site
- `public/og-image.jpg` - Image pour réseaux sociaux (1200x630px)
- `public/favicon.ico` - Favicon
- `public/apple-touch-icon.png` - Icon Apple (180x180px)

### 4. Déployer sur Vercel

Suivez le guide complet dans `DEPLOIEMENT.md`

Résumé express :
```bash
# 1. Init git
git init
git add .
git commit -m "Initial commit"

# 2. Push sur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/vd-subside.git
git push -u origin main

# 3. Connecter à Vercel
# Allez sur vercel.com > New Project > Import votre repo
```

## 🎨 Personnalisation des couleurs

Les couleurs principales sont dans `app/globals.css` :
```css
:root {
  --color-green-700: #00843D; /* Vert du canton de Vaud */
}
```

Pour changer, modifiez cette valeur et les composants s'adapteront automatiquement.

## 📱 Pages disponibles

- `/` - Page d'accueil
- `/calculateur` - Calculateur de subside
- `/ville/lausanne` - Page Lausanne
- `/ville/vevey` - Page Vevey
- `/ville/montreux` - Page Montreux
- ... (10+ villes configurées)

## 🔍 SEO déjà configuré

✅ Sitemap XML automatique
✅ Robots.txt optimisé
✅ Meta tags par page
✅ Open Graph pour réseaux sociaux
✅ Schema.org pour FAQ
✅ URLs sémantiques
✅ Mobile-first responsive

## 💡 Conseils

1. **Testez sur mobile** - 60% du trafic vient du mobile
2. **Ajoutez Google Analytics** - Suivez vos visiteurs
3. **Optimisez les images** - Utilisez WebP/AVIF
4. **Testez la vitesse** - https://pagespeed.web.dev
5. **Soumettez à Google** - Google Search Console

## 🆘 Problèmes courants

**Le site ne démarre pas ?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Erreur de build ?**
```bash
rm -rf .next
npm run build
```

**Port 3000 déjà utilisé ?**
```bash
npm run dev -- -p 3001
```

---

## 🎉 Félicitations !

Votre site est prêt à dominer le SEO dans le canton de Vaud ! 

Questions ? Consultez :
- `README.md` - Documentation complète
- `DEPLOIEMENT.md` - Guide de déploiement
- `TODO-SEO.md` - Prochaines optimisations SEO

**Bon lancement ! 🚀🇨🇭**
