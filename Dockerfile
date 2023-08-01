FROM node:18-alpine
WORKDIR /front
COPY package.json tsconfig*.json angular.json ./
COPY src/ src

RUN npm install
RUN ng build --prod

EXPOSE 4200
CMD ["ng", "serve", "--prod"]
