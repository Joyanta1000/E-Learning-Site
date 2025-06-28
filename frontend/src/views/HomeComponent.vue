<template>

  <HomePageLayout>
    <div class="cus-background" fluid>

      <v-container class="">
        <v-row class="cus-upper-level" dense>

          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
            <template v-slot:prev="{ props }">
              <v-btn icon @click="props.onClick" style="background-color: #CD4257 !important; color: white;">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </template>

            <template v-slot:next="{ props }">
              <v-btn icon @click="props.onClick" style="background-color: #CD4257 !important; color: white;">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </template>
          </v-carousel>

        </v-row>

      </v-container>

    </div>

    <!-- Main Content -->
    <div class="cus-main w-100 md:px-5 sm:px-5 pb-15">
      <v-container>
        <!-- Cards Section -->
        <div class="w-full d-flex justify-center items-center text-h3 cus-offer py-10">What We Offer</div>
        <v-row gap="15">
          <v-col v-for="card in cards" :key="card.title" class="g-5" cols="12" md="4" sm="6">
            <router-link :to="`/object/list/1`" class="text-decoration-none">
              <v-card class="cus-card">
                <div>
                  <div class="d-flex justify-center items-center">
                    <v-img src="http://127.0.0.1:8000/images/promotional/promo.png" class="w-75" alt=""
                      srcset=""></v-img>
                  </div>

                  <div class="text-center text-white px-10 pt-5 cus-offer-headline">
                    {{ card.title }}
                  </div>
                  <div class="cus-offer-description">
                    <p class="text-center text-white px-10 pt-5 pb-10">
                      There will be some short description....
                    </p>
                  </div>
                </div>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="cus-best-selling w-100 md:px-5 sm:px-5">
      <v-container>
        <!-- Cards Section -->
        <div class="w-full d-flex justify-center items-center text-h3 cus-offer py-10">Best Selling
          Products</div>

        <v-sheet class="mx-auto cus-best-selling-slide">
          <!--<v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" multiple show-arrows>
              <v-slide-group-item v-for="n in 5" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                <v-card :class="['ma-4', selectedClass]"  height="250" width="240"
                  @click="toggle">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group> -->
          <v-slide-group v-model="model" selected-class="bg-primary" multiple>
            <v-slide-group-item v-for="n in 5" :key="n">
              <v-card class="ma-4 cus-best-sell cursor-pointer" height="400" width="320">
                <div class="d-flex fill-height align-center justify-center">
                  <div class="fill-width">
                    <v-img src="http://127.0.0.1:8000/images/promotional/promo.png" alt="promo">
                    </v-img>
                    <div class="px-3 py-2">
                      <div class="d-flex justify-space-between cus-best-sell-upper-text">
                        <h3 class="font-weight-bold">Glow Radiance Serum</h3>
                        <div class="font-weight-bold cus-best-sell-price"> 200 BDT</div>
                      </div>
                      <div class="mt-2 cus-best-sell-description">
                        A vitamin C-enriched serum for radiant skin.
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>

          <!-- <v-slide-group v-model="model" multiple :class="'custom-slide-group'">
              <v-slide-group-item v-for="(item, index) in items" :key="index" class="pa-3">
                <v-card class="ma-4 cus-best-sell cursor-pointer" height="400" width="320">
                  <div class="d-flex fill-height align-center justify-center">
                    <div class="fill-width">
                      <v-img src="http://127.0.0.1:8000/images/promotional/promo.png" alt="promo">
                      </v-img>
                      <div class="px-3 py-2">
                        <div class="d-flex justify-space-between cus-best-sell-upper-text">
                          <h3 class="font-weight-bold">Glow Radiance Serum</h3>
                          <div class="font-weight-bold cus-best-sell-price"> 200 BDT</div>
                        </div>
                        <div class="mt-2 cus-best-sell-description">
                          A vitamin C-enriched serum for radiant skin.
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-slide-group-item>

            
              <template #prev>
                <v-btn icon class="custom-arrow left">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </template>

<template #next>
                <v-btn icon class="custom-arrow right">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </template>
