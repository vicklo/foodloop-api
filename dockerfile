from node:16
run mkdir -p /api
WORKDIR /api
copy package*.json .
run npm ci && npm cache clean --force
copy . .
expose 3100

run npm run dev


# dckr_pat_oO2GMwbl9uEWG5D4AAK3ZkSPib8 api key