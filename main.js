$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(DDD) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            menssagem: {
                required: true
            }
        },
        messages: {
            nome: 'Informe seu nome.',
            email: 'Informe um e-mail válido',
            telefone: 'Informe seu telefone',
            menssagem: 'Digite sua mensagem para melhor lhe atendermos'
        },
        submitHandler: function(form){
            alert('Dados enviados com sucesso!')
            $('form')[0].reset();
        }
    })
})