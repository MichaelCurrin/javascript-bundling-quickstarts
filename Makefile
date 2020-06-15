install:
	cd quickstarts && for Q in *; do echo "$$Q" && (cd "$$Q" && npm i); done

build:
	cd quickstarts && for Q in *; do echo "$$Q" && (cd "$$Q" && npm run build); done

lint:
	eslint .

lint-fix:
	eslint . --fix
