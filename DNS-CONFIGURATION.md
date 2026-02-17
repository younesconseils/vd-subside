# 🌐 Configuration DNS pour vd-subside.ch

## ✅ Domaine ajouté sur Vercel

Votre domaine **vd-subside.ch** a été ajouté avec succès au projet Vercel.

## 📋 Configuration DNS chez Infomaniak

Vous devez maintenant configurer les enregistrements DNS chez **Infomaniak** (votre registrar actuel).

### 1. Se connecter à Infomaniak

1. Allez sur https://manager.infomaniak.com
2. Connectez-vous avec vos identifiants
3. Allez dans **Noms de domaine** → Sélectionnez **vd-subside.ch**
4. Cliquez sur **Zone DNS**

### 2. Ajouter les enregistrements DNS

#### Option A : Enregistrement A (Recommandé)

Supprimez tous les anciens enregistrements A pour `@` et `www`, puis ajoutez :

**Pour le domaine racine (vd-subside.ch) :**
```
Type: A
Nom: @ (ou laissez vide)
Valeur/Cible: 76.76.21.21
TTL: 3600 (ou Auto)
```

**Pour le sous-domaine www :**
```
Type: CNAME
Nom: www
Valeur/Cible: cname.vercel-dns.com
TTL: 3600 (ou Auto)
```

#### Option B : Utiliser les nameservers Vercel (Alternative)

Si vous voulez que Vercel gère complètement le DNS :

**Changez les nameservers** de :
```
Actuels:
- ns11.infomaniak.ch
- ns12.infomaniak.ch
```

**Vers les nameservers Vercel :**
```
Nouveaux:
- ns1.vercel-dns.com
- ns2.vercel-dns.com
```

⚠️ **Attention** : Cela transfère toute la gestion DNS à Vercel. Si vous avez d'autres enregistrements (email, etc.), vous devrez les reconfigurer sur Vercel.

### 3. Configuration recommandée (Option A détaillée)

Voici la configuration complète recommandée dans la zone DNS Infomaniak :

| Type  | Nom | Valeur/Cible              | TTL  |
|-------|-----|---------------------------|------|
| A     | @   | 76.76.21.21              | 3600 |
| CNAME | www | cname.vercel-dns.com     | 3600 |

**Supprimez** :
- Tous les anciens enregistrements A pour @ et www
- Tous les enregistrements AAAA (IPv6) pour @ et www (si existants)

**Gardez** :
- Les enregistrements MX (email) si vous en avez
- Les enregistrements TXT (SPF, DKIM, etc.)
- Autres sous-domaines que vous utilisez

### 4. Vérification de la configuration

Après avoir configuré les DNS :

1. **Attendez la propagation** : 5 minutes à 48 heures (généralement 1-2h)

2. **Vérifiez avec ces outils** :
   - https://dnschecker.org/#A/vd-subside.ch
   - https://www.whatsmydns.net/#A/vd-subside.ch

3. **Vérifiez sur Vercel** :
   - Allez sur https://vercel.com/younes-projects-b36b7cb6/vd-subside/settings/domains
   - Vous devriez voir vd-subside.ch avec un statut "Valid"

4. **Testez le site** :
   - http://vd-subside.ch → devrait rediriger vers https://vd-subside.ch
   - https://vd-subside.ch → devrait afficher votre site
   - https://www.vd-subside.ch → devrait rediriger vers https://vd-subside.ch

### 5. SSL/HTTPS

Vercel configure automatiquement le certificat SSL (Let's Encrypt) une fois que les DNS sont correctement configurés.

**Vous recevrez un email** de Vercel quand :
- ✅ Les DNS sont validés
- ✅ Le certificat SSL est activé

## 🚨 Troubleshooting

### Le domaine ne fonctionne pas après 2h

**Vérifiez les DNS :**
```bash
# Dans votre terminal
dig vd-subside.ch A
# Devrait retourner : 76.76.21.21

dig www.vd-subside.ch CNAME
# Devrait retourner : cname.vercel-dns.com
```

### "Invalid Configuration" sur Vercel

1. Vérifiez que l'enregistrement A pointe bien vers **76.76.21.21**
2. Supprimez tous les anciens enregistrements A conflictuels
3. Attendez 1-2h pour la propagation DNS
4. Cliquez sur "Refresh" dans Vercel → Settings → Domains

### Le site affiche "ERR_TOO_MANY_REDIRECTS"

Vérifiez qu'il n'y a pas de redirection forcée HTTP→HTTPS chez Infomaniak qui entre en conflit avec celle de Vercel.

## 📧 Support

**Vercel :** https://vercel.com/support
**Infomaniak :** https://www.infomaniak.com/fr/support

---

## ✅ Statut actuel

- ✅ Site déployé sur Vercel
- ✅ Domaine vd-subside.ch ajouté sur Vercel
- ⏳ DNS à configurer chez Infomaniak
- ⏳ Attente validation DNS + SSL

**URLs temporaires (fonctionnent déjà) :**
- https://vd-subside.vercel.app
- https://vd-subside-aqy4t8wx6-younes-projects-b36b7cb6.vercel.app
