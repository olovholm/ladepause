<template>
  <div>
<h1>Hello</h1>
  </div>
</template>
<script>

export default {
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    },

  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'offical-guide',
          title: 'Official Guide',
          description: 'A very good official documentation',
          link: 'http://vuejs.org'
        },
        {
          id: 'pepes',
          title: 'Pepes toy store',
          description: 'Chew on that',
          link: 'http://pepestoystore.com'
        },
        {
          id: 'mako',
          title: 'Macovei magic',
          description: 'Dice, empire and black magic',
          link: 'http://makotaco.com'
        }
      ]
    }
  }
}
</script>