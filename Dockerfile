FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 80
ENV PORT=80
CMD ["serve", "-s", "build", "-l", "80"]
