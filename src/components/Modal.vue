<template>
  <div class="modal__backdrop">
    <div class="container">
      <div class="cart">
        <header class="cart__header">
          <p>Twój koszyk</p>
          <button type="button" class="cart__close-btn" @click="close">
            <img src="../assets/icons/cancel.svg" alt="" />
          </button>
        </header>

        <div class="cart__body">
          <div class="cart__item" :key="item.id" v-for="item in items">
            <div class="cart__item-body">
              <div class="cart__item-icon">
                <img
                  :src="require(`../assets/icons/${item.icon}.svg`)"
                  alt="`${item.icon}`"
                />
              </div>
              <p>{{ item.title }}</p>
              <img src="../assets/icons/rubbish-bin.svg" alt="" />
            </div>
            <div class="cart__item-price">
              <p>Cena</p>
              <p>{{ item.price }},<span>00 PLN</span></p>
            </div>
          </div>
        </div>

        <footer class="cart__footer">
          <div class="cart__footer-body">
            <p>Łączna kwota</p>
            <div class="cart__footer-summary">
              <p>979,<span>00 PLN</span></p>
              <p>+ VAT 23%</p>
            </div>
          </div>
          <button type="button" class="cart__footer-btn" @click="close">
            Przejdź do koszyka
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  created() {
    this.items = [
      {
        id: 1,
        title: "Kazus Podatkowy 1(6)2019",
        icon: "book",
        price: 98,
      },
      {
        id: 2,
        title: "Praktyczne problemy związane z realizacją podatku rolnego...",
        icon: "location-pin",
        price: 98,
      },
      {
        id: 3,
        title: "Praktyczne problemy związane z realizacją podatku rolnego...",
        icon: "book",
        price: 98,
      },
    ];
  },
};
</script>

<style lang="scss" scoped>
.modal__backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(62, 62, 62, 0.6);
  z-index: 1000;
}

.cart {
  background: $color-bg-primary;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 90px;
  right: 12px;
  width: 380px;

  &__header {
    @include flex-between-row;

    p {
      color: $color-text-nav;
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0 16px 30px;
    }
  }

  &__close-btn {
    width: 41px;
    height: 41px;
    @include flex-center;
    background: $color-brand-primary;
    outline: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }

  &__body {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    padding-bottom: 10px;
  }

  &__item {
    margin-bottom: 11px;
    background: rgba(241, 245, 245, 0.4);

    &-body {
      @include flex-between-row;
      border-bottom: 1px solid $color-text-dimmed;
      padding: 9px 20px 10px 11px;

      p {
        font-size: 16px;
        font-weight: bold;
        color: $color-brand-primary;
        margin-left: -40px;
        max-width: 55%;
        line-height: 1.5;
      }
    }

    &-icon {
      @include flex-center;
      border-radius: 50%;
      width: 52px;
      height: 52px;
      background: $color-text-dimmed;
    }

    &-price {
      height: 50px;
      @include flex-between-row;
      color: $color-text-nav;
      padding: 0 20px 0 23px;

      p {
        font-size: 18px;
        font-weight: bold;

        &:first-child {
          font-size: 14px;
          font-weight: 300;
        }
      }

      span {
        font-size: 15px;
      }
    }
  }

  &__footer {
    border-top: 1px solid rgba(110, 132, 132, 0.35);

    &-body {
      @include flex-between-row;
      padding: 0 30px;
      margin-top: 25px;
      color: $color-text-nav;

      p {
        font-size: 16px;
        font-weight: bold;
      }
    }

    &-summary {
      text-align: center;

      p {
        font-size: 22px;
        font-weight: bold;

        &:last-child {
          font-size: 14px;
          font-weight: 300;
          margin-top: 5px;
        }
      }

      span {
        font-size: 16px;
      }
    }

    &-btn {
      display: block;
      width: 80%;
      height: 50px;
      margin: 18px auto 28px;
      color: $color-text-contrast;
      background: $color-brand-secondary;
      border: none;
      font-size: medium;
      text-transform: uppercase;
      letter-spacing: 2.4px;
      cursor: pointer;
    }
  }
}
</style>
