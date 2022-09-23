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
    actions: {
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento", lancamento)
            commit("calcularCaixa")
        },
        atualizarCaixa: ({ commit }) => commit('calcularCaixa'),
        excluirLancamento: ({ commit }, id) => {
            commit('removerLancamento', id)
            commit('calcularCaixa')
        }
    },
    mutations: {
        adicionarLancamento: (state, lancamento) => state.lancamentos.unshift(lancamento),
        calcularCaixa: state => {
            const caixa = 
                state.lancamentos.length > 0
                ? state.lancamentos
                    .map(lancamento => lancamento.valor)
                    .reduce((soma, valor) => soma + valor)
                : 0
            state.caixa = caixa
        },
        removerLancamento: 
            (state, id) => 
                state.lancamentos = 
                    state.lancamentos.filter(lancamento => lancamento.id !== id)
    }
}

export default moduloLancamentos