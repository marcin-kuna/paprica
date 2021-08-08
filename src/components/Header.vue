<template>
  <div class="container">
    <header class="header">
      <router-link to="/">
        <img
          class="header__logo"
          src="../assets/logos/logo.svg"
          alt="Kazus logo"
        />
      </router-link>
      <nav v-if="!isMobile" class="header__nav">
        <ul class="header__nav-links">
          <li :key="link.id" v-for="link in links">
            <router-link class="header__nav-link" :to="link.path">{{
              link.title
            }}</router-link>
          </li>
        </ul>
        <div class="header__panel">
          <button
            class="header__panel-btn"
            :key="icon.id"
            v-for="icon in icons"
            v-on="{ click: icon.clickable ? showModal : null }"
          >
            <img
              :src="require(`../assets/icons/${icon.name}.svg`)"
              :alt="`${icon.name}`"
              class="header__icon"
            />
            <div v-if="icon.badge" class="header__icon-badge">
              {{ icon.badgeNumber }}
            </div>
          </button>
        </div>
      </nav>
      <img v-if="isMobile" src="../assets/icons/hamburger.svg" alt="" />
    </header>
    <Modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "Header",
  components: {
    Modal,
  },
  data() {
    return {
      links: [],
      icons: [],
      isModalVisible: false,
      isMobile: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      document.documentElement.style.overflow = "hidden";
    },
    closeModal() {
      this.isModalVisible = false;
      document.documentElement.style.overflow = "auto";
    },
    onResize() {
      this.isMobile = window.innerWidth < 992;
    },
  },
  created() {
    this.links = [
      {
        id: 1,
        path: "/",
        title: "O Kazusie",
      },
      {
        id: 2,
        path: "/",
        title: "O Firmie",
      },
      {
        id: 3,
        path: "/magazines",
        title: "Czasopisma",
      },
      {
        id: 4,
        path: "/",
        title: "Szkolenia",
      },
      {
        id: 5,
        path: "/",
        title: "Baza Wiedzy",
      },
      {
        id: 6,
        path: "/",
        title: "Kazus TV",
      },
      {
        id: 7,
        path: "/api",
        title: "Kontakt",
      },
    ];
    this.icons = [
      {
        id: 1,
        name: "magnifying-glass",
      },
      {
        id: 2,
        name: "user",
      },
      {
        id: 3,
        name: "bag",
        badge: true,
        badgeNumber: 2,
        clickable: true,
      },
    ];
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 90px;
  @include flex-between-row;
  position: relative;
  z-index: 100;

  &__nav {
    @include flex-between-row;
  }

  &__nav-links {
    @include flex-between-row;

    li {
      list-style-type: none;
      margin-right: 17px;
      white-space: nowrap;
    }
  }

  &__nav-link {
    text-decoration: none;
    color: $color-text-nav;
    font-size: 14px;
    transition: $transition;

    &:hover {
      color: $color-brand-primary;
    }
  }

  &__panel {
    @include flex-between-row;
    margin-left: 73px;
  }

  &__panel-btn {
    width: 40px;
    height: 40px;
    @include flex-center;
    position: relative;
    outline: none;
    border: none;
    background: $color-bg-primary;
    cursor: pointer;
    margin-left: 10px;

    &:first-child {
      background: $color-brand-primary;
      border-radius: 50%;
    }
  }

  &__icon-badge {
    width: 13px;
    height: 13px;
    background: $color-brand-primary;
    border-radius: 50%;
    color: $color-text-contrast;
    font-size: 10px;
    @include flex-center;
    position: absolute;
    top: 8px;
    right: 3px;
  }
}

@media (max-width: 1200px) {
  .header__nav-links {
    li {
      margin-right: 12px;
    }
  }

  .header__panel {
    margin-left: 40px;
  }
}

@media (max-width: 768px) {
  .header__logo {
    width: 130px;
  }
}

@media (max-width: 576px) {
  .header__logo {
    width: 110px;
  }
}
</style>
