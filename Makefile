pull:
	cd app && npx prisma db pull

generate:
	cd app && npx prisma generate

format:
	cd app && npm run format .

nr:
	@read -p "Enter resource name: " resource; \
	cd app && nest g resource $$resource