import BookList from './component/booklist'
import Navbar from './component/Navbar'
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './component/ThemeToggle'
import AuthContextProvider from './contexts/Authcontext';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>
      <Navbar/>
      <BookList/>
      <ThemeToggle/>
      </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
