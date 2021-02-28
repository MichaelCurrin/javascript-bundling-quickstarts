default: install

h help:
		@grep '^[a-z]' Makefile

i install:
	cd quickstarts && \
		for Q in *; do \
			echo "$$Q" && \
			(cd "$$Q" && npm install); \
		done

upgrade:
	cd quickstarts && \
		for Q in *; do \
			echo "$$Q" && \
			(cd "$$Q" && npm upgrade); \
		done

b build:
	cd quickstarts && \
		for Q in *; do \
			echo "$$Q" && \
			(cd "$$Q" && npm run build); \
		done


fmt:
	npx prettier -w '**/**.{js,ts,json}'

l lint:
	npx eslint . --fix

lint-check:
	npx eslint .
