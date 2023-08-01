FROM node:18-alpine
WORKDIR /front
COPY package.json tsconfig*.json angular.json ./
COPY src/ src

RUN npm install
RUN npm install -g @angular/cli@16.1.6
RUN ng build --configuration=production

EXPOSE 4200
CMD ["ng", "serve", "--configuration=production", "--disable-host-check", "--host", "0.0.0.0", "--port", "4200"]
