<script setup>
import { ref } from "vue";
import GenericDAO from "../service/GenericDAO"

const DAO = new GenericDAO('user');
const user = ref({
    name: "",
    email: "",
    registration: "",
});

const submitForm = () => {
    console.log("User:", user.value);
    DAO.insert(user.value)
};
</script>

<template>
    <form @submit.prevent="submitForm" class="space-y-6 bg-white shadow-md p-6 rounded-xl w-full max-w-md">
        <h2 class="text-xl font-bold text-gray-700">Cadastrar Usuário</h2>

        <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Nome</label>
            <input v-model="user.name" type="text" maxlength="100"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2" required />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input v-model="user.email" type="email" maxlength="150"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2" required />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Matrícula</label>
            <input v-model="user.registration" type="text" maxlength="20"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2" required />
        </div>

        <button type="submit"
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow">
            Salvar
        </button>
    </form>
</template>
