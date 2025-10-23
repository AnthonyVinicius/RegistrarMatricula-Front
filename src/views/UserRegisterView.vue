<script setup>
import { ref } from "vue";
import UserDAO from "../service/UserDAO"

const user = ref({
    name: "",
    email: "",
    registration: "",
});

const submitForm = async () => {
    console.log(user.value)
    try {
        await UserDAO.insert(user.value);
        alert("Usuário cadastrado com sucesso!");
    } catch (err) {
        console.error(err);
        alert("Erro ao cadastrar usuário: " + err.message);
    }
};


const selectedForm = ref("user")
</script>

<template>
    <div class="flex justify-center py-6">
        <form @submit.prevent="submitForm" class="space-y-6 bg-white shadow-md p-6 rounded-xl w-full max-w-md">
            <h2 class="text-xl font-bold text-gray-700">Cadastrar Usuário</h2>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Nome</label>
                <input v-model="user.name" type="text" maxlength="100"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                    required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input v-model="user.email" type="email" maxlength="150"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                    required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Matrícula</label>
                <input v-model="user.registration" type="text" maxlength="20"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                    required />
            </div>

            <button type="submit"
                class="w-full bg-[#1C5E27] text-white hover:bg-[#1C5E10] font-semibold px-4 py-2 rounded-lg shadow">
                Salvar
            </button>
        </form>
        <router-link to="/userDashboard">
            <button
                class="bg-[#1C5E27] text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-[#154b1f] transition-colors text-sm absolute bottom-6 right-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-big-left-icon lucide-arrow-big-left">
                    <path
                        d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
                </svg>
                Voltar
            </button>
        </router-link>
    </div>
</template>
