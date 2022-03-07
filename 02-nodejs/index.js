/*
    0- Obter um usuário
    1- Obter o número de telefone de um usuário a partir de seu id
    2- Obter o endereço do usuário pelo id
*/

function obterUsuario(callback){
    setTimeout(function (){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date(),
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '11000515',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0,
        })
    }, 2000);
}

obterUsuario(function resolverUsuario(error, usuario){
    // null || "" | 0 === false
    if(error){
        console.error('PROBLEMA EM USUÁRIO', error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('PROBLEMA EM TELEFONE', error1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, end){
            if(error2){
                console.error2('PROBLEMA EM ENDEREÇO', error2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${end.rua}, ${end.numero},
                Telefone: ${telefone.ddd}${telefone.telefone}
            `);

        });
    });
});
