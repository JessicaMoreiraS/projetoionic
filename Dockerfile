FROM node:18

WORKDIR /main/aplicativo

EXPOSE 3000

RUN npm install -g @ionic/cli @angular/cli

COPY . /main

CMD ["ionic", "serve"]
