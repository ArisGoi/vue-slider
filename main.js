const app = new Vue({
    el: "#root",
    data:{
        images: [
            "imgs/cibo.jpg",
            "imgs/insegna.jpg",
            "imgs/mare.jpg",
            "imgs/mare2.jpg",
            "imgs/scrivania.jpg"
        ],
        imgIndex: 0
    },
    methods:{
        prevImg: function(){
            this.imgIndex--;
            if (this.imgIndex < 0) {
                this.imgIndex = this.images.length - 1;
            }
        },
        nextImg: function(){
            this.imgIndex++;
            if (this.imgIndex >= app.images.length) {
                app.imgIndex = 0;
            }
        },
        choseImg: function(index){
            this.imgIndex = index;
        }
    },
});