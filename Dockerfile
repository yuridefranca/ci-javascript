FROM node:21.7.1

WORKDIR /app

COPY . .

CMD ["node", "./math.mjs"]