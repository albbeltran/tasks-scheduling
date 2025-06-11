FROM node:20-alpine AS builder

RUN apk add --no-cache openssl3 python3 make g++

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma
COPY src ./src 

RUN npx prisma generate

COPY . . 

RUN npm run build

FROM node:20-alpine AS production

RUN apk add --no-cache openssl3

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/app.js"]
