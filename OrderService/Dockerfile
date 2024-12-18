FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Expose the service port
EXPOSE 5003

CMD ["node", "app.js"]