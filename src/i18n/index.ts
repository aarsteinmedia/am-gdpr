import en from '@/i18n/en.json'
import fr from '@/i18n/fr.json'
import no from '@/i18n/no.json'

export const languages = ['en', 'fr', 'nb', 'no'] as const,
  fallbackLanguage = 'en',
  browserLanguage =
    document.documentElement.lang.toLowerCase() || fallbackLanguage,
  translation =
    languages.find((lang) => browserLanguage.includes(lang)) || fallbackLanguage

/**
 *
 */
export default function getTranslation() {
  switch (translation) {
    case 'fr':
      return fr
    case 'no':
    case 'nb':
      return no
    default:
      return en
  }
}
