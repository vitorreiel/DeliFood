# DeliFood
<br>

### Uma empresa no ramo de entrega de refeições, por meio da internet.

<br>

---
<br>

## Membros da Equipe
<br>

<div style="display: inline_block;" align="center">
   
   | Nome | Matrícula | Curso |
   |--- |--- |--- |
   | Larissa Kellen da Silva Saraiva | 496243 | Engenharia de Software |
   | Maria Isadora Gonçalves Martins de Oliveira | 496423 | Redes de Computadores |
   | Vitor Reiel Moura de Lima | 499077 | Redes de Computadores | 
   
</div>
<br>

---
<br>

## Entidades ou Tabelas do sistema
<br>

    - Clientes
    - Admins
    - Restaurantes
    - Produtos
    - Endereços
    - Pedidos
    - Históricos
<br>

---
<br>

## Principais funcionalidades da Aplicação
<br>

    - O cliente não registrado, pode conferir os restaurantes cadastrados.
    - O cliente registrado poderá selecionar qualquer restaurante desejado, efetuar a escolha do seu pedido, selecionar seu endereço de entrega já cadastrado, cadastrar um novo endereço ou deletar o endereço. Com o pedido realizado o usuário terá acesso a um histórico de pedidos, com todos os seus pedidos já realizados.
    - O administrador terá controle sobre os clientes, restaurantes e pedidos realizados. O administrador pode criar, buscar, remover e editar clientes, também pode editar, buscar e remover restaurantes. Além de visualizar e buscar todos os pedidos efetuados.
<br>

---
<br>

## Tecnologias e frameworks utilizados
<br>

    - VueJS v3.0
    - Vue-Router
    - Vuex
    - Vue-good-table-next
    - Axios
    - MySQL
    - Strapi
    - Docker e Docker Compose
<br>

---
<br>

## Iniciando a Aplicação

<br>

## ⚠️ Atenção! ⚠️
#### - É necessário ter o Docker instalado em sua máquina.
#### - Na primeira execução do projeto, pode levar alguns minutos para baixar e iniciar os containers. Dito isso, apenas aguarde.

<br>
<br>

Faça o clone do repositório atual. Entre na pasta "Delifood" e em seguida, execute o comando abaixo para iniciar o projeto:
```sh
docker compose up -d
```

<br>

#### As URL de acesso são:

<br>

- Para o front-end com VueJS
```sh
localhost:3000
```

- Para o back-end do Strapi
```sh
localhost:1337
```


<br>

---
<br>

## Operações implementadas para cada entidade da aplicação

<br>

<div style="display: inline_block;" align="center">
   
   | Entidade | Criação | Leitura |  Atualização |  Remoção |
   |--- |--- |--- |--- |--- |
   | Clientes | X | X | X | X |
   | Restaurantes |  | X | X | X |
   | Produtos |  | X |  |  |
   | Endereços | X | X |  | X |
   | Pedidos | X |  |  |  |
   | Históricos | X | X |  |  |

</div>

---
<br>

## Rotas da API REST utilizadas

<br>

<div style="display: inline_block;" align="center">
   
   | Método HTTP | URL |
   |--- |--- |
   | POST | /auth/local |
   | POST | /auth/local/register |
   | GET | /enderecos |
   | POST | /enderecos |
   | DELETE | /enderecos/{id} |
   | GET | /historicos |
   | POST | /historicos |
   | GET | /pedidos | 
   | POST | /pedidos |
   | GET | /restaurantes |   
   | GET | /restaurantes/{id} |
   | POST | /restaurantes |
   | PUT | /restaurantes/{id} |
   | DELETE | /restaurantes/{id} |
   | GET | /users |
   | GET | /users/{id} |
   | POST | /users |
   | PUT | /users/{id} |
   | DELETE | /users/{id} |
   | GET | /produtos |

</div>

---
<div style="display: inline_block;">

   ![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

</div>
<div style="display: inline_block;">
   <img height="30" width="30" hspace="7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
   <img height="30" width="30" hspace="7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
   <img height="30" width="30" hspace="7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
   <img height="30" width="30" hspace="7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
   <img height="34" width="34" hspace="7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
</div>
