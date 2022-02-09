# Get default node docker image
FROM node:16.13.2-bullseye-slim

# Change working directory
WORKDIR /app

COPY ["package*.json", "."]

RUN npm install
COPY ["." , "."]
RUN npm run build --production
RUN npm install -g serve
EXPOSE 3000

CMD serve -s build