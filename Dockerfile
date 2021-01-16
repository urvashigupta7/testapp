FROM node:14
WORKDIR /app
COPY /testapp/package*.json ./
RUN npm install
COPY /testapp/ ./
EXPOSE 3000
CMD [ "npm", "start" ]
