import { Component, HostListener, inject, signal } from '@angular/core';
import { AppState } from './state';
import { EXPERIENCE, HERO_STATS, METRICS, PROFILE, SKILLS, UI } from './content';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly state = inject(AppState);

  // Expose content to the template.
  protected readonly UI = UI;
  protected readonly profile = PROFILE;
  protected readonly heroStats = HERO_STATS;
  protected readonly skills = SKILLS;
  protected readonly experience = EXPERIENCE;
  protected readonly metrics = METRICS;

  protected readonly year = new Date().getFullYear();
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly nav = [
    { id: 'about', label: UI.navAbout },
    { id: 'skills', label: UI.navSkills },
    { id: 'experience', label: UI.navExperience },
    { id: 'impact', label: UI.navImpact },
    { id: 'contact', label: UI.navContact },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  /** Shorthand: translate a bilingual value with the active language. */
  tr = (bi: { en: string; es: string }) => this.state.t()(bi);

  scrollTo(id: string, event?: Event) {
    event?.preventDefault();
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
