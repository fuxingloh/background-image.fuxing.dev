<template>
  <div>
    <div class="image">
      <section>
        <div>
          <h2>Image with fixed height</h2>
          <p>Height fixed the 25% of browser viewport.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="less">
.image {
  background: url('/joe-green-jewel.jpg') no-repeat center;
  background-size: cover;
  height: 25vw;
}

section {
  padding: 24px 48px;
  text-align: center;
  background: #00000033;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    color: white;
  }
}
</style>
