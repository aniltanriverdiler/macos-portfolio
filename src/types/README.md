# TypeScript Tip Tanımlamaları

Bu klasör, MacOS Portfolio projesinin tüm TypeScript tip tanımlamalarını içermektedir.

## Dosya Yapısı

### `app.ts`
Uygulama genelinde kullanılan temel tip tanımlamaları:
- `NavLink`: Navbar bağlantıları
- `NavIcon`: Navbar ikonları
- `DockApp`: Dock uygulama öğeleri

### `content.ts`
İçerik ile ilgili tip tanımlamaları:
- `BlogPost`: Blog yazıları
- `TechStackCategory`: Teknoloji stack kategorileri
- `Social`: Sosyal medya linkleri
- `PhotoLink`: Fotoğraf galerisi linkleri
- `GalleryItem`: Galeri öğeleri

### `location.ts`
Dosya sistemi ve konum ile ilgili tip tanımlamaları:
- `FileType`: Dosya türleri (`txt`, `url`, `img`, `pdf`, `fig`)
- `ItemKind`: Öğe türleri (`file`, `folder`)
- `LocationType`: Konum türleri (`work`, `about`, `resume`, `trash`)
- `LocationChild`: Alt konum öğeleri
- `Location`: Ana konum yapısı
- `Locations`: Tüm konumları içeren obje

### `window.ts`
Pencere yönetimi ile ilgili tip tanımlamaları:
- `WindowKey`: Pencere anahtarları
- `WindowState`: Pencere durumu
- `WindowConfig`: Pencere yapılandırması
- `WindowStore`: Zustand store için pencere yönetimi

### `store.ts`
Zustand store tip tanımlamaları:
- `LocationStore`: Konum store'u

### `index.ts`
Tüm tip tanımlamalarını merkezi bir yerden export eden dosya.

## Kullanım

Tip tanımlamalarını kullanmak için:

```typescript
import type { NavLink, DockApp, Location } from "#types";
```

veya özel bir dosyadan:

```typescript
import type { WindowStore } from "#types/window";
```

## Path Aliasing

Projede tip tanımlamaları için aşağıdaki alias'lar kullanılmaktadır:

```json
{
  "#types": "./src/types",
  "#types/*": "./src/types/*"
}
```

Bu yapılandırma şu dosyalarda tanımlanmıştır:
- `tsconfig.json`
- `tsconfig.app.json`
- `vite.config.ts`

## Tip Güvenliği

Proje strict TypeScript modu ile yapılandırılmıştır:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

Bu sayede kod tabanı tamamen tip güvenli hale getirilmiştir.
