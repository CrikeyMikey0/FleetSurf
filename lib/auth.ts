/**
 * Authentication utilities for client-side operations
 */

/**
 * Set authentication token in cookies
 * @param token - JWT or session token
 */
export const setAuthToken = (token: string) => {
  document.cookie = `authToken=${token}; path=/; max-age=${7 * 24 * 60 * 60}`; // 7 days
};

/**
 * Get authentication token from cookies
 */
export const getAuthToken = (): string | null => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === "authToken") {
      return decodeURIComponent(value);
    }
  }
  return null;
};

/**
 * Clear authentication token
 */
export const clearAuthToken = () => {
  document.cookie = "authToken=; path=/; max-age=0";
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};
