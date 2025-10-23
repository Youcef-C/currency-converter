# Convertisseur EUR/USD

Single Page Application mobile-first de conversion de devises construite avec Next.js, TypeScript, Tailwind CSS et Material-UI.

## 🎯 Fonctionnalités

- **Taux de change dynamique** : Taux EUR/USD initialisé à 1.1, actualisé toutes les 3 secondes avec une variation aléatoire de ±0.05
- **Indicateur de tendance** : Affichage visuel de la tendance (↑/↓/–) avec animation
- **Taux fixe optionnel** : Possibilité de forcer un taux de change personnalisé
- **Désactivation automatique** : Si le taux fixé diffère de plus de 2% du taux réel, retour automatique au taux réel avec notification
- **Conversion bidirectionnelle** : Inversion EUR ↔ USD en un clic, l'ancienne sortie devient la nouvelle entrée
- **Responsive mobile-first** : Interface optimisée pour mobile (cartes empilées) et desktop (grille 2 colonnes, tableau)
- **Accessibilité** : Labels ARIA, annonces live, navigation clavier, inputMode pour claviers mobiles

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ (recommandé: 20 ou 22)
- npm 9+

### Installation

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build pour la production

### Export statique (local)

```bash
npm run build
```

Le résultat statique est généré dans le dossier `out/`.

## 🛠️ Stack technique

- **Framework** : Next.js 16 (App Router) avec export statique
- **Language** : TypeScript
- **Styling** : Tailwind CSS + Material-UI (MUI) v6
- **État** : React Hooks (useState, useEffect, useMemo, useCallback)
- **Animations** : Keyframes CSS personnalisées
- **Accessibilité** : ARIA labels, live regions, focus management

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux + animations
│   ├── layout.tsx        # Layout avec provider MUI
│   ├── page.tsx          # Page principale
│   └── providers.tsx     # ThemeProvider MUI
├── components/
│   ├── ConverterCard.tsx      # Conversion avec inversion
│   ├── ExchangeRateCard.tsx   # Affichage du taux dynamique
│   └── HistoryCard.tsx        # Historique responsive
├── hooks/
│   ├── useConversion.ts       # Logique de conversion
│   ├── useExchangeRate.ts     # Gestion du taux (dynamique + fixe)
│   └── useHistory.ts          # Historique (max 5 éléments)
├── types/
│   └── index.ts               # Types TypeScript
└── utils/
    └── currency.ts            # Utilitaires (formatage, calculs)
```

## 🎨 Principes de design

- **Mobile-first** : Approche responsive avec breakpoints Tailwind
- **UX fluide** : Animations d'entrée, highlight des changements, tooltips explicatifs
- **Accessibilité** : Navigation clavier, annonces ARIA live, inputMode approprié
- **Cohérence visuelle** : Palette de couleurs harmonieuse, espacement régulier

## 📝 Livrables

- ✅ Code source sur GitHub
- ✅ `todo.md` : Améliorations et compromis
- ✅ `roadmap.md` : Fonctionnalités futures
- ✅ Application déployable sur GitHub Pages

## 📄 Licence

Ce projet est un test technique pour CACIB-GIT-CMI.
