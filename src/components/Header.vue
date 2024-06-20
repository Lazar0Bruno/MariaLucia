<template>
  <header class="header">
    <h1>LOJA BELLA MODAS
    </h1>
    <nav>
      <ul>
        <li><a href="/" target="_blank" rel="noopener">Home</a></li>
        <li><a href="lista-produto" target="_blank" rel="noopener">Produtos</a></li>
        <li><a href="contact-form" target="_blank" rel="noopener">Formulário</a></li>
        <li><a href="https://api.whatsapp.com/send?phone=5565999526219" target="_blank" rel="noopener">Contato</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style scoped>
.header {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
}

.header nav ul {
  list-style: none;
  padding: 0;
}

.header nav ul li {
  display: inline;
  margin: 0 10px;
}

.header nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
