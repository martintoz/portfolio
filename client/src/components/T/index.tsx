import { useContext } from "react"
import { LanguageContext } from "../LanguageProvider"

export const T = ({ children }:any) => {
	const { strings }:any = useContext(LanguageContext)

	return strings[children] || children
}