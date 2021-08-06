<template>
  <div class="pagination">
    <div class="pagination__icon">
      <img src="../assets/icons/chevron-left.svg" alt="arrow left" />
    </div>
    <div class="pagination__item">1</div>
    <div class="pagination__item">2</div>
    <div class="pagination__item active">3</div>
    <div class="pagination__item">4</div>
    <div class="pagination__item">5</div>
    <div class="pagination__icon">
      <img src="../assets/icons/chevron-right.svg" alt="arrow right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style lang="scss" scoped>
.pagination {
  margin: 0 auto;
  width: 230px;
  height: 33px;
  @include flex-between-row;
  margin-bottom: 75px;

  &__icon,
  &__item {
    width: 33px;
    height: 100%;
    @include flex-center;
    cursor: pointer;
  }

  &__item {
    color: $color-text-pagination;
    font-size: 12px;
    font-weight: 300;

    &.active {
      font-size: 14px;
      font-weight: bold;
      color: $color-text-contrast;
      background: $color-brand-primary;
    }
  }
}
</style>
