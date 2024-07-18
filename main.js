function Produtos(nome, fornecedor, preco) {
    this.nome = nome;
    this.fornecedor = fornecedor;
    let _preco = preco;

    this.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        }
    }
}

function Atacado(nome, fornecedor, preco) {
    Produtos.call(this, nome, fornecedor, preco);

    this.aumento = function() {
        const novoPreco = this.getPreco() * 1.2;
        this.setPreco(novoPreco);
    }
}

function Varejo(nome, fornecedor, preco) {
    Produtos.call(this, nome, fornecedor, preco);

    this.aumento = function() {
        const novoPreco = this.getPreco() * 1.6;
        this.setPreco(novoPreco);
    }
}

const loja1 = new Atacado("Arroz", "Lote1", 15);
const loja2 = new Varejo("Arroz", "Lote2", 15);

loja1.aumento();
console.log(loja1.getPreco());

loja2.aumento();
console.log(loja2.getPreco());