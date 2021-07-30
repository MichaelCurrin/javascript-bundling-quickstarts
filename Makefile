default: install

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


fmt:
	npx prettier -w '**/**.{js,jsx,ts,tsx,json}'

l lint-fix:
	npx eslint . --fix

lint-check:
	npx eslint .

fix: fmt lint-fix


b build:
	cd quickstarts && \
		for Q in *; do \
			echo "$$Q" && \
			(cd "$$Q" && npm run build); \
		done
