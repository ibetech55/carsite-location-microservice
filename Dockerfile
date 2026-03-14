FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/build ./build

COPY package*.json ./

RUN npm ci --omit=dev

CMD ["node", "./build/server.js"]