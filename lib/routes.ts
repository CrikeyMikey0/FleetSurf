/**
 * Centralized routing configuration for the Fleet Flow application
 * This file defines all routes and can be imported throughout the app
 */

export const ROUTES = {
  // Auth routes
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },

  // Main app routes
  DASHBOARD: "/dashboard",
  ANALYTICS: "/analytics",

  // Fleet management routes
  VEHICLES: "/vehicles",
  DRIVERS: "/drivers",
  TRIPS: "/trips",

  // Operations routes
  MAINTENANCE: "/maintenance",
  EXPENSES: "/expenses",

  // Root
  HOME: "/",
} as const;

/**
 * Navigation menu items
 * Can be used to dynamically generate navigation menus
 */
export const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: "dashboard",
  },
  {
    label: "Vehicles",
    href: ROUTES.VEHICLES,
    icon: "vehicles",
  },
  {
    label: "Drivers",
    href: ROUTES.DRIVERS,
    icon: "drivers",
  },
  {
    label: "Trips",
    href: ROUTES.TRIPS,
    icon: "trips",
  },
  {
    label: "Maintenance",
    href: ROUTES.MAINTENANCE,
    icon: "maintenance",
  },
  {
    label: "Expenses",
    href: ROUTES.EXPENSES,
    icon: "expenses",
  },
  {
    label: "Analytics",
    href: ROUTES.ANALYTICS,
    icon: "analytics",
  },
] as const;

/**
 * Public routes that don't require authentication
 */
export const PUBLIC_ROUTES = [ROUTES.AUTH.LOGIN, ROUTES.AUTH.REGISTER, ROUTES.HOME] as const;

/**
 * Protected routes that require authentication
 */
export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.VEHICLES,
  ROUTES.DRIVERS,
  ROUTES.TRIPS,
  ROUTES.MAINTENANCE,
  ROUTES.EXPENSES,
  ROUTES.ANALYTICS,
] as const;

/**
 * Helper function to check if a route is public
 */
export const isPublicRoute = (pathname: string): boolean => {
  return PUBLIC_ROUTES.some((route) => pathname.startsWith(route));
};

/**
 * Helper function to check if a route is protected
 */
export const isProtectedRoute = (pathname: string): boolean => {
  return PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
};
