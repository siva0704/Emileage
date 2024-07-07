FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/emileage /usr/share/nginx/html

# FROM nginx:alpine
# COPY /dist/emileage /usr/share/nginx/html