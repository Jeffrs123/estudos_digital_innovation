function start() {

    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1' ></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2' ></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3' ></div>");

    //Principais variáveis do jogo

    var jogo = {};
    var TECLA = {
        W: 87,
        S: 83,
        D: 68,
        UP: 38,
        DOWN: 40,
        BACKSPACE: 8
    };

    jogo.pressionou = [];

    //Verifica se o usu�rio pressionou alguma tecla	

    $(document).keydown(function (e) {
        jogo.pressionou[e.which] = true;
    });


    $(document).keyup(function (e) {
        jogo.pressionou[e.which] = false;
    });

    //Game Loop

    jogo.timer = setInterval(loop, 30);

    function loop() {

        movefundo();
        movejogador();

    }


    //Função que movimenta o fundo do jogo
    function movefundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 1);

    }


    // início da função movejogador()
    function movejogador() {

        if (jogo.pressionou[TECLA.W] || jogo.pressionou[TECLA.UP]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);
        }

        if (jogo.pressionou[TECLA.S] || jogo.pressionou[TECLA.DOWN]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);
        }

        if (jogo.pressionou[TECLA.D] || jogo.pressionou[TECLA.BACKSPACE]) {

            //Chama fun��o Disparo	
        }

    }

}