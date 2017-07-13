# Set redis base image
FROM redis

EXPOSE 6379

RUN mkdir -p usr/data/
WORKDIR /usr/data

COPY redis.txt /usr/data
CMD ["redis-server"]

CMD  cat /usr/data/redis.txt | redis-cli --pipe
