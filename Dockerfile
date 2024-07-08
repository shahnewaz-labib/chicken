FROM node:22.3-alpine

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
