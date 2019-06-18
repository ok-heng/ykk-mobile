<template>
    <div class="categoryItem-row1">
        <van-image class="categoryItem-row1-image" :src="image" fit="contain"/>
        <span class="categoryItem-row1-text">{{title}}</span>
    </div>
</template>

<script>
export default {
    name: "categoryItem",
    props: {
        title: String,
        image: String
    }
};
</script>

<style lang="scss">
.categoryItem-row1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .categoryItem-row1-image {
        margin-bottom: .5rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 1.25rem;
    }
    .categoryItem-row1-text {
        font-size: .8125rem;
    }
}
</style>
