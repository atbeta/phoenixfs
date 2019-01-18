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

        <!-- Slides with image only -->
        <b-carousel-slide v-for="item in slideList" :key="item.id" class="swiper-item" :img-src="item.url">
        </b-carousel-slide>

      </b-carousel>
</b-container>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      slide: 0,
      sliding: null,
      slideList: [{
        id: '01',
        url: 'https://www.fenghuangjinfu.com/static/pic/banner/26f6e8e7-5b98-40bb-b1a3-89059d021554.png',
        content: ''
      },
      {
        id: '02',
        url: 'https://www.fenghuangjinfu.com/static/pic/banner/26f6e8e7-5b98-40bb-b1a3-89059d021554.png/',
        content: ''
      }]
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
