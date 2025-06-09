FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules

COPY --from=base /app/dist ./dist

ENV AMQP_URL=amqp://guest:guest@rabbitmq:5672
ENV NODE_ENV=production

CMD ["node", "dist/app.js"]

EXPOSE 3000

