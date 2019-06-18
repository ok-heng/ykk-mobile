<template>
    <div class="description-container">
        <div class="description-main">
            <div class="description-row1"></div>
        </div>
    </div>
</template>

<style lang="scss">
.description-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .description-main {
        display: flex;
        flex-direction: column;
        margin: 0rem .625rem;
        .description-row1 {
            display: flex;
        }
    }
}
</style>

<script>
export default {
    name: "description"
};
</script>