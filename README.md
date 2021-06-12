# CRUD SPA


Projeto simples de um pequeno sistema (CRUD) sendo renderizado em React através de uma Single Page Application (SPA) utilizando as tecnologias PHP com FrameWork Symfony 5.3 + React.

## ✨Pré-requisitos
Instalar todas as aplicações a baixo:

- [Composer](https://getcomposer.org/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [PHP](https://www.php.net/manual/pt_BR/install.windows.php)
- [MySQL](https://dev.mysql.com/downloads/installer/)

Com todos os pré-requisitos instalados você ainda pode rodar um comando em seu terminal (bash) para verificar se o seu computador atende a todos os requisitos para trabalhar com o Framework, basta abrir seu terminal e rodar a seguinte linha de comando:
```php
symfony check:requirements
```

## 🔥 New Symfony Application

1 - Para iniciar nossa nova aplicação clone o repositório ou faça download do projeto para onde desejar em seu computador

Comando:
```git
git@github.com:kinucris/symfony-react-crud-spa.git
```

2 - Acesse a pasta raiz do projeto em seu terminal e então instale as dependências do Symfony com o comando
```bash
composer install
```

3 - Após todas as dependências instaladas, agora duplique e altere o nome do arquivo ".env-sample" para ".env" (Ele se encontra na raiz do projeto) e configure ali para sua conexão MySql

Exemplo:
```end
# DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7"
```

4 - Uma vez com a conexão do banco configurada, agora precisamos executar o seguinte comando para que o symfony crie a Database em nosso banco

```php
php bin/console doctrine:database:create
```

5 - Agora precisamos executar a Migration através do comando:

```php
php bin/console doctrine:migrations:migrate
```
O symfony vai exigir a seguinte mensagem "WARNING! You are about to execute a migration in database "incidentesdb" that could result in schema changes and data loss. Are you sure you wish to continue? (yes/no) [yes]"
Digite Yes para continuar ou simplesmente precione a tecla Enter

6 - Iniciar o servidor do Symfony

```bash
symfony server:start
```
7 - Instalar as dependências do Yarn
```bash
yarn install
```
8 - buildar o projeto para gerar seus Entrypoint
```bash
yarn build
```

## Modo de utilização
O sistema está bem simples e intuitivo, segue .gif

[![GIF12-06-2021_15-45-07.gif](https://s6.gifyu.com/images/GIF12-06-2021_15-45-07.gif)](https://gifyu.com/image/oGrp)


## Agradecimento
Desde já agradeço a oportunidade de participar deste processo seletivo, principalmente a Michelle Maeda.

### Autor
---

<a href="https://www.linkedin.com/in/elvis-moraes/">
 <img style="border-radius: 50%;" src="https://instagram.fqcj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/174424542_464963584624718_4037314511517003129_n.jpg?tp=1&_nc_ht=instagram.fqcj2-1.fna.fbcdn.net&_nc_ohc=BTAmY8JetxcAX_8_ptj&edm=AP_V10EBAAAA&ccb=7-4&oh=9edf1d0e24a42b002aab750eda40943b&oe=60CBCCE8&_nc_sid=4f375e" width="100px;" alt="Elvis Moraes"/>
 <br />
 <sub><b>Elvis Moraes</b></sub></a> <a href="https://www.linkedin.com/in/elvis-moraes/" title="linkedin">🚀</a>

Feito com ❤️ por Elvis Moraes 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@kinucris-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/kinucris)](https://twitter.com/kinucris) [![Linkedin Badge](https://img.shields.io/badge/-Elvis-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/elvis-moraes/)](https://www.linkedin.com/in/elvis-moraes/) 
[![Gmail Badge](https://img.shields.io/badge/-elvismoraes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:elvismoraes@gmail.com)](mailto:elvismoraes@gmail.com)

## License
[MIT](https://choosealicense.com/licenses/mit/)

