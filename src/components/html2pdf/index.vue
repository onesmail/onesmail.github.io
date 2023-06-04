<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
};
</script>

<template>
    <button @click="count++">Count is: {{ count }}</button>
    <div>
        <p></p>
        <p></p>
    </div>
</template>

<style scoped>
button {
    font-weight: bold;
}
</style>
