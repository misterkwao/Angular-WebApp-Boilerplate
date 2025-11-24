import { Injectable, signal, computed, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  // Signal to store the current theme mode preference
  private themeMode = signal<ThemeMode>('system');
  
  // Signal to track system preference
  private systemPrefersDark = signal(false);
  
  // Computed signal for the actual theme to apply
  public actualTheme = computed(() => {
    const mode = this.themeMode();
    if (mode === 'system') {
      return this.systemPrefersDark() ? 'dark' : 'light';
    }
    return mode;
  });
  
  // Public getters
  public get currentMode(): ThemeMode {
    return this.themeMode();
  }
  
  public get isDark(): boolean {
    return this.actualTheme() === 'dark';
  }

  constructor() {
    if (this.isBrowser) {
      // Initialize system preference
      this.updateSystemPreference();
      
      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => this.updateSystemPreference());
      
      // Load saved preference
      this.loadThemePreference();
    }
    
    // Effect to apply theme changes
    effect(() => {
      this.applyTheme();
    });
  }

  private updateSystemPreference(): void {
    if (this.isBrowser) {
      this.systemPrefersDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }

  private loadThemePreference(): void {
    if (this.isBrowser) {
      const saved = localStorage.getItem('theme-mode') as ThemeMode;
      if (saved && ['light', 'dark', 'system'].includes(saved)) {
        this.themeMode.set(saved);
      }
    }
  }

  private saveThemePreference(mode: ThemeMode): void {
    if (this.isBrowser) {
      localStorage.setItem('theme-mode', mode);
    }
  }

  private applyTheme(): void {
    if (!this.isBrowser) return;
    
    const isDark = this.actualTheme() === 'dark';
    const html = document.documentElement;
    const body = document.body;
    
    // Apply to both html and body to ensure global coverage
    if (isDark) {
      html.classList.add('dark-mode');
      body.classList.add('dark-mode');
      // Also set a data attribute for additional targeting
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark-mode');
      body.classList.remove('dark-mode');
      html.setAttribute('data-theme', 'light');
    }
  }

  // Public methods to change theme
  public setLight(): void {
    this.themeMode.set('light');
    this.saveThemePreference('light');
  }

  public setDark(): void {
    this.themeMode.set('dark');
    this.saveThemePreference('dark');
  }

  public setSystem(): void {
    this.themeMode.set('system');
    this.saveThemePreference('system');
  }

  public toggleTheme(): void {
    const current = this.themeMode();
    switch (current) {
      case 'light':
        this.setDark();
        break;
      case 'dark':
        this.setSystem();
        break;
      case 'system':
        this.setLight();
        break;
    }
  }

  // Cycle through: Light → Dark → System → Light...
  public cycleTheme(): void {
    this.toggleTheme();
  }
}