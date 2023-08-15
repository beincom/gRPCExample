docker-build-ms:
	 docker build -t ms:0.0.1 ./ms

docker-build-client:
	 docker build -t client:0.0.1 ./client

minikube-load-ms:
	 minikube image load ms:0.0.1

minikube-load-client:
	 minikube image load client:0.0.1