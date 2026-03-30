import "./App.css";
import MyForms from "./components/MyForms";

function App() {
  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForms
          user={{
            name: "josias",
            email: "josias@gmail.com",
            bio: "advogado",
            role: "admin",
          }}
        />
      </div>
    </>
  );
}

export default App;
