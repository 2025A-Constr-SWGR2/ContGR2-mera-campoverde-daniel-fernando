From node:22.15

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY dist ./

EXPOSE 3000

CMD ["node", "main.js"]
