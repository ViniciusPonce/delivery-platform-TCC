FROM node:16-alpine
WORKDIR "/app"

COPY . .
RUN npm install 
RUN npm run build
# # RUN npm install react-scripts@3.3.1 -g --silent

# # COPY . .

# EXPOSE 3000
# # mesmo caso mencionado acima
ENTRYPOINT npm start