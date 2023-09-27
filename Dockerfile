# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho no container
WORKDIR /main/aplicativo

# Exponha a porta em que o aplicativo Ionic está rodando (geralmente a porta 8100)
EXPOSE 8100

# Instale o Ionic CLI e o Angular CLI globalmente
RUN npm install -g @ionic/cli@latest @angular/cli@latest

# Instale as dependências do projeto (você pode usar um arquivo package-lock.json se houver)
COPY package.json package-lock.json* ./
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Comando para iniciar o servidor Ionic (com a opção --host 0.0.0.0 para torná-lo acessível de fora do contêiner)
CMD ["ionic", "serve", "--host", "0.0.0.0"]
