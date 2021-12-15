#stage 1 Building
FROM node:16.5.0-alpine AS builder
ARG ENV
ENV NODE_ENV=$ENV
#ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:${NODE_ENV}
COPY  package*.json ./dist/
COPY  environments/.env.${NODE_ENV} ./environments/.env.${NODE_ENV}

# Stage 2 to production
FROM node:16.5.0-alpine AS production
COPY --from=builder /app/dist/ ./
COPY --from=builder /app/environments/ ./environments
COPY ormconfig.json ./ormconfig.json
RUN npm ci

EXPOSE 4000
ENTRYPOINT [ "node" ]
CMD [ "/src/main.js","NODE_ENV=${NODE_ENV}"]
