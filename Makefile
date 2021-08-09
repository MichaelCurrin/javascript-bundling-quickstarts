default: install

all: install check build

h help:
	@grep '^[a-z]' Makefile


install:
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


fmt-fix:
	npx prettier -w '**/**.{js,jsx,ts,tsx,json}'

fmt-check:
	npx prettier -c '**/**.{js,jsx,ts,tsx,json}'

lint-fix:
	npx eslint . --fix

lint-check:
	npx eslint .

fix: fmt-fix lint-fix
check: fmt-check lint-check


b build:
	cd quickstarts && \
		for Q in *; do \
			echo "$$Q" && \
			(cd "$$Q" && npm run build); \
		done
