<template>
  <section>
    <vue-horizontal>
      <div class="item" v-for="i in [0,1,2,3,4,5,6,7,8,9]" :key="i">
        <img src="/joe-green-jewel.jpg">
        <div class="overlay">
          <div>
            <h2>{{ i }}</h2>
            <h5>Image in Horizontal Scroll</h5>
          </div>
        </div>
      </div>
    </vue-horizontal>
  </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal';

export default {
  name: "horizontal.vue",
  components: {VueHorizontal}
}
</script>

<style scoped lang="less">
section {
  margin: 32px;
}

.item {
  width: calc((100% - 36px) / 3);
  margin-right: 18px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  /* FYI: https://github.com/twbs/bootstrap/issues/13640 */
  min-height: 1px;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  padding: 32px;
  text-align: center;
  background: #00000066;
  height: 100%;

  * {
    color: white;
  }

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
