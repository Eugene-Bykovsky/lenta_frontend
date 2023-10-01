# FROM node:19-alpine
# COPY package.json /app/
# COPY src /app/
# WORKDIR /app

# RUN npm install
# CMD ["node", "index.tsx"]
# EXPOSE 3000

# build env
# FROM node as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . ./
# RUN npm run build
# CMD cp -r build result_build

FROM node
WORKDIR /app/front
COPY . .
RUN npm install
# CMD ["node", "index.js"]
CMD ["npm", "start"]
# EXPOSE 8080