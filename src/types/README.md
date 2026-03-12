# TypeScript Type Definitions

This folder contains all TypeScript type definitions used in the MacOS Portfolio project.

## File Structure

### `app.ts`
Core application-wide type definitions:
- `NavLink`: Navbar links
- `NavIcon`: Navbar icons
- `DockApp`: Dock application items

### `content.ts`
Content-related type definitions:
- `BlogPost`: Blog posts
- `TechStackCategory`: Technology stack categories
- `Social`: Social media links
- `PhotoLink`: Photo gallery links
- `GalleryItem`: Gallery items

### `location.ts`
File system and location-related type definitions:
- `FileType`: File types (`txt`, `url`, `img`, `pdf`, `fig`)
- `ItemKind`: Item kinds (`file`, `folder`)
- `LocationType`: Location types (`work`, `about`, `resume`, `trash`)
- `LocationChild`: Child location items
- `Location`: Root location structure
- `Locations`: Object that holds all locations

### `window.ts`
Window management type definitions:
- `WindowKey`: Window keys
- `WindowState`: Window state
- `WindowConfig`: Window configuration
- `WindowStore`: Window management store for Zustand

### `store.ts`
Zustand store type definitions:
- `LocationStore`: Location store

### `index.ts`
Exports all type definitions from a single place.

## Usage

To use the type definitions:

```typescript
import type { NavLink, DockApp, Location } from "#types";
```

or from a specific file:

```typescript
import type { WindowStore } from "#types/window";
```

## Path Aliasing

The project uses the following aliases for type definitions:

```json
{
  "#types": "./src/types",
  "#types/*": "./src/types/*"
}
```

This configuration is defined in:
- `tsconfig.json`
- `tsconfig.app.json`
- `vite.config.ts`

## Type Safety

The project is configured with strict TypeScript settings:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

This keeps the codebase fully type-safe.
