## Conectando API do X com NodeJs.

### O que?
Este código mostra como usar a API do X para enviar um Tweet diretamente ao meu perfil. 

### Requisitos

- [x] NodeJs - Permite a execução de códigos JavaScript fora de um navegador web.
- [x] Express - O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móveis.
- [x] Twitter Api V2 - É uma ferramenta da rede social que permite a criação de aplicativos e bots programáveis que se conectam à plataforma.

### ☕ Observações
1° Passo: Entrar no site da Twitter Developer.
https://developer.x.com/en

2° Passo: Criar uma conta no Twitter e logar.
https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF9hZnRlcl9sb2dpbiI6Imh0dHBzOi8vZGV2ZWxvcGVyLnguY29tL2VuIn0%3D%22%7D

3° Passo: Acessar o tipo de plano que irá usar.

4° Passo: Entrando no portal do seu plano ira preencher o necessário para continuar.

5° Passo: Irá por opção adicionar seu cartão.

6° Passo: Entrando na página developer. Entrando na página principal irá continuar por "Projects" e selecionar o "Projects App" clicando na engrenagem (configurações).

7° Passo: Entrando na "User authentication settings" e apertando em "Set Up", ira preencher os formulários para poder escrever e ler mensagens diretas (Read and write and Direct message) e confirmando o "Request email from users". ativando o tipo de aplicação com "WEB APP". No próximo formulário irá colocar o link do seu perfil do Twitter. Logo após concluir, será direcionado para pagina de Projects & Apps. 

8° Passo: Selecionar suas Keys em "Keys and Tokens", entrando em Consume Key irá copiar as duas chaves "API key e API Key Secret", logo em seguida anotar seus códigos gerado, seguindo o mesmo procedimento do Consume Key, o Authentication Tokens, irá gerar e copiar seu código do "Access Token and Secret". 

9° Passo: Irá para seu VS Code, instalando as seguintes bibliotecas: NPM Express e twitter-api-v2. Criando um Index.js e colar as chaves que você copiou em seus devidos comandos.


### ❤️ Resultado final
https://github.com/user-attachments/assets/edb82bb0-3a18-47ba-91da-49888ba81126

