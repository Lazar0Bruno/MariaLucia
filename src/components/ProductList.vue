<template>
  <div class="product-list">
    <h2>Produtos</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - {{ product.price }}
        <button @click="addToCart(product)">Adicionar ao Carrinho</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { name: 'Produto 1', price: 'R$ 10,00' },
        { name: 'Produto 2', price: 'R$ 20,00' },
        { name: 'Produto 3', price: 'R$ 30,00' }
      ]
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)
    }
  }
}
</script>

<style scoped>
.product-list {
  border: 1px solid #3498db;
  padding: 10px;
  margin: 20px;
}

.product-list button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.product-list button:hover {
  background-color: #2980b9;
}
</style>