</v-slide-group> -->
        </v-sheet>
      </v-container>
    </div>
  </HomePageLayout>

</template>

<script setup>

// Card Data
const cards = [
  { title: "Jewellery", src: "http://127.0.0.1:8000/images/promotional/promo.png" },
  { title: "Skin Care", src: "http://127.0.0.1:8000/images/promotional/promo.png" },
  { title: "Bags", src: "http://127.0.0.1:8000/images/promotional/promo.png" },
];
const best_sellings = [
  { title: "Jewellery", src: "http://127.0.0.1:8000/images/promotional/promo.png" },
  { title: "Skin Care", src: "http://127.0.0.1:8000/images/promotional/promo.png" },
  { title: "Bags", src: "http://127.0.0.1:8000/images/promotional/promo.png" },
  { title: "Bags", src: "http://127.0.0.1:8000/images/promotional/promo.png" },
];

const items = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
]
</script>

<script>

import HomePageLayout from "./Layouts/HomePageLayout.vue";
export default {
  name: 'HomePageLayout',
  components: {
    HomePageLayout,
  },
  data() {
    return {
      model: [],
      items: [
        { image: "http://127.0.0.1:8000/images/promotional/promo.png" },
        { image: "http://127.0.0.1:8000/images/promotional/promo.png" },
        { image: "http://127.0.0.1:8000/images/promotional/promo.png" },
        { image: "http://127.0.0.1:8000/images/promotional/promo.png" },
      ],
    };
  },
};
</script>

<style scoped>
/* Hero Section */
.cus-background {

  display: flex;
  justify-content: center;
  align-items: center;
}

/* Main Content */
/* .cus-main {
  background-color: #FF94A94D;
  padding-top: 5px;
} */

/* Cards */
.cus-card {
  background-color: #CD4257;
  box-shadow: none !important;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.cus-offer-headline {
  font-weight: 700;
  font-size: 30px;
}

.cus-offer-description {
  font-size: 18px;
}

.cus-card .v-btn {
  background-color: #faebf0;
  color: #7a2312;
  font-weight: 500;
}

.cus-card .v-img {
  height: 300px;
}

.cus-upper-level {
  height: 100%;
}

.promotional-image {
  width: 60%;
}

.cus-offer {
  color: #CD4257;
  font-weight: 700;
}

.cus-best-selling {}

.cus-best-selling-slide {
  background-color: transparent;
}

:v-sheet.mdi-chevron-right {
  border-radius: 27px !important;
  height: 35px !important;
  width: 35px !important;
  background-color: #CD4257 !important;
  color: white !important;
}

.shopnow-btn {
  background-color: #AF253AED !important;
  margin-top: 20px;
  color: white !important;
  text-transform: capitalize !important;
  box-shadow: #9b3926 0px 2px 2px 0px, #a0422f 0px 2px 3px 0px !important;
  font-size: 15px;
  padding: 0px 25px;
  border-radius: 10px;
}

.cus-best-sell {
  border-radius: 20px;
}

.cus-best-sell-upper-text {
  font-size: 16px;
}

.cus-best-sell-price {
  line-height: 30px;
}

.cus-best-sell-description {
  font-size: 16px;
}


.custom-slide-group {
  position: relative;
}

.custom-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: #CD4257;
  color: white;
  border-radius: 50%;
}

.custom-arrow.left {
  left: 10px;
}

.custom-arrow.right {
  right: 10px;
}

/* .cus-profile{
  width: 50px !important;
} */
/* Responsive Styles */
@media (max-width: 599px) {

  .cus-card .v-img {
    height: 200px;
  }

}

@media (min-width: 600px) and (max-width: 959px) {

  .cus-card .v-img {
    height: 250px;
  }
}

@media (min-width: 960px) and (max-width: 1279px) {

  .cus-card .v-img {
    height: 250px;
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {

  .cus-card .v-img {
    height: 250px;
  }
}

@media (min-width: 1920px) and (max-width: 2559px) {
  .cus-card .v-img {
    height: 250px;
  }
}

@media (min-width: 2560px) {

  .cus-card .v-img {
    height: 250px;
  }
}
</style>
