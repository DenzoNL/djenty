FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=development --ignore-scripts
COPY . .
RUN npm run build

FROM node:16-alpine
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts
COPY . .
COPY --from=builder /usr/src/app/dist ./dist
CMD ["node", "dist/main"]