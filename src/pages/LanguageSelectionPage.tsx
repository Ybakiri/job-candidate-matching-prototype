import { useNavigate } from 'react-router-dom'
import { useTranslation, Language } from '../context/LanguageContext'

export function LanguageSelectionPage() {
  const navigate = useNavigate()
  const { setLanguage } = useTranslation()

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang)
    navigate(`/${lang}/checkout`)
  }

  const languages = [
    { code: 'de' as Language, label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr' as Language, label: 'Français', flag: '🇫🇷' },
    { code: 'en' as Language, label: 'English', flag: '🇬🇧' }
  ]

  return (
    <div className="min-h-screen bg-[#f9f9fa] flex items-center justify-center font-open-sans">
      <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full mx-4">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#202333] mb-2">
            Job Candidate Matching
          </h1>
          <p className="text-base text-[#585d72]">
            Choose your language / Wählen Sie Ihre Sprache / Choisissez votre langue
          </p>
        </div>

        {/* Language Buttons */}
        <div className="space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 border-2 border-[#e6e6ea] rounded-lg hover:border-[#0e0e14] hover:bg-[#f8f9fa] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0e0e14] focus:ring-offset-2"
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-lg font-semibold text-[#202333]">{lang.label}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-[#585d72]">
          Prototype Demo
        </div>
      </div>
    </div>
  )
}