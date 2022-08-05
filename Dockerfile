FROM node:17-alpine

WORKDIR /app

RUN yarn global add nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]