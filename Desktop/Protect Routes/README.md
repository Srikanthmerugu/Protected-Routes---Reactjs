Certainly! Here’s a simplified version of the `README.md` content for your `ProtectedRoutes` component:

---

# ProtectedRoutes Component

## Overview

The `ProtectedRoutes` component is used to manage access to certain routes in a React application based on user authentication. It checks for a JSON Web Token (JWT) in `localStorage` and redirects users based on their authentication status.

## How It Works

- **Authentication Check**: The component verifies if a JWT token exists in `localStorage`.
- **Redirects**:
  - For `restricted` routes: If no token is found, users are redirected to the login page.
  - For non-restricted routes: If a token is present, users are redirected to the home page.
- **Render**: If the authentication status matches the route requirements, the specified component is rendered.

## Usage

1. **Import the Component**: Import `ProtectedRoutes` into your project.
2. **Implement in Routing**: Use `ProtectedRoutes` in your routing setup to protect routes based on authentication.



