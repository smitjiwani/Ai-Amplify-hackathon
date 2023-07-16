# Ai-Amplify-hackathon

## prequisites

* node 20.4.0

## Clone your repo
```
git clone https://github.com/smitjiwani/Ai-Amplify-hackathon
```

## initialize

<sub>bash file(.sh) needed for initializing the docker for better developer experience.<sub/>

```
npm install
```

to start docker use

```
docker-compose up -d
```
** use the --build flag if you make changes to docker or server files to rebuild.

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

Dev

```
npm run dev
```

Production

```
npm run build
```


to shut down and remove docker

```
docker-compose down
```


## Contributors

* Smit Jiwani
* Prathamesh Gate
* Himanshu Mishra
* Ruturaj Chondekar

