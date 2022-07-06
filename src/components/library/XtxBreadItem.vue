<template>
	<div class="xtx-bread-item">
 <router-link v-if="path" :to="path"><slot></slot></router-link>
	<span v-else><slot></slot></span>
	</div>
</template>
<script>
export default {
  name: 'XtxBreadItem',
  props: {
    path: {
      type: String
    }
  }

}
</script>
<style lang="less" scoped>
.xtx-bread-item{
	a{
		color:#666;
		transition: all 0.4s;
		&:hover{
			color:#27BA9B
		}
	}
}
</style>
