<template>
    <v-app id="inspire">
    
        <v-app-bar class="cusappbar d-flex justify-space-between" :class="{ 'app-bar-scroll': isScrolled }" flat>
    
            <v-img src="http://127.0.0.1:8000/logos/mehek-logo-2.png" max-width="100" max-height="40" alt="Logo"
                cover></v-img>

            <v-spacer></v-spacer>

            <div class="d-none d-md-flex text-white">
                <v-btn text aria-label="Navigate to Home">Home</v-btn>
                <v-btn text aria-label="Navigate to Product">Product</v-btn>
                <v-btn text aria-label="Navigate to About">About</v-btn>
                <v-btn text aria-label="Navigate to Contact">Contact</v-btn>
            </div>
        
            <v-spacer></v-spacer>
         
            <div class="d-none d-md-flex">
                <v-btn prepend-icon="mdi-account" aria-label="User Profile" class="cus-profile">
                    <div class="text-white">Joyanta</div>
                </v-btn>
                <v-btn class="cart-image-button w-10">
                    <img src="http://127.0.0.1:8000/icons/shopping-bag.png" alt="Shopping Bag" />
                </v-btn>
            </div>

            
            <v-app-bar-nav-icon class="cus-bar-nav-icon d-flex d-md-none" @click="drawer = !drawer"
                aria-label="Toggle Navigation Drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer class="custom-navigation-drawer" v-model="drawer" temporary app>
            <v-list>
                <v-list-item prepend-icon="mdi-home" title="Home" @click="drawer = false"></v-list-item>
                <v-list-item prepend-icon="mdi-information" title="About" @click="drawer = false"></v-list-item>
                <v-list-item prepend-icon="mdi-mail" title="Contact" @click="drawer = false"></v-list-item>
                <v-list-item prepend-icon="mdi-cog" title="Settings" @click="drawer = false"></v-list-item>
                <v-list-item prepend-icon="mdi-logout" title="Logout" @click="drawer = false"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <slot></slot>
        </v-main>
   
        <v-footer class="cus-footer">
            <v-container>
                <div class="d-flex flex-wrap justify-space-between">
                    <v-img src="http://127.0.0.1:8000/logos/mehek-logo-2.png" max-width="200" max-height="100"
                        alt="Mehek">
                    </v-img>
                    <div>
                        <h2 class="custom-heading-footer-sections">Company</h2>
                        <ul class="footer-ul-sections">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditionss</li>
                            <li>Why shop with us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="custom-heading-footer-sections">Help</h2>
                        <ul class="footer-ul-sections">
                            <li>Payment</li>
                            <li>Shipping</li>
                            <li>Return and Replacement</li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="custom-heading-footer-sections">Social</h2>
                        <ul class="footer-ul-sections">
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Linkedin</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// State
const drawer = ref(false);
const isScrolled = ref(false);

// Scroll Handler
const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

// Lifecycle Hooks
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});

</script>

<style scoped>
/* General Styling */

body {
    font-family: Tahoma, Verdana, sans-serif;
}

.cusappbar {
    background-color: #CD4257 !important;
    padding: 0 30px 0 30px !important;
    transition: background-color 0.3s, box-shadow 0.3s;

    font-family: 'Poppins', sans-serif;
}

.app-bar-scroll {
    box-shadow: 0 6px 16px rgb(50 20 20 / 10%) !important;

    transition: all 1s ease-in-out;
}

.cus-bar-nav-icon {
    color: #7a2312;
}

.custom-navigation-drawer {
    background-color: #fcf7f7;
}

.cus-card-offer {

    box-shadow: none !important;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

/* Footer */
.cus-footer {
    background-color: #CD4257;
    color: #ffffff;
    min-height: 200px;
    text-align: center;
}

.cart-image-button img {
    height: 17px;
}

.cus-side-upper-div {
    padding: 0px 100px;
}

.custom-heading-footer-sections {
    text-align: left;
    font-weight: bold;
}

ul.footer-ul-sections {
    list-style-type: none;
    /* Removes bullet points */
    margin: 0;
    /* Removes default margin */
    padding: 0;
    /* Removes default padding */
    text-align: left;
}

ul.footer-ul-sections li {
    text-decoration: none;
    /* Removes underline from text links */
    font-size: 16px;
    /* Sets the font size */
    margin: 10px 0px;
    /* Adds spacing between list items */
}

ul.footer-ul-sections li a {
    color: #ffffff;
    /* Sets link color */
    text-decoration: none;
    /* Removes underline */
}

ul.footer-ul-sections li a:hover {
    text-decoration: underline;
    /* Adds underline on hover */
    color: #ff6347;
    /* Changes color on hover */
}

.custom-image {
    width: 300px;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
}

/* .cus-profile{
width: 50px !important;
} */
/* Responsive Styles */
@media (max-width: 599px) {
    .cusappbar {
        padding: 0 8px;
    }

    .cus-footer {
        font-size: 12px;
    }
}

@media (min-width: 600px) and (max-width: 959px) {
    .cusappbar {
        padding: 0 12px;
    }
}

@media (min-width: 960px) and (max-width: 1279px) {
    .cusappbar {
        padding: 0 12px;
    }
}

@media (min-width: 1280px) and (max-width: 1919px) {
    .cusappbar {
        padding: 0 12px;
    }
}

@media (min-width: 1920px) and (max-width: 2559px) {
    .cusappbar {
        padding: 0 12px;
    }
}

@media (min-width: 2560px) {
    .cusappbar {
        padding: 0 12px;
    }
}
</style>