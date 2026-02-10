import path from 'path';

import {fontGeneration} from './config/fontMin';

function main() {
    const inputDirectory = path.join(__dirname, 'src', 'app', 'styles', 'fonts')
    const styleFontFile = path.join(__dirname, 'src', 'app', 'styles', 'fonts.scss')
    void fontGeneration({
        inputDirectory,
        exclude: [],
        styleFontFile
    })
}

main()