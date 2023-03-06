FROM node:14.18 as builder

WORKDIR '/app'

COPY ./package*.json ./
RUN npm i
COPY ./ ./
RUN npm run build

FROM nginx:1.19
COPY ./proxy/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
ENV NODE_ENV=production

EXPOSE 3000