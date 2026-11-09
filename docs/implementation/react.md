---
title: React integration
---

# React integration

## Recommended approach

- Import the shared CSS tokens once at the application root.
- Build accessible primitives that consume CSS variables.
- Keep product-specific variants explicit.
- Avoid copying token values into component styles.
- Use semantic HTML and native controls where possible.

## Example

```tsx
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={['mxni-button', `mxni-button--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
```

```css
.mxni-button {
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: var(--mxni-radius-md);
  font: 600 14px var(--mxni-font-display);
  cursor: pointer;
  transition:
    background var(--mxni-motion-base) ease,
    border-color var(--mxni-motion-base) ease;
}

.mxni-button--primary {
  color: var(--mxni-text);
  background: var(--mxni-primary);
}

.mxni-button--secondary {
  color: var(--mxni-text);
  background: var(--mxni-elevated);
  border-color: var(--mxni-border);
}

.mxni-button:focus-visible {
  outline: 2px solid var(--mxni-cyan);
  outline-offset: 3px;
}

.mxni-button:disabled {
  cursor: not-allowed;
  opacity: .55;
}
```

This is a reference implementation, not a complete production component. Add tests, loading behavior, icons, and accessibility review before publishing it as stable.