<script>
import HomePageLayout from './Layouts/HomePageLayout.vue';
export default {
    name: 'ObjectComponent',
    components: {
        HomePageLayout,
    },
    data() {
        return {
            page: 1,
        };
    },
};
</script>

<template>
    <HomePageLayout>
        <v-container>
            <v-row>
                <v-col class="g-5 d-flex justify-center items-center" cols="12" md="4" sm="6">
                    <v-card class="ma-4" height="450" width="320">
                        <router-link :to="`/object/details/1`" class="text-decoration-none custom-link-object-details">
                            <div class="d-flex fill-height align-center justify-center">
                                <div class="fill-width">
                                    <v-img src="http://127.0.0.1:8000/images/promotional/promo.png" alt="promo">
                                    </v-img>
                                    <div class="px-3 py-2">
                                        <div class="d-flex justify-space-between ">
                                            <h3 class="font-weight-bold cus-object-title">Glow Radiance Serum</h3>
                                            <div class="font-weight-bold"> 200 BDT</div>
                                        </div>
                                        <div class="mt-2 cus-object-description">
                                            A vitamin C-enriched serum for radiant skin.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </v-card>
                </v-col>

            </v-row>

            <div class="w-100 d-flex justify-center items-center py-3">
                <v-pagination v-model="page" :length="6"></v-pagination>
            </div>

        </v-container>
    </HomePageLayout>
</template>

<style scoped>
.cus-object-title {
    white-space: nowrap;
    /* Prevents text from wrapping */
    overflow: hidden;
    /* Hides overflow text */
    text-overflow: ellipsis;
    /* Adds "..." at the end */
    max-width: 70%;
    /* Adjust width as needed */
    display: block;
    /* Ensure block display */
}
.custom-link-object-details{
    color: black !important;
}
.custom-link-object-details:hover{
    background-color: unset !important;
}
</style>