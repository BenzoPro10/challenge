#!-----> Build stage
FROM node:alpine3.19 as build
WORKDIR /app
COPY package.json ./
RUN npm i --silent
COPY . .
RUN npm run build

#!-----> Production stage
FROM node:alpine3.19
WORKDIR /app
COPY --from=build /app/dist ./dist
ENV HOST=0.0.0.0
EXPOSE 4001
CMD ["npm", "run", "dev", "--", "--host"]
