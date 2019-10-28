Vue.component('click-counter', {
    template: '#click-counter-template',
    data() {
        return {
            count: 0
        };
    }
});

const app = new Vue({
    el: '#app',

})