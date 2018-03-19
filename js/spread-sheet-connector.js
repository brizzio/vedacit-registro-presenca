$(document).ready(function(){
    console.log('connector ready');
    
    //var url = 'https://script.google.com/macros/s/AKfycbzj6vQVk34syCXH8XjrJbN4Gy2dW-xACAI-SFSKTpmCPuT2gMM/dev'
    var url = 'https://script.google.com/macros/s/AKfycbzVM7IukwhKGR7zR1J1EuML3L6juyPN1EbwlIB5H_9tn5OPSzvA/dev'
               
    
    $('#submit-get-palestra').on('click', function(e) {
        e.preventDefault();

        var palestra = {}
        palestra.f = "get-palestra-by-id";
        palestra.planilha = "PALESTRAS"
        palestra.id = $('#cod-palestra').val(); 
    
        console.log(palestra);

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: palestra, 
            success: function(result){
            console.log(result);
            //preenche o pre cadastro  
            $('#data-treinamento').html($.date(result.data));
            $('#tema').html(result.tema);
            $('#solicitante').html(result.cliente); 
            $('#tecnico').html(result.consultor); 
            $('#form-get-palestra').hide('fast');        
            $(".pre-dados").show('fast');  
            $(".cadastro").show('fast');           

            //$('#resultado').html(JSON.stringify(result));
            }
        });

    })

    $('#submit-cadastrar').on('click', function(e) {
        e.preventDefault();

        var cadastro = {}
        cadastro.f='cadastro'
        cadastro.tipo = $('#tipo').val();
        cadastro.planilha = 'PRESENCA'; 
        cadastro.palestra = $('#cod-palestra').val(); 
        cadastro.nome = $('#nome').val();
        cadastro.ddd = $('#ddd').val();
        cadastro.whatsapp = $('#whatsapp').val();
        cadastro.email = $('#email').val();
        cadastro.categoria = $("#categor option:selected").text();
        cadastro.profissao = $('#profissao').val();
    
        console.log(cadastro);

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: cadastro, 
            success: function(result){
            console.log(result);
            $(".pre-dados").hide('fast');
            $(".cadastro").hide('fast'); 
            $("#header").html(`<h4 class="container titulo">Por favor, avalie a nossa palestra!</h4>`);
            $("#questionario").show('fast');

            //$('#resultado').html(JSON.stringify(result));
            }
        });
        
    })

    $('#submit-questionario').on('click', function(e) {
        e.preventDefault();
        console.log(e);
        var radios = {}
        var dissertativas = {}
        var resposta = {}
        
        
        var objetivo = $('input[name="objetivo"]');
        radios.objetivo = objetivo.filter(':checked').val();
        if(!radios.objetivo){radios.objetivo = "0"}

        var conteudo = $('input[name="conteudo"]');
        radios.conteudo = conteudo.filter(':checked').val();
        if(!radios.conteudo){radios.conteudo = "0"}

        var clareza = $('input[name="clareza"]');
        radios.clareza = clareza.filter(':checked').val();
        if(!radios.clareza){radios.clareza = "0"}

        var palestrante = $('input[name="palestrante"]');
        radios.palestrante = palestrante.filter(':checked').val();
        if(!radios.palestrante){radios.palestrante = "0"}

        var duvidas = $('input[name="duvidas"]');
        radios.duvidas = duvidas.filter(':checked').val();
        if(!radios.duvidas){radios.duvidas = "0"}

        var ritmo = $('input[name="ritmo"]');
        radios.ritmo = ritmo.filter(':checked').val();
        if(!radios.ritmo){radios.ritmo = "0"}

        var visual = $('input[name="visual"]');
        radios.visual = visual.filter(':checked').val();
        if(!radios.visual){radios.visual = "0"}

        
        dissertativas.correspondeu = $('#pergunta1').val();
        dissertativas.tema = $('#pergunta2').val();
        dissertativas.timing = $('#pergunta3').val();
        dissertativas.sugestoes = $('#pergunta4').val();

        

        resposta.f='questionario'
        resposta.categoria = $("#categor option:selected").text();
        resposta.nome = $('#nome').val();
        resposta.adequacao = radios.objetivo
        resposta.conteudo = radios.conteudo
        resposta.clareza = radios.clareza
        resposta.palestrante = radios.palestrante
        resposta.duvidas = radios.duvidas
        resposta.ritmo = radios.ritmo
        resposta.visual= radios.visual
        resposta.satisfez = dissertativas.correspondeu
        resposta.pertinencia = dissertativas.tema
        resposta.timing = dissertativas.timing
        resposta.sugestoes = dissertativas.sugestoes

        console.log(resposta);

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: resposta, 
            success: function(result){
            console.log(result);
            
            $("#questionario").hide('fast');
            $("nav").hide('fast');
            $("footer").hide('fast');
            $("#header").html(temp(result));
            //$('#resultado').html(JSON.stringify(result));
            }
        });
        
    })
    
    
    function temp(obj){
       
        return `
        <div class="agradecimento">
            <h3 class="header">Tudo Certo!</h3>
            <div class="card horizontal">
            <div class="card-image">
                <img src="http://www.brasilengenharia.com/portal/images/stories/noticias/construcao/vedacit_feicon.jpg">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <h4>${obj.nome}</h4>
                <br><br>
                <h5>${obj.mensagem}
                </div>
                <div class="card-action">
                <a href="about:blank">Fechar</a>
                </div>
            </div>
            </div>
        </div>
            
        `
    }
    
    $.date = function(dateObject) {
        var d = new Date(dateObject);
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        var date = day + "/" + month + "/" + year;
    
        return date;
    };
     

 });