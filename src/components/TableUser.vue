<script>
export default {
  props: ['user'],
}
</script>

<template>
      <table >
        <tbody>
          <tr>
            <th v-for="(value, key) in user" :key="key">{{ key }}</th>
          </tr>
          <tr v-for="item in users" :key="item.id">
            <td v-for="(value, ) in user" :key="value">{{ value }}</td>
          </tr>
        </tbody>
      </table>
</template>

<style scoped>

</style>