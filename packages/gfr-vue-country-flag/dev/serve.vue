<script>
import Vue from 'vue';
import CountryFlag from '@/CountryFlag.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CountryFlag
  },
  data() {
    return {
     items: {value: 'it'}
    };
  },
});
</script>

<template>
  <div id="app">
    <CountryFlag country='dk' size='big'/>
    <CountryFlag country='no' size='big'/>
    <CountryFlag country='se' size='big'/>
    <CountryFlag country='gb' size='big'/>
    <CountryFlag country='fr' size='big'/>
    <CountryFlag country='it' size='big'/>
    <CountryFlag country='is' size='big'/>
    <CountryFlag country='lv' size='big'/>
    <CountryFlag country='ee' size='big'/>
    <CountryFlag country='lt' size='big'/>
  </div>
</template>
