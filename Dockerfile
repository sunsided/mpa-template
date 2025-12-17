# syntax=docker/dockerfile:1.6

# Runtime-only image: expects `task build` to have produced ./build locally.
FROM nginx:1.29-alpine
WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY build/ ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
