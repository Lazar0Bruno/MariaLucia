<template>
  <div class="form-container">
    <h2>Formulário</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nome:</label>
        <input type="text" v-model="form.name" id="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" id="email" required>
      </div>
      <div>
        <label for="address">Endereço:</label>
        <input type="text" v-model="form.address" id="address" required>
      </div>
      <div>
        <label for="cep">CEP:</label>
        <input type="text" v-model="form.cep" id="cep" required>
      </div>
      <div>
        <label for="phone">Telefone:</label>
        <input type="tel" v-model="form.phone" id="phone" required>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        address: '',
        cep: '',
        phone: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form Submitted:', this.form);
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
      alert('Formulário enviado com sucesso!');
      this.form = {
        name: '',
        email: '',
        address: '',
        cep: '',
        phone: ''
      };
    }
  }
}
</script>

<style scoped>
.form-container {
  border: 1px solid #3498db;
  padding: 10px;
  margin: 20px;
}
form div {
  margin-bottom: 10px;
}
form label {
  display: block;
}
form input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
</style>
