export interface IMenuItem {
  name: string
  url: string
}

export const MENU_DATA: IMenuItem[] = [
  { name: 'Тарифы', url: '/tariffs' },
  { name: 'Контакты', url: '/contacts' },
]