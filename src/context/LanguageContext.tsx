import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Import translations
import enTranslations from '../translations/en.json'
import deTranslations from '../translations/de.json'
import frTranslations from '../translations/fr.json'

export type Language = 'en' | 'de' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: enTranslations,
  de: deTranslations,
  fr: frTranslations
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load language from localStorage or URL on mount
  useEffect(() => {
    const path = window.location.pathname
    const langFromPath = path.split('/')[1] as Language
    
    if (langFromPath && ['en', 'de', 'fr'].includes(langFromPath)) {
      setLanguageState(langFromPath)
    } else {
      const savedLang = localStorage.getItem('selectedLanguage') as Language
      if (savedLang && ['en', 'de', 'fr'].includes(savedLang)) {
        setLanguageState(savedLang)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('selectedLanguage', lang)
  }

  // Translation function with nested key support and parameter interpolation
  const t = (key: string, params?: Record<string, string | number>): any => {
    // Split by dots but handle array notation
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      // Check if this key contains array notation like "summaries[0]"
      const arrayMatch = k.match(/^(\w+)\[(\d+)\]$/)
      
      if (arrayMatch) {
        const arrayKey = arrayMatch[1]
        const index = parseInt(arrayMatch[2])
        
        if (value && typeof value === 'object' && arrayKey in value && Array.isArray(value[arrayKey])) {
          value = value[arrayKey][index]
        } else {
          // Fallback: return the key if translation not found
          return key
        }
      } else if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback: return the key if translation not found
        return key
      }
    }

    // If it's a string, handle parameter interpolation
    if (typeof value === 'string') {
      if (params) {
        return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
          return params[paramKey]?.toString() || match
        })
      }
      return value
    }

    // If it's an array or object, return as-is for complex data structures
    if (Array.isArray(value) || typeof value === 'object') {
      return value
    }

    // Fallback for other types
    return key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}