import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";
import NewBookForm from "./components/BookForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <NavBar></NavBar>
            <BookList></BookList>
            <NewBookForm></NewBookForm>
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
