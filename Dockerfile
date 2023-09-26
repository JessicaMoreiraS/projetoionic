FROM node:18

WORKDIR /main/aplicativo

EXPOSE 3000

RUN npm install -g @ionic/cli @angular/cli

RUN npm install @angular-devkit/build-angular

COPY . /main

CMD ["ionic", "serve"]
