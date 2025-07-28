# @teddy/design-system

Pacote React Design System com componentes reutilizáveis, estilos e hooks para os micro front-ends do projeto Teddy.

## 🚀 Começando

Pré-requisitos

    Node.js >= 18.x

    npm ou yarn

    React 18.x (peer dependency)

## Instalação

Instale via npm apontando para o GitHub (ou NPM quando publicado):

    npm install git+https://github.com/seu-user/design-system.git

    OU

    npm install @teddy/design-system


## Uso

Importe componentes diretamente:

    import { Button } from '@teddy/design-system';

    export function MeuComponente() {
      return <Button variant="solid" size="md">Clique aqui</Button>;
    }