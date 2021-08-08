<template>
  <div>
    <section class="hero">
      <img class="hero__bg-image" src="../assets/images/hero-bg.svg" alt="" />
      <div class="container">
        <div class="hero__text-container">
          <h1>Czasopisma</h1>
          <p>
            Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu
            Podatkowego”, który tym razem poświęcony jest w dużej części zmianom
            w podatkach w roku 2019.
          </p>
          <p>
            Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie
            rozliczania kosztów używania samochodów osobowych, wprowadzenie
            „exit tax” czy zmiany dotyczące poboru podatku u źródła na gruncie
            podatków dochodowych, poświęcając im odrębne artykuły.
          </p>
        </div>
      </div>
      <img
        src="../assets/images/hero-magazine.png"
        alt="magazine"
        class="hero__image"
      />
    </section>
    <section class="magazines">
      <div class="container">
        <h2>Wyszukaj czasopismo</h2>
        <div class="magazines__list">
          <div
            class="magazines__item"
            :key="magazine.id"
            v-for="magazine in magazines"
          >
            <img
              :src="require(`../assets/images/${magazine.img}.png`)"
              alt="cover"
            />
            <div class="magazines__text-container">
              <p class="magazines__title">{{ magazine.title }}</p>
              <div>
                <p class="magazines__price">
                  {{ magazine.price }}<span>PLN</span>
                </p>
                <p class="magazines__vat">{{ magazine.vat }}</p>
                <router-link class="magazines__link" :to="magazine.details"
                  >Szczegóły</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Pagination />
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";

export default {
  name: "Magazines",
  components: { Pagination },
  data() {
    return {
      magazines: [],
    };
  },
  created() {
    this.magazines = [
      {
        id: 1,
        img: "mag1",
        title: "Kazus Podatkowy 1(6)2019",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
      {
        id: 2,
        img: "mag1",
        title: "Kazus Podatkowy 1(6)2019",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
      {
        id: 3,
        img: "mag2",
        title: "Procedury administracyjne i podatkowe 2",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
      {
        id: 4,
        img: "mag3",
        title: "Prawo Pomocy Publicznej",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
      {
        id: 5,
        img: "mag1",
        title: "Kazus Podatkowy 1(6)2019",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
      {
        id: 6,
        img: "mag3",
        title: "Prawo Pomocy Publicznej",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
      {
        id: 7,
        img: "mag2",
        title: "Procedury administracyjne i podatkowe 2",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
      {
        id: 8,
        img: "mag1",
        title: "Prawo Pomocy Publicznej",
        price: "98,76",
        vat: "+ VAT 23%",
        details: "/",
      },
    ];
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background: $color-brand-primary;
  height: 360px;
  padding-top: 60px;
  position: relative;

  &__bg-image {
    position: absolute;
    left: 85px;
    bottom: -40px;
  }

  &__text-container {
    color: $color-text-contrast;
    @include flex-between-column;
    align-items: flex-start;
    height: 240px;
    width: 47%;

    h1 {
      font-size: 56px;
    }

    p {
      font-size: 14px;
      line-height: 1.8;

      &:first-of-type {
        font-weight: bold;
      }

      &:last-of-type {
        font-weight: 300;
        color: $color-text-dimmed;
      }
    }
  }

  &__image {
    position: absolute;
    top: 5%;
    right: 12vw;
  }
}

.magazines {
  padding-top: 10%;
  color: $color-brand-primary;

  h2 {
    font-size: 42px;
    margin-bottom: 85px;
  }

  img {
    width: 163px;
    height: 190px;
    position: relative;
    z-index: 5;
  }

  &__list {
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    text-align: center;
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
  }

  &__price {
    font-size: 24px;
    font-weight: bold;

    span {
      font-size: 16px;
      margin-left: 5px;
    }
  }

  &__vat {
    margin: 14px 0 16px;
  }

  &__link {
    text-decoration: none;
    color: $color-brand-primary;
    text-transform: uppercase;
    letter-spacing: 2.4px;
    transition: $transition;
  }

  &__text-container {
    height: 260px;
    padding: 85px 0 28px;
    position: relative;
    top: -65px;
    @include flex-between-column;
    border: 1px solid transparent;
    transition: $transition;

    &:hover {
      border-color: $color-brand-secondary;
      color: $color-brand-secondary;
      cursor: pointer;

      .magazines__link {
        color: $color-brand-secondary;
      }
    }
  }
}

@media (max-width: 1400px) {
  .hero__image {
    right: 0;
  }
}

@media (max-width: 1200px) {
  .hero__text-container {
    p {
      line-height: 1.4;
    }
  }
}

@media (max-width: 992px) {
  .magazines {
    h2 {
      font-size: 34px;
      margin: 20px 0 45px;
    }

    &__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .hero {
    padding-top: 30px;

    &__image {
      width: 430px;
      top: 15%;
    }

    &__text-container {
      h1 {
        font-size: 42px;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 25px;

    &__text-container {
      width: 80%;
      display: block;

      p {
        margin-bottom: 15px;
      }

      h1 {
        margin-bottom: 10px;
      }
    }

    &__image {
      width: 300px;
      right: -5%;
      top: 58%;
    }
  }

  .magazines__title {
    font-size: 16px;
  }

  .magazines__price {
    font-size: 20px;
  }

  .magazines__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .hero__text-container {
    width: 100%;
    text-align: center;

    p:last-child {
      display: none;
    }

    h1 {
      font-size: 36px;
    }
  }

  .hero__image {
    right: calc(45% - 150px);
    top: 40%;
  }

  .magazines {
    h2 {
      font-size: 28px;
    }
  }
}
</style>
