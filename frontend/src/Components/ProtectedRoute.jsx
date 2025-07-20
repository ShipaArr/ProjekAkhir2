import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem('user'));

  // Redirect ke login jika tidak terautentikasi atau role tidak sesuai
  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}