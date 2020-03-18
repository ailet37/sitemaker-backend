COMPOSE := docker-compose

build:
	$(COMPOSE) build

up:
	$(COMPOSE) up -d --remove-orphans

down:
	$(COMPOSE) down --remove-orphans