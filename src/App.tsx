import { Button } from "./components/button/Button";

export function App() {
  return (
    <div className="p-8 w-screen h-screen flex flex-col items-center justify-center gap-4">
      <Button
        variant="solid"
        fullWidth
        onClick={() => alert("Primary button clicked!")}
      >
        Botão Primário
      </Button>
      <Button
        variant="outline"
        fullWidth
        onClick={() => alert("Primary button clicked!")}
      >
        Botão Primário
      </Button>
    </div>
  );
}

export default App;
