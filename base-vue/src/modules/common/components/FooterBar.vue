<!--Created by 张强 on 2017/8/4.-->
<template>
  <div
    class="footer-bar b-t"
    v-if="footerBar.show"
  >
    <mu-paper>
      <mu-bottom-nav :value="footerBar.active">
        <mu-bottom-nav-item
          value="/book"
          @click.native="click('/book')"
          :title="$t('预定')"
        >
          <cc-icon name="book" />
        </mu-bottom-nav-item>
        <mu-bottom-nav-item
          value="/fly"
          @click.native="click('/fly')"
          :title="$t('飞行')"
        >
          <cc-icon name="fly" />
        </mu-bottom-nav-item>
        <mu-bottom-nav-item
          value="/message"
          @click.native="click('/message')"
          :title="$t('消息')"
        >
          <mu-badge
            content="56"
            circle
            secondary
          >
            <cc-icon name="msg" />
          </mu-badge>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item
          value="/my"
          @click.native="click('/my')"
          :title="$t('我的')"
        >
          <cc-icon name="my" />
        </mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    click (path) {
      this.$r.push(path)
    }
  },
  components: {},
  computed: {
    ...mapState(['footerBar'])
  }
}
</script>

<style scoped>
.footer-bar {
  padding-top: 1px;
}
.footer-bar /deep/ .mu-paper {
  box-shadow: none;
}
</style>
