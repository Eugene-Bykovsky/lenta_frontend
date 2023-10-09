build:
	docker build -t lenta . --no-cache

start:
	docker run -p 8080:3000 lenta

stop:
	docker stop lentaдфеуые

delete:
	docker container prune
