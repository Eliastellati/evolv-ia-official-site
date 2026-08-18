# Criteri Material Design applicati

## Principi adottati

- Color system: palette organizzata in ruoli, non solo colori decorativi: primary blu, tonal verde, surface, surface container e outline.
- Shape: scala coerente con angoli 20, 24 e 28px; componenti principali più morbidi, pulsanti e navigation item con forma pill.
- Elevation: ombre leggere a livelli, usate per distinguere top app bar, card, pannelli e CTA senza appesantire.
- State layers: hover e focus visibili su navigazione, pulsanti e liste, con transizioni brevi e prevedibili.
- Typography: font di sistema per performance, gerarchie headline/body stabili e niente shift da font esterni.
- Motion: micro-transizioni con easing coerente; nessuna animazione necessaria al caricamento.
- Accessibility: focus state, semantica ordinata, contrasto leggibile e HTML statico dove non serve interazione.

## Scelta tecnica

La home e le rotte pubbliche vengono servite come HTML statico dal Worker, con CSS critico inline. Questo mantiene l'esperienza Material-inspired ma elimina JavaScript inutile e richieste render-blocking, preservando Lighthouse 100/100/100/100.

## Fonti di riferimento

- Material Design 3: https://m3.material.io/
- Material Design color system: https://m3.material.io/styles/color/overview
- Material Design elevation: https://m3.material.io/styles/elevation/overview
- Material Design motion: https://m3.material.io/styles/motion/overview
