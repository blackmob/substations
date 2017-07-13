FROM node:boron

RUN mkdir -p usr/src/weather
WORKDIR /usr/src/weather

COPY package.json /usr/src/weather 
RUN npm install

COPY ./ /usr/src/weather

EXPOSE 3000
CMD ["npm", "start"]
