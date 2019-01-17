<template>
<b-container class="swiper-container" fluid>
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="1024"
                  img-height="420"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!--&lt;!&ndash; Text slides with image &ndash;&gt;-->
        <!--<b-carousel-slide caption="First slide"-->
                          <!--text="Nulla vitae elit libero, a pharetra augue mollis interdum."-->
                          <!--img-src="https://picsum.photos/1024/480/?image=52"-->
        <!--&gt;</b-carousel-slide>-->

        <!--&lt;!&ndash; Slides with custom text &ndash;&gt;-->
        <!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
          <!--<h1>Hello world!</h1>-->
        <!--</b-carousel-slide>-->

        <!-- Slides with image only -->
        <b-carousel-slide class="swiper-item" img-src="https://www.fenghuangjinfu.com/static/pic/banner/26f6e8e7-5b98-40bb-b1a3-89059d021554.png">
        </b-carousel-slide>
        <b-carousel-slide class="swiper-item" img-src="https://www.fenghuangjinfu.com/static/pic/banner/26f6e8e7-5b98-40bb-b1a3-89059d021554.png/">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <!--<b-carousel-slide>-->
          <!--<img slot="img" class="d-block img-fluid w-100" width="1024" height="480"-->
               <!--src="https://picsum.photos/1024/480/?image=55" alt="image slot">-->
        <!--</b-carousel-slide>-->

        <!--&lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;-->
        <!--<b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
          <!--<p>-->
            <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse-->
            <!--eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque-->
            <!--ut lacus vel interdum.-->
          <!--</p>-->
      </b-carousel>
</b-container>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  padding: 0;
  .swiper-item {
    max-height: 420px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
