<template>
  <div class="content">
    <div class="black-on-white">
      <h3>Translucent black layer.</h3>
      <p>Black background layer with white text.</p>
    </div>
    <div class="white-on-black">
      <h3>Translucent white layer and blur.</h3>
      <p>White background layer with black text.</p>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  background: url('/joe-green-jewel.jpg') no-repeat center;
  background-size: cover;
}

.black-on-white {
  background: #00000050;
  padding: 24px;

  * {
    color: white
  }
}

.white-on-black {
  background: #ffffff66;
  padding: 24px;

  * {
    color: black
  }
}
</style>
