import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastService } from './toast.service';
import { CircleCheck, CircleX, Info, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-toast-container',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.css',
})
export class ToastContainer {
  // Icons
  readonly successIco = CircleCheck;
  readonly errorIco = CircleX;
  readonly infoIco = Info
  // Variables
  constructor(public toastService: ToastService) {}
  removeToast(id: string) {
    this.toastService.removeToast(id);
  }
}
