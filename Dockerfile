FROM node:22.3-alpine

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

RUN npm run build
RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["npm", "start"]
