export function App() {
  // Erro lançado para validar no console do navegador
  // o funcionamento do Source map (devtool)
  throw new Error('Chama no Erro!!!');

  return <h1>Hello Guilherme!</h1>
}