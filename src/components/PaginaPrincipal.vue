<template>
  <div class="pagina-principal">
    <div class="caixa-titulo">
      <h1 class="titulo-loja">Loja Bella Modas</h1> </div>

    <p class="descricao">
      Bem-vinda à Bella Moda, sua boutique exclusiva de roupas femininas em Los Santos. Oferecemos uma seleção única de peças elegantes e modernas, perfeitas para qualquer ocasião.

Na Bella Moda, nossa paixão pela moda se reflete em cada item que selecionamos. Desde vestidos deslumbrantes até acessórios charmosos, temos tudo o que você precisa para realçar seu estilo e destacar sua personalidade.

Nossa equipe dedicada está sempre pronta para ajudá-la a encontrar as peças ideais que combinam com o seu gosto e as tendências mais recentes. Venha nos visitar e deixe-nos proporcionar uma experiência de compra inesquecível, onde você encontrará a moda dos seus sonhos.

Visite a Bella Moda hoje e descubra o que há de melhor no universo da moda feminina!
    </p>

    <p class="convite">
      **Não perca a oportunidade de se destacar na multidão. Compre Ja sua Roupa Diferenciada!**
    </p>
  </div>
</template>

<script>
export default {
  name: 'PaginaPrincipal',
};
</script>

<style scoped>
.pagina-principal {
  background: linear-gradient(to top, rgb(2, 77, 77) 0%, rgba(0, 255, 157, 0.733) 100%);
  opacity: 0.8;
  color: #fff;
  font-family: sans-serif;
  padding: 0; /* Remove padding para ocupar a página toda */
  height: 100vh; /* Define altura da página como 100% da altura da tela */
  display: flex;
  flex-direction: column; /* Organiza os elementos em coluna */
  align-items: center;
  justify-content: center; /* Centraliza os elementos na tela */
}

.caixa-titulo {
  background-color: #003366; /* Azul escuro */
  padding: 20px;
  text-align: center;
}

.titulo-loja {
  font-size: 80px; /* Fonte maior */
  color: #fff;
  margin: 0;
}

.descricao,
.convite {
  font-size: 24px; /* Fonte maior */
  line-height: 2.6;
}
</style>
