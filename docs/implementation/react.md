---
title: React integration
---

# Integración con React

MXNI no depende de React: los componentes son clases CSS. En React solo se
importa la hoja una vez y se usa `className`. Cada página del
[catálogo](/catalog/) muestra el marcado en la pestaña **React**.

## Instalación

```tsx
// main.tsx, app/layout.tsx o el punto de entrada de la app
import './mxni/mxni.css'
```

Copia la carpeta `mxni/` del paquete descargable dentro del proyecto (incluye
las fuentes y los assets).

## Componentes envoltorio (opcional)

Si quieres componentes tipados, envuelve las clases sin cambiar el look:

```tsx
type ButtonVariant = 'default' | 'accent' | 'surface' | 'quiet' | 'sm' | 'cta' | 'cta-outline'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({ variant = 'default', className, ...props }: ButtonProps) {
  const classes = ['mx-button', variant !== 'default' && `mx-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')
  return <button className={classes} {...props} />
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="mx-tag">{children}</span>
}
```

```tsx
<Button variant="accent">Descargar CV ↓</Button>
<Tag>#arquitectura</Tag>
```

## Comportamientos

Puedes cargar `mxni/mxni.js` o reimplementar el contrato con estado de React.
Ejemplo del menú móvil:

```tsx
export function Navbar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="mx-navbar" data-menu={open ? 'open' : 'closed'}
      onKeyDown={event => event.key === 'Escape' && setOpen(false)}>
      <nav className="mx-navbar__inner" aria-label="Principal">
        <a className="mx-logo" href="/"><img src="/mxni/assets/logo.svg" alt="Inicio" width={72} height={25} /></a>
        <button className="mx-icon-button mx-navbar__toggle" type="button"
          aria-controls="mx-menu" aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(value => !value)} />
        <div className="mx-navbar__menu" id="mx-menu">{children}</div>
      </nav>
    </header>
  )
}
```

## Reglas

- No copies valores de los tokens a estilos en línea ni a CSS-in-JS: usa las
  clases o `var(--token)`.
- No cambies la estructura de clases (`bloque__elemento--modificador`): el
  look depende de ella.
- El mismo enfoque aplica a Vue, Svelte, Angular, Astro o cualquier otro
  framework; ver [Usar en cualquier tecnología](/catalog/install).
