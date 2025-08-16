# frontend/Dockerfile
FROM node:20
WORKDIR /app

COPY package*.json ./
RUN npm ci

# copy EVERYTHING incl. babel config
COPY . .

ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
