import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const menus = ref([
      { id: 1, name: 'Music' },
      { id: 2, name: 'File' },
      { id: 3, name: 'Edit' },
      { id: 4, name: 'View' },
      { id: 5, name: 'Account' },
    ])

    const sidebars = ref([
      {
        id: 1,
        name: 'Discover',
        items: [
          { id: 11, icon: 'play-circle', name: 'Listen Now' },
          { id: 12, icon: '', name: 'Browse' },
          { id: 13, icon: '', name: 'Radio' },
        ],
      },
      {
        id: 2,
        name: 'Library',
        items: [
          { id: 21, icon: '', name: 'Playlists' },
          { id: 22, icon: '', name: 'Songs' },
          { id: 23, icon: '', name: 'Made for You' },
          { id: 24, icon: '', name: 'Artists' },
          { id: 25, icon: '', name: 'Albums' },
        ],
      },
      {
        id: 3,
        name: 'Playlists ',
        items: [
          { id: 31, icon: '', name: 'Recently Added' },
          { id: 32, icon: '', name: 'Recently Played' },
          { id: 33, icon: '', name: 'Top Songs' },
          { id: 34, icon: '', name: 'Top Albums' },
          { id: 35, icon: '', name: 'Top Artists' },
          { id: 36, icon: '', name: 'Logic Discography' },
          { id: 37, icon: '', name: 'Bedtime Beats' },
        ],
      },
    ])

    const tabs = ref([
      { id: 1, name: 'Music' },
      { id: 2, name: 'Podcasts' },
      { id: 3, name: 'Live' },
    ])

    return {
      menus,
      sidebars,
      tabs,
    }
  },
  template: `
    <div class="flex flex-col h-screen">
      <div class="flex h-9 items-center space-x-1 border bg-background p-1 shadow-sm rounded-none border-b border-none px-2 lg:px-4">
        <button v-for="menu in menus" :key="menu.id" class="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm outline-none focus:bg-accent focus:text-accent-foreground">
          {{ menu.name }}        
        </button>
      </div>
      <div class="border-t">
        <div class="bg-background">
          <div class="grid lg:grid-cols-5">
            <div class="pb-12 hidden lg:block hidden lg:block">
              <div class="space-y-4 py-4">
                <div v-for="sidebar in sidebars" :key="sidebar.id" class="px-3 py-2">
                  <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">{{ sidebar.name }}</h2>
                  <div class="space-y-1">
                    <button v-for="item in sidebar.items" :key="item.id" class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                      <i :data-lucide="item.icon"></i>  
                      {{ item.name }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-3 lg:col-span-4 lg:border-l">
              <div class="h-full px-4 py-6 lg:px-8">
                <div class="h-full space-y-6">
                  <div class="space-between flex items-center">
                    <div class="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
                      <button v-for="tab in tabs" :key="tab.id" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative">
                        {{ tab.name }}
                      </button>
                    </div>
                    <div class="ml-auto mr-4">
                      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                        Add music
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
}
