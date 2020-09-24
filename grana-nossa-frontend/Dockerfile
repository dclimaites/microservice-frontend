#
# Build stage
#
FROM node:latest as node

WORKDIR /app-ui

COPY package*.json /app-ui/
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=node app-ui/dist/grana-nossa-frontend /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
#
# exposição da porta do serviço do node
#
# EXPOSE 4200

# CMD ["npm", "start"]