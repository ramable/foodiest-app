const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/assets/desktop');
const destination = path.resolve(__dirname, 'src/public/assets/mobile');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach(image => {
        sharp(`${target}/${image}`)
            .resize(480)
            .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
            .slice(0, -1)
            .join('.')}-small.jpg`));

        sharp(`${target}/${image}`)
            .resize(800)
            .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
            .slice(0, -1)
            .join('.')}-medium.jpg`));
    });