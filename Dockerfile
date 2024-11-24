FROM node:alpine

WORKDIR /app

RUN npm install -g serve

COPY . .

EXPOSE 3002

CMD ["serve", "-p", "3002", "./plants"]