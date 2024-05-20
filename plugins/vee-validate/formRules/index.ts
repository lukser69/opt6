import { defineRule, configure } from 'vee-validate'
import { required, email, min, max } from '@vee-validate/dist/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('phone', min)

configure({
  generateMessage: localize({
    en,
    ru: {
      messages: {
        required: 'Это обязательное поле',
        email: 'Поле должно соответствовать шаблону user@domain',
        min: 'Поле должно иметь минимум 0:{length} символов',
        max: 'Поле должно иметь минимум 0:{length} символов',
        length: 'Поле должно иметь 0:{length} символов',
        phone: 'Номер телефона введен некорректно',
      },
    },
  }),
})
setLocale('ru')
