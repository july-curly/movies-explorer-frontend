import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, isLoggedIn, ...rest }) {
  return (
    isLoggedIn ? (
      <Component {...rest}/>
    ) : (
          <Navigate to="/" replace />
        )
  );
}