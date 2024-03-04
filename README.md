# Angular
# Fundamentos Angular/Componentes e Estilização

site para se inspirar em design: https://dribbble.com/

site para obter icons : https://www.flaticon.com/br/

Para criar um projeto angular é necessário digitar o seguinte comando no terminal: 

ng new projeto-inicial --no-standalone

Comando para criar um component ng g c AQUI O NOME DO COMPONENTE

spec.ts - arquivos de testes unitários.

component.scss - componente de estilo 

A anotation @ Component diz que a minha classe é um componente.

- Selector: nome do component no html quando for referenciado. ex: <app-card> </app-card>
    - TemplateUrl: carregar o html que está dentro desse arquivo.
    - StyleUrls: estilo que vai carregar quando esse componente for chamado.

Ideal é que sempre o component PAI mudar a posição/comportamento dos component filhos

Criar componentes dinâmicos caso eles forem iguais e só mudem uma informação ou outra mas a estrutura for a mesma.

card-button é um component filho dentro do meu app-card
