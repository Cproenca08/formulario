async function  main() {
    const api = new Apiv2()
   const pessoa = await api.buscarPorCpf('0000000')
   
   console.log('pessoa',pessoa)
}


main().then(success => console.log('deu certo')).catch(err => console.log('deu erro'))