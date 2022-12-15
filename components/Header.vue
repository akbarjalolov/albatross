<template>
  <header class="header" :class="{ anotherHeader: this.$route.path !== '/' }">
    <div class="container">
      <div class="header__content">
        <!-- menu -->
        <!-- <div class="header__menu menu">
          <div
            class="icon-menu"
            :class="{ _active: activeMenu }"
            @click="activeMenu = !activeMenu"
          >
            <span><img src=""/></span>
            <span><img src=""/></span>
          </div>
          <nav class="menu__body" :class="{ _active: activeMenu }">
            <ul class="menu__list">
              <li v-for="(item, index) in headerLink" :key="index">
                <nuxt-link to="/" class="menu__link"></nuxt-link>
              </li>
            </ul>
          </nav>
        </div> -->
        <!-- --- -->
      </div>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Header',
    data() {
      return {
        activeMenu: false,
        headerLink: [
          { link: '', text: '', exact: true },
          { link: '', text: '' },
          { link: '', text: '' },
          { link: '', text: '' },
          { link: '', text: '' },
        ],
      }
    },
    watch: {
      activeMenu(e) {
        if (e) {
          document.querySelector('body').classList.add('_lock')
        } else {
          document.querySelector('body').classList.remove('_lock')
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .icon-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      background: #000;
      border-radius: 10.2857px;
      position: relative;
      transition: all 0.2s;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        z-index: 2;
        transition: all 0.2s;
        img {
          max-width: 100%;
        }
        &:first-child {
          transform: scale(1);
        }
        &:last-child {
          transform: scale(0);
        }
      }
      &._active {
        span {
          transition: all 0.2s;
          &:first-child {
            transform: scale(0);
          }
          &:last-child {
            transform: scale(1);
          }
        }
      }
    }
  }
</style>
