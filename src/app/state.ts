import { Injectable, computed, effect, signal } from '@angular/core';
import { Bi, Lang } from './content';

type Theme = 'dark' | 'light';

const LANG_KEY = 'pf_lang';
const THEME_KEY = 'pf_theme';

function initialLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY) as Lang | null;
  if (saved === 'en' || saved === 'es') return saved;
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function initialTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY) as Theme | null;
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

@Injectable({ providedIn: 'root' })
export class AppState {
  readonly lang = signal<Lang>(initialLang());
  readonly theme = signal<Theme>(initialTheme());

  /** Translate a bilingual value to the active language. */
  readonly t = computed(() => {
    const l = this.lang();
    return (bi: Bi) => bi[l];
  });

  constructor() {
    effect(() => {
      const l = this.lang();
      localStorage.setItem(LANG_KEY, l);
      document.documentElement.lang = l;
    });
    effect(() => {
      const th = this.theme();
      localStorage.setItem(THEME_KEY, th);
      document.documentElement.dataset['theme'] = th;
    });
  }

  toggleLang() {
    this.lang.update((l) => (l === 'en' ? 'es' : 'en'));
  }

  toggleTheme() {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
