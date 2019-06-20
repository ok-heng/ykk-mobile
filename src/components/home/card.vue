<template>
    <div class="card-container">
        <div class="card-col1">
            <span class="card-col1-text1">{{title}}</span>
            <span class="card-col1-text2">{{content}}</span>
            <div class="card-col1-row3" v-if="tab">
                <span class="card-col1-row3-text">{{tab}}</span>
            </div>
        </div>
        <div class="card-col2">
            <lazy-component>
                <van-image class="card-col2-image" :src="image" fit="contain"/>
            </lazy-component>
        </div>
    </div>
</template>

<style lang="scss">
.card-container {
    display: flex;
    width: 11rem;
    height: 4.5rem;
    .card-col1 {
        display: flex;
        flex-direction: column;
        .card-col1-text2 {
            font-size: 0.75rem;
        }
        .card-col1-row3 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: auto;
            height: 1rem;
            border: 0.0625rem solid #dd7684;
            .card-col1-row3-text {
                font-size: 0.625rem;
                color: #dd7684;
            }
        }
    }
    .card-col2 {
        display: flex;
        .card-col2-image {
            width: 5.5rem;
        }
    }
}
</style>

<script>
export default {
    name: "card",
    props: {
        title: String,
        content: String,
        tab: String,
        image: String
    }
};
</script>


