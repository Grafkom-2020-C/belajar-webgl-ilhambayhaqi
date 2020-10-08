function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // .c File
    var vertexShaderSource = `
        void main(){
            gl_PointSize = 10.0;
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `;
    var fragmentShaderSource = `
        void main(){
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        }
    `;

    // .o File
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    // Memasukkan .c ke dalam .o
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Complie .c ke .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Membuat Penampung .exe
    var shaderProgram = gl.createProgram();

    // Isi .o ke .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    
    // Menggabungkan .o pada penambung .exe
    gl.linkProgram(shaderProgram);

    // Menggunakan program .exe
    gl.useProgram(shaderProgram);

    // Membuat Background
    gl.clearColor(0.0, 0.2, 0.5, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}