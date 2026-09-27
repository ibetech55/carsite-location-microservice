FROM node:24.19.0-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:24.19.0-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY --from=build /app/build ./build

COPY package*.json ./

RUN npm ci --omit=dev

CMD ["node", "./build/server.js"]