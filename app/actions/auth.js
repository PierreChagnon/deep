"use server"

import { cookies } from "next/headers"

export async function verifyAdminPassword(password) {
    // Vérification du mot de passe côté serveur
    // La variable d'environnement n'a pas besoin du préfixe NEXT_PUBLIC_
    if (password === process.env.SECRET_ADMIN_PASSWORD) {
        // Si le mot de passe est correct, définir un cookie d'authentification
        // avec une durée de vie limitée (par exemple, 1 heure)
        cookies().set("admin-auth", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60, // 1 heure
            path: "/",
        })

        return { success: true }
    }

    return { success: false }
}

export async function checkAdminAuth() {
    const isAuthenticated = cookies().get("admin-auth")?.value === "true"
    return { isAuthenticated }
}

export async function logoutAdmin() {
    cookies().delete("admin-auth")
    return { success: true }
}

