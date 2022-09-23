const moduloLancamentos = {
    state: {
        lancamentos: [
            {
                id: Math.random().toString(36).substring(2, 5),
                valor: -50,
                descricao: 'Compras no mercado',
                data: '2022-09-23'
            },
            {
                id: Math.random().toString(36).substring(2, 5),
                valor: 100,
                descricao: 'Vendas de HQ',
                data: '2022-08-25'
            },
            {
                id: Math.random().toString(36).substring(2, 5),
                valor: -25,
                descricao: 'Farmácia',
                data: '2022-09-20'
            },
        ],
        caixa: 500
    },
    getters: {
        todosLancamentos: state => state.lancamentos,
        dinheiroEmCaixa: state => state.caixa
    },
    actions: {},
    mutations: {}
}

export default moduloLancamentos