FROM node:16
RUN mkdir -p /api
WORKDIR /api
COPY package*.json .
RUN npm ci && npm cache clean --force
COPY . .
EXPOSE 80
CMD ["npm","run","dev"]


# dckr_pat_oO2GMwbl9uEWG5D4AAK3ZkSPib8 api key