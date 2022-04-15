<template>
  <div class="VuetifyApp">
    <v-app>
      <exo-drawer
        ref="callPopupDrawer"
        class="callPopupDrawer"
        body-classes="hide-scroll"
        right
        style="width: 475px;">
        <template slot="content">
          <call-popup
            :isdialogvisible="isDialogVisible"
            :caller="caller"
            :avatar="avatar"
            :callermessage="callerMessage"
            :playringtone="playRingtone"
            :state="state"
            :i18n="i18n" />
        </template>
      </exo-drawer>
    </v-app>
  </div>
</template>
<script>
import CallPopup from './CallPopup.vue';
export default {
  components: {
    CallPopup
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true,
      default: false
    },
    caller: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    callerMessage: {
      type: String,
      required: true
    },
    playRingtone: {
      type: Boolean,
      required: true
    },
    state: {
      type: Boolean,
      required: false,
      default: null
    },
    i18n: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$refs.callPopupDrawer.open();
  },
};
</script>