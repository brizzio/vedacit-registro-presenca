$(document).ready(()=>{
    console.log('started');
    $(".button-collapse").sideNav();
    $('select').material_select();


    $(".pre-dados").hide('fast');  
    $(".cadastro").hide('fast');   
    $("#questionario").hide('fast'); 

    //   $(".pre-dados").hide('fast');  
    //   $(".cadastro").hide('fast');   
    //   $("#form-get-palestra").hide('fast'); 
    


    
    //solicitacao de treinamento
    $(".solicitacao").submit(function(){
        event.preventDefault()
        console.log('vai solicitar');
        var solicitacao = {}
        //var opt = document.getElementById("categor");
        //cadastro.nome = $('#nome').val();
        //cadastro.ddd = $('#ddd').val();
        //cadastro.whatsapp = $('#whatsapp').val();
        //cadastro.email = $('#email').val();
        //cadastro.categoria = $("#categor option:selected").text();
        //cadastro.profissao = $('#profissao').val();
        
        //console.log(cadastro);
    
        //window.location.href = "avaliacao.html";
    
    });
    

  });