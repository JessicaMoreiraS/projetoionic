FROM node:18

WORKDIR /main/aplicativo

EXPOSE 3000

COPY . /main

CMD ["ionic", "serve"]
