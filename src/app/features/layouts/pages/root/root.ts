import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  Bell,
  LayoutGrid,
  LucideAngularModule,
  PanelLeft,
  UserRound,
  UsersRound,
} from 'lucide-angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ThemeModeComponent } from '../../../../shared/components/theme-mode/theme-mode';
import { SharedService } from '../../../../core/services/shared.service';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ToastService } from '../../../../shared/components/toast-container/toast.service';
import { NotificationsComponent } from '../../components/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    RouterModule,
    LucideAngularModule,
    CommonModule,
    ThemeModeComponent,
    Menu,
    NotificationsComponent,
  ],
  templateUrl: './root.html',
  styleUrl: './root.css',
})
export class RootLayout implements OnInit {
  //Icons
  readonly dashboard = LayoutGrid;
  readonly users = UsersRound;
  readonly notificationIcon = Bell;
  readonly userIcon = UserRound;
  readonly panelLeftIco = PanelLeft;

  // Variables
  isExpanded?: boolean = false;
  drawerMode!: 'side' | 'over'; //This variable handles the menu's responsiveness
  items: MenuItem[] | undefined;
  showNotificationPanel: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    // Listen for handset breakpoints to change the drawer mode
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.drawerMode = result.matches ? 'over' : 'side';
      this.isExpanded = !this.isExpanded;
    });
    // drawer state
    this.isExpanded = this.sharedService.DrawerState;

    // Menu Items
    this.items = [
      {
        label: 'Profile',
        icon: PrimeIcons.USER,
      },
      {
        label: 'Settings',
        icon: PrimeIcons.COG,
      },
      {
        label: 'Logout',
        icon: PrimeIcons.SIGN_OUT,
        command: () => this.logout(),
      },
    ];
  }

  toggleDrawer() {
    this.isExpanded = !this.isExpanded;
    this.sharedService.setDrawerState(this.isExpanded);
  }

  dayPeriod() {
    let hours = new Date().getHours();
    return hours < 12 ? 'Good Morning' : hours < 17 ? 'Good Afternoon' : 'Good Evening';
  }

  logout() {
    this.toastService.showToast('Logging out', 3500, 'info');
  }
}
