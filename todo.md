# TODO / Compromis

Liste des améliorations et raccourcis pris en raison du temps imparti pour ce test technique.

## 🧪 Tests

- [ ] **Tests unitaires** pour les hooks custom (useExchangeRate, useConversion, useHistory)
- [ ] **Tests unitaires** pour les utilitaires (currency.ts)
- [ ] **Tests d'intégration** pour les composants React
- [ ] **Tests end-to-end** avec Playwright ou Cypress pour valider les scénarios utilisateur complets

## 🌍 Internationalisation (i18n)

- [ ] Gestion des formats monétaires selon la locale (actuellement fixé à `fr-FR`)
- [ ] Traduction des libellés d'interface dans plusieurs langues
- [ ] Support des séparateurs décimaux régionaux (virgule vs point)

## 🎨 Thème et design

- [ ] **Mode sombre** et bascule light/dark
- [ ] Persistance du choix de thème dans localStorage
- [ ] Amélioration du design avec des dégradés et micro-animations supplémentaires

## 📊 Visualisations

- [ ] Composant de **graphique** montrant l'historique du taux sur les dernières minutes
- [ ] Indicateurs visuels de volatilité
- [ ] Animation de transition plus fluide lors du changement de tendance

## 🔧 Validation et robustesse

- [ ] Validation plus robuste des champs numériques (gestion des cas edge)
- [ ] Gestion d'erreurs plus complète (boundary errors React)
- [ ] Messages d'erreur contextuels pour guider l'utilisateur

## ♿ Accessibilité avancée

- [ ] Tests avec lecteurs d'écran (NVDA, JAWS, VoiceOver)
- [ ] Support complet des raccourcis clavier
- [ ] Amélioration des contrastes pour WCAG AAA

## 📱 Progressive Web App (PWA)

- [ ] Configuration en tant que PWA installable
- [ ] Support offline avec Service Worker
- [ ] Notifications push pour les variations importantes de taux

## 🗄️ Persistance des données

- [ ] Sauvegarde de l'historique dans **localStorage**
- [ ] Option d'export de l'historique (CSV, JSON)
- [ ] Synchronisation cloud optionnelle (Firebase, Supabase)

## 🚀 Performance

- [ ] Lazy loading des composants
- [ ] Optimisation des re-renders avec React.memo
- [ ] Debouncing sur les saisies utilisateur

## 📐 Architecture

- [ ] Extraction de la logique métier dans des services dédiés
- [ ] Ajout d'un state manager global si l'app grandit (Zustand, Redux Toolkit)
- [ ] Documentation du code avec JSDoc/TSDoc
