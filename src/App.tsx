import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { colors, typography } from "./themes/tokens";

export function App() {
  return (
    <div
      className="p-8 w-screen h-screen flex flex-col items-center justify-center gap-8"
      style={{
        backgroundColor: "#F9F9F9",
        fontFamily: typography.fontFamily,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontWeight: typography.fontWeightBold,
            color: colors.primaryMain,
            marginBottom: "0.5rem",
          }}
          className="text-3xl sm:text-4xl"
        >
          Bem-vindo ao Design System da Teddy
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: colors.neutralText,
          }}
        >
          Explore os componentes reutilizáveis criados com carinho para sua
          equipe!
        </p>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "20rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Input fullWidth placeholder="Digite algo" />
        <Button
          variant="solid"
          fullWidth
          onClick={() => alert("Você clicou em começar!")}
        >
          Começar
        </Button>
      </div>

      <span
        style={{
          color: colors.primaryBorder,
          fontWeight: typography.fontWeightMedium,
        }}
      >
        Marcos França - 2025
      </span>
    </div>
  );
}

export default App;
