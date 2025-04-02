"use client"
export const maxDuration = 60; // This function can run for a maximum of 60 seconds

import { useState, useEffect } from "react"
import mergeJSONToCSV from "../utils/mergeJSONToCSV"
import { verifyAdminPassword, checkAdminAuth, logoutAdmin } from "../actions/auth"
import getAllDocuments from "../actions/form-actions"

export default function Admin() {
    const [password, setPassword] = useState("")
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    // Vérifier l'état d'authentification au chargement
    useEffect(() => {
        const checkAuth = async () => {
            const { isAuthenticated } = await checkAdminAuth()
            setIsLogged(isAuthenticated)
            setIsLoading(false)
        }

        checkAuth()
    }, [])

    const handleLogin = async () => {
        setError("")

        try {
            const result = await verifyAdminPassword(password)

            if (result.success) {
                setIsLogged(true)
                setPassword("")
            } else {
                setError("Mot de passe incorrect")
            }
        } catch (err) {
            setError("Une erreur est survenue")
            console.error(err)
        }
    }

    const handleLogout = async () => {
        await logoutAdmin()
        setIsLogged(false)
    }

    const handleDownload = async () => {
        try {
            const documents = await getAllDocuments()
            mergeJSONToCSV(documents)
        } catch (err) {
            console.error("Erreur lors du téléchargement:", err)
        }
    }

    if (isLoading) {
        return (
            <main className="text-white flex flex-col flex-1 min-h-dvh overflow-x-hidden">
                <div className="flex flex-col items-center justify-center h-full">
                    <p>Chargement...</p>
                </div>
            </main>
        )
    }

    return (
        <main className="text-white flex flex-col flex-1 min-h-dvh overflow-x-hidden">
            <div className="flex flex-col items-center justify-center p-8">
                {!isLogged ? (
                    <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-2xl font-bold mb-6 text-center">Administration</h1>

                        <div className="space-y-4">
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                className="w-full p-3 text-black rounded border border-gray-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                            />

                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors"
                                onClick={handleLogin}
                            >
                                Connexion
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                        <div className="flex justify-between items-center mb-6">
                            <button className="text-sm text-gray-400 hover:text-white" onClick={handleLogout}>
                                Déconnexion
                            </button>
                        </div>

                        <div className="space-y-4">
                            <button
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded transition-colors"
                                onClick={handleDownload}
                            >
                                Télécharger CSV
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

