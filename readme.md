# Docker sample image with node app

## Create the Dockerimage 
	docker build -t node-rest-api .

## Run the Dockerimage
### with iternactice terminal
	docker run -it -p 9000:3000 node-rest-api
### in detached mode
	docker run -d -p 9000:3000 node-rest-api
