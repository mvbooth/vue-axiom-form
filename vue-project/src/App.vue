<script setup lang="ts">
  import Masthead from './components/Masthead.vue'
  import CaptureForm from './components/CaptureForm.vue'
  import Sidebar from './components/Sidebar.vue'
  import { NLayout, NLayoutContent, NLayoutSider, NLayoutFooter, NLayoutHeader, NSpace } from 'naive-ui'
</script>

<template>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <n-space vertical size="large">
    <n-layout>
      <n-layout-header content-style="padding: 24px;">
        <Masthead
          heading="We just need a little more information to show you accurate rates"
          subheading="United Medicare Advisors saves clients an average of $581 when switching to a new Medigap plan*"
        />
      </n-layout-header>
      <n-layout has-sider style="max-width: 1200px; margin: 0 auto;">
        <n-layout-content content-style="padding: 24px;">
          <CaptureForm />
        </n-layout-content>
        <n-layout-content content-style="padding: 24px;">
          <Sidebar />
        </n-layout-content>
      </n-layout>
      <n-layout-footer>Chengfu Road</n-layout-footer>
    </n-layout>
  </n-space>
</template>
