import React from 'react';
import './Produtos.css'; // Importando arquivo CSS para estilização

export default function Produtos() {
    return (
        <div className="produtos-container">
            <h1>Nossos Produtos</h1>
            <div className="produto-card">
                <h2>Produto 1</h2>
                <p>Descrição do produto 1.</p>
                <button>Ver Detalhes</button>
            </div>
            <div className="produto-card">
                <h2>Produto 2</h2>
                <p>Descrição do produto 2.</p>
                <button>Ver Detalhes</button>
            </div>
            <div className="produto-card">
                <h2>Produto 3</h2>
                <p>Descrição do produto 3.</p>
                <button>Ver Detalhes</button>
            </div>
        </div>
    );
}

    
