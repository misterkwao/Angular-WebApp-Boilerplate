import { Component } from '@angular/core';
import { LaptopMinimal, Lightbulb, LightbulbOff, LucideAngularModule } from 'lucide-angular';
import { ThemeService } from '../../../core/services/theme-service';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-theme-mode',
  imports: [LucideAngularModule, ButtonModule, MenuModule],
  templateUrl: './theme-mode.html',
  styleUrl: './theme-mode.css',
})
export class ThemeModeComponent {
  // Icons
  readonly system = LaptopMinimal;
  readonly light = Lightbulb;
  readonly dark = LightbulbOff;

  //Variables
  public menuItems!: MenuItem[];
  activeTheme!: string;

  constructor(private themeService: ThemeService) {
    this.activeTheme = this.themeService.currentMode;
  }

  setTheme(mode: string): void {
    const themeMap: Record<string, () => void> = {
      light: () => this.themeService.setLight(),
      dark: () => this.themeService.setDark(),
      system: () => this.themeService.setSystem(),
    };
    (themeMap[mode] || themeMap['system'])();
    this.activeTheme = this.themeService.currentMode;
  }
}
