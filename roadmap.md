# Roadmap

Propositions de fonctionnalités futures pour constituer une première backlog produit.

## 🌟 Version 1.1 - Fonctionnalités essentielles

### Multi-devises
- [ ] Support de paires de devises supplémentaires (EUR/GBP, USD/JPY, etc.)
- [ ] Sélecteur de devise source et cible avec recherche
- [ ] Favoris de paires de devises pour accès rapide

### Source de données réelle
- [ ] Intégration d'une API de taux de change réelle (ex: ExchangeRate-API, Fixer.io)
- [ ] Connexion WebSocket ou Server-Sent Events (SSE) pour mises à jour en temps réel
- [ ] Fallback sur taux simulé en cas d'erreur API
- [ ] Affichage de la source du taux (API vs simulé)

## 🚀 Version 1.2 - Expérience utilisateur avancée

### Progressive Web App (PWA)
- [ ] Manifest pour installation sur mobile/desktop
- [ ] Service Worker pour fonctionnement offline
- [ ] Mise en cache des derniers taux connus
- [ ] Notifications push pour alertes de variation

### Alertes et notifications
- [ ] Configuration d'alertes de taux (ex: notifier si EUR/USD > 1.15)
- [ ] Historique des alertes déclenchées
- [ ] Personnalisation des notifications (son, vibration)

## 📊 Version 1.3 - Analyse et insights

### Visualisations avancées
- [ ] Graphique en temps réel de l'évolution du taux (Chart.js ou Recharts)
- [ ] Historique sur plusieurs périodes (1h, 24h, 7j, 30j)
- [ ] Indicateurs techniques simples (moyenne mobile, volatilité)

### Export et partage
- [ ] Export de l'historique des conversions (CSV, PDF, Excel)
- [ ] Partage de conversion par lien ou QR code
- [ ] Impression optimisée pour reçus

## 🔐 Version 2.0 - Fonctionnalités pro

### Compte utilisateur
- [ ] Authentification (email/password, OAuth Google/GitHub)
- [ ] Sauvegarde cloud de l'historique et préférences
- [ ] Synchronisation multi-appareils

### Fonctionnalités avancées
- [ ] Calculs de frais bancaires et commissions
- [ ] Comparateur de services de change (banques, bureaux de change, en ligne)
- [ ] Mode calculatrice avec opérations multiples

### API et intégrations
- [ ] API REST pour intégration tierce
- [ ] Webhooks pour automatisations
- [ ] Plugins pour sites e-commerce

## 🛠️ Version 2.1 - Améliorations techniques

### CI/CD et qualité
- [ ] Pipeline d'intégration continue (tests automatisés, lint, type-check)
- [ ] Déploiement automatique sur push (GitHub Actions, Vercel, Netlify)
- [ ] Monitoring et analytics (Sentry, Google Analytics, Plausible)
- [ ] Tests de performance automatisés (Lighthouse CI)

### Scalabilité
- [ ] Architecture microservices pour le backend
- [ ] CDN pour assets statiques
- [ ] Optimisations SEO (même si SPA)
- [ ] Support de plusieurs régions (edge computing)

## 🌍 Version 3.0 - Expansion globale

### Internationalisation complète
- [ ] Support de 20+ langues
- [ ] Adaptation aux réglementations locales
- [ ] Support de 150+ devises mondiales

### Fonctionnalités métier
- [ ] Mode entreprise avec gestion d'équipe
- [ ] Tableau de bord analytique pour trésoriers
- [ ] Intégration avec logiciels comptables (QuickBooks, Xero)
- [ ] Rapports personnalisables et automatisés

---

**Note** : Cette roadmap est indicative et doit être priorisée en fonction des retours utilisateurs et des objectifs business.
