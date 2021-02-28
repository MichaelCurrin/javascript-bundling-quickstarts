default: install

h help:
		@egrep '^\S|^$$' Makefile

i install:
	cd quickstarts && \
		for Q in *; do \
			echo "$$Q" && \
			(cd "$$Q" && npm install); \
		done


b build:
	cd quickstarts && \
		for Q in *; do \
			echo "$$Q" && \
			(cd "$$Q" && npm run build); \
		done

fmt:
	npx prettier -w '**/**.{js,ts,json}'

l lint-fix:
	eslint . --fix

lint-check:
	eslint .
