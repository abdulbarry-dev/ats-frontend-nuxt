import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import "~/assets/css/pagination.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomePaginate);
});
