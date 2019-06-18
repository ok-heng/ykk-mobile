<template>
    <div class="details-container">
        <Navigation class="navigation" :title="title" />
        <Images :images="image" />
        <Information :title="title" :price="price" />
        <!-- <Description :description="description" /> -->
        <div style="width: 100%; height: 3.125rem" />
    </div>
</template>

<style lang="scss">
.details-container {
    display: flex;
    flex-direction: column;
    .navigation {
        position: relative;
        top:0rem;
        left:0rem;
    }
    
}
</style>

<script>
import Navigation from "@/components/details/navigation";
import Images from "@/components/details/images";
import Information from "@/components/details/information";
import Description from "@/components/details/description";

export default {
    name: "details",
    components: {
        Navigation,
        Images,
        Information,
        Description
    },
    data() {
        return {
            title: null,
            price: null,
            image: null,
        };
    },
    created() {
        this.title = this.$route.query.title;
        this.price = this.$route.query.price;
        this.image = this.$route.query.image;
    }
};
</script>
