import "./App.css";
import AppRoutes from "./app.Routes";
import AuthProvider from "./features/auth/auth.context";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
