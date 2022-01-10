module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'    // esse objeto de config e usado para nao precisar importar o react em todos os arquivos
        }]
    ]
}