export interface IButton {
  variant?: 'primary' | 'outlined' | 'text';
  size?: 'md' | 'sm';
  title?: string;
  type?: "button" | "submit" | "reset";
}