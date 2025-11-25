import { CommonModule } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BadgeInfo, LucideAngularModule } from 'lucide-angular';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ToastService } from '../toast/toast.service';
import { CustomPromptDialogData } from '../../../core/models/shared.models';


@Component({
  selector: 'app-custom-prompt-dialog',
  imports: [MatDialogModule, LucideAngularModule, CommonModule, ProgressSpinner],
  templateUrl: './custom-prompt-dialog.html',
  styleUrl: './custom-prompt-dialog.css',
})
export class CustomPromptDialog {
  //icons
  readonly info = BadgeInfo;

  // Variables
  protected showLoader = signal<boolean>(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CustomPromptDialogData,
    private dialogRef: MatDialogRef<CustomPromptDialog>,
    private toastService: ToastService
  ) {}

  confirm(): void {
    this.showLoader.set(true);
    this.data.func().subscribe({
      next: (response: any) => {
        this.showLoader
        this.dialogRef.close(response);
        this.toastService.showToast("Success",3500,'success');
      },
      error: (err: any) => {
        this.showLoader.set(false);
        this.toastService.showToast(err, 3500, 'error');
      },
    });
  }
}
