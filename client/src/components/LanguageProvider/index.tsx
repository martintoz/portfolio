import React, { createContext, useCallback, useEffect, useRef, useState } from "react";

export const LanguageContext = createContext({
	language: "en",
	strings: {},
	updateLanguage: (value:any) => {}
})

export const LanguageProvider = ({ children, fetchTranslations }:any) => {
	const [{ language, strings }, setLanguage] = useState({
		language: navigator.language.slice(0, 2) === "es" ? "es":"en",
		strings: {}
	})
	const initialStringsLoaded = useRef(false)

	const updateLanguage = useCallback(
		async (newLang) => {
			if (initialStringsLoaded.current && newLang === language) return
			const newStrings = await fetchTranslations({ language: newLang })
			initialStringsLoaded.current = true
			setLanguage({
				language: newLang,
				strings: newStrings
			})
		},
		[language, fetchTranslations]
	)

	useEffect(() => {
		updateLanguage(language)
	}, [language, updateLanguage])

	const context = {
		language,
		strings,
		updateLanguage: updateLanguage
	}

	return (
		<LanguageContext.Provider value={context}>
			{children}
		</LanguageContext.Provider>
	)
}