FROM node:16-alpine

WORKDIR /usr/src/app/delifood

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
