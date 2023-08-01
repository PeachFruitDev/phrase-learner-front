FROM node:18-alpine
WORKDIR /front
COPY package.json tsconfig*.json agular.json ./
COPY src/ src

RUN npm install
RUN npm run build

EXPOSE 4200
CMD ["npm", "start"]
