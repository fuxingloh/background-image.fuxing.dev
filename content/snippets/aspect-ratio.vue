<template>
  <div>
    <section>
      <h2>Image with aspect ratio</h2>
      <p>2:1 50% of the width</p>
    </section>
    <div class="image">
    </div>
  </div>
</template>

<style scoped>
section {
  padding: 24px;
}

.image {
  background: url('/joe-green-jewel.jpg') no-repeat center;
  background-size: cover;
  padding-bottom: 50%;
}
</style>
