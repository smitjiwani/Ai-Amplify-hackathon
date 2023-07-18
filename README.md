# Ai-Amplify-hackathon

## prequisites

* node 20.4.0

## Clone your repo
```
git clone https://github.com/smitjiwani/Ai-Amplify-hackathon
```

## initialize

```
npm install
```
> bash file(.sh) needed for initializing the docker for better developer experience.


### Server-side


to start docker use

```
docker-compose up -d
```
> use the --build flag if you make changes to docker or server files to rebuild.

Go to bash

```
docker exec -it ai-amplify-hackathon-server-1 bash
```

Migrate

```
npm run migrate
```

Seed

```
npm run seed
```

### Client-side

Dev

```
npm run dev
```

Production

```
npm run build
```

> frontend runs on ```localhost:5173``` and backend runs on ```localhost:5000```

to shut down and remove docker

```
docker-compose down
```


## Contributors

* Smit Jiwani
* Prathamesh Gate
* Himanshu Mishra
* Ruturaj Chondekar

