<template>
    <div class="sort-container">
        <Header/>
        <Bar/>
        <List :dataList="dataSort"/>
    </div>
</template>

<style lang="scss">
.sort-container {
    display: flex;
    flex-direction: column;
}
</style>

<script>
import Header from "@/components/home/header";
import Bar from "@/components/sort/bar";
import List from "@/components/sort/list";

export default {
    name: "sort",
    components: {
        Header,
        Bar,
        List
    },
    data() {
        return {
            dataSort: null
        };
    },
    created() {
        this.filter();
    },
    methods: {
        filter() {
            if (this.$route.query.recommend) {
                this.dataSort = this.$route.query.recommend;
            } else if (this.$route.query.cosmetic) {
                this.dataSort = this.$route.query.cosmetic;
            } else if (this.$route.query.xs) {
                this.dataSort = this.$route.query.xs;
            } else if (this.$route.query.yazi) {
                this.dataSort = this.$route.query.yazi;
            } else if (this.$route.query.huli) {
                this.dataSort = this.$route.query.huli;
            } else if (this.$route.query.dataCategory) {
                this.dataSort = this.$route.query.dataCategory;
            }
        }
    }
};
</script>

