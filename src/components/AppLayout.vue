<template>
<AppTopNav/>
<AppHeader/>
<AppHeaderSticky/>
<slot/>
<AppFooter/>
</template>
<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppHeaderSticky from '@/components/AppHeaderSticky.vue'
import AppTopNav from '@/components/AppTopNav.vue'
import { useStore } from 'vuex'
export default {
  name: 'AppLayout',
  components: {
    AppFooter,
    AppHeader,
    AppHeaderSticky,
    AppTopNav
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getCategories')
    return {}
  }
}
</script>
<style></style>
