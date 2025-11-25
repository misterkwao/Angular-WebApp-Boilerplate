// Custom prompt dialog
export interface CustomPromptDialogData {
  type: string;
  message: string;
  func: () => any;
}
