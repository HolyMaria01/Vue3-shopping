const app = Vue.createApp ({
    data () {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/image/socks_green.jpg',
            inventory: 100,
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variant: [
                { id: 2234, color: 'green', image: './assets/image/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/image/socks_blue.jpg' },
            ]

        }
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})