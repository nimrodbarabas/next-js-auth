/*
 * An array of public routes that are accessible to all users
 * @type {string[]}
 */

export const publicRoutes = ["/", "/auth/new-verification"];

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error", "/auth/reset", "/auth/new-password"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
