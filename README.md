# EighteenCTEA-Front

Página estática temporal que indica que el dominio está en uso y en proceso de restauración.

- `source/index.html`: la página (HTML + CSS, sin build).
- `source/vercel.json`: Vercel la sirve sin framework y reescribe todas las rutas a `index.html`.

## Recuperar la web Astro anterior

La versión Astro está guardada en el tag `astro-legacy`:

```bash
git checkout astro-legacy
```
