FROM nginx:latest

COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoin.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]