<template>
  <div class="content">
    <h2>Text is the content</h2>
    <p>It resize based on the height of the content. You can try resizing the browser the height will adjust accordingly.</p>
    <small>Due to the nature of images, this is very hard to see clearly.</small>
  </div>
</template>

<style scoped lang="less">
.content {
  background: url('/joe-green-jewel.jpg') no-repeat center;
  background-size: cover;
  padding: 24px;

  * {
    color: white;
  }
}
</style>
