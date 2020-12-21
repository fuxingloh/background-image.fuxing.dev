<template>
  <div class="root">
    <div v-for="title in ['Image + Text', 'Image + Text']" :key="title">
      <img src="/joe-green-jewel.jpg">
      <section>
        <div>
          <h2>{{ title }}</h2>
          <p>Image must be full height, text is just accompanying the image and must not influence height of image.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="less">
.root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.root > div {
  position: relative;
}

section {
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
