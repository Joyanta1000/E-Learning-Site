<template>
    <v-app id="inspire">
        <!-- App Bar -->
        <v-app-bar class="cusappbar-dashboard" height="72" flat>
            <v-img src="http://127.0.0.1:8000/logos/mehek-logo-2.png" max-width="120" max-height="60"></v-img>
            <v-spacer></v-spacer>
            <v-btn prepend-icon="mdi-menu" @click="drawer = !drawer" class="d-flex text-white"></v-btn>
            <v-btn prepend-icon="mdi-account" aria-label="User Profile" class="cus-profile text-white">
                Joyanta
            </v-btn>
        </v-app-bar>

        <!-- Navigation Drawer -->
        <v-navigation-drawer floating v-model="drawer" :temporary="isMobile"
        >
            <v-list v-model:opened="open" >
                <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

                <v-list-group value="Users" >
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
                    </template>

                    <v-list-group value="Admin">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="Admin"></v-list-item>
                        </template>

                        <!-- <v-list-item v-for="([title, icon], i) in admins" :key="i" :prepend-icon="icon" :title="title"
                            :value="title"></v-list-item> -->
                        <v-list-item v-for="([title], i) in admins" :key="i"  :title="title"
                            :value="title"></v-list-item>
                    </v-list-group>

                    <v-list-group value="Actions">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="Actions"></v-list-item>
                        </template>

                        <!-- <v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title"
                            :value="title"></v-list-item> -->
                        <v-list-item v-for="([title], i) in cruds" :key="i" :title="title"
                            :value="title"></v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>

        </v-navigation-drawer>

        <!-- Main Content -->
        <v-main>
            <slot></slot>
        </v-main>

        <!-- Footer -->
        <v-footer color="grey" height="44"></v-footer>
    </v-app>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
    name: "UserDashboardLayout",
    data() {
        return {
            drawer: false,
            open: ['Users'],
            admins: [
                ['Management', 'mdi-account-multiple-outline'],
                ['Settings', 'mdi-cog-outline'],
            ],
            cruds: [
                ['Create', 'mdi-plus-outline'],
                ['Read', 'mdi-file-outline'],
                ['Update', 'mdi-update'],
                ['Delete', 'mdi-delete'],
            ],
        };
    },
    setup() {
        const { smAndDown } = useDisplay();
        return {
            isMobile: smAndDown, // Reactively checks if the screen size is small or down
        };
    },
};
</script>

<style>
.cusappbar-dashboard {
    background-color: #CD4257 !important;
}

.cus-nav-text-section {
    font-size: 25px;
    padding: 0px 10px;
}

.v-list-item-title {
    font-weight: bold;
}

</style>
