FROM node:boron

RUN mkdir -p usr/src/substations
WORKDIR /usr/src/substations

COPY package.json /usr/src/substations 
RUN npm install

COPY ./ /usr/src/substations

EXPOSE 3001
EXPOSE 5858

CMD ["node", "--debug=5858","index.js"]
