// iport istanza vue:
import { createApp } from 'vue'

// import style scss:
import './assets/scss/main.scss'

// import typography:
import '@fontsource/ubuntu-condensed';

// import App Vue:
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */

import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; // alias (as) we cant have 2 import with same names
import { faStar } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faStar, faStarRegular);

// append createApp in #app:
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
