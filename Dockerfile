FROM node:18-alpine
WORKDIR /front
COPY package.json tsconfig*.json angular.json ./
COPY src/ src

RUN npm install
RUN npm run build

EXPOSE 4200
CMD ["npm", "start"]
