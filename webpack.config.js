module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    relolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { 
                est: /\.jsx$/, 
                loader: "babel", 
                query:
                  {
                    presets:['es2015', 'react']
                  }
            }
        ]
    }    
};