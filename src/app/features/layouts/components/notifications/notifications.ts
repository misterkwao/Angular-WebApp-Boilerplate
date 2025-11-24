import { CommonModule } from '@angular/common';
import { Component, Input, output, ViewChild } from '@angular/core';
import { Bell, LucideAngularModule, X } from 'lucide-angular';
import { Drawer } from 'primeng/drawer';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-notifications',
  imports: [DrawerModule, LucideAngularModule, CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class NotificationsComponent {
  // Icons
  readonly closeIco = X;
  readonly bellIco = Bell
  // Variables
  @ViewChild('drawerRef') drawerRef!: Drawer;
  @Input() visible!: boolean;
  visibleChange = output<boolean>();

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
    this.visibleChange.emit(false);
  }

  hide() {
    this.visibleChange.emit(false);
  }
}
