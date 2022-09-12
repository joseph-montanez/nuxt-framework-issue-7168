FROM node:16-bullseye

RUN apt-get update
RUN apt-get install -y --no-install-recommends
RUN apt-get install -y build-essential
RUN apt-get -y install libsqlite3-dev

WORKDIR /code

COPY . .

RUN npm install --no-progress

EXPOSE 3000

#ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD [ "npm", "run", "dev"]