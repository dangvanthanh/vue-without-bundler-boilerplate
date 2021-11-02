import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const menus = ref([
      { to: '/', name: 'Home' },
      { to: '/about', name: 'About' },
    ])

    return {
      menus,
    }
  },
  template: `
    <ul>
      <li v-for="(menu, menuIndex) in menus" :key="menuIndex">
        <a :href="menu.to">{{ menu.name }}</a>
      </li>
    </ul>
  `,
}