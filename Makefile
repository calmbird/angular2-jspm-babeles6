build:
	rm -r dist
	mkdir dist
	jspm build src/app dist/app.js
	./node_modules/.bin/uglifyjs dist/app.js -o dist/app.min.js
	./node_modules/.bin/html-dist --config html-dist.config.js --input index.html

develop:
	rm -r dist
	mkdir dist
	jspm build src/app dev/app.js
	./node_modules/.bin/html-dist --config html-dev.config.js --input index.html
	http-server dev