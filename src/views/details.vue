<template>
    <div class="details-container">
        <Navigation class="details-navigation" :title="title" />
        <Images :images="image" />
        <Information :title="title" :price="price" />
        <Description :description="description" />
        <div style="width: 100%; height: 30.125rem; background-color: #fff" />
        <Buy class="details-buy" />
    </div>
</template>

<style lang="scss">
.details-container {
    display: flex;
    flex-direction: column;
    .details-navigation {
        position: fixed;
        top: 0rem;
        z-index: 999;
        border-bottom: .03125rem solid #ccc;
    }
    .details-buy {
        position: fixed;
        bottom: 0rem;
        z-index: 999;
        border-top: .03125rem solid #ccc;
    }
}
</style>

<script>
import Navigation from "@/components/details/navigation";
import Images from "@/components/details/images";
import Information from "@/components/details/information";
import Description from "@/components/details/description";
import Buy from "@/components/details/buy";

export default {
    name: "details",
    components: {
        Navigation,
        Images,
        Information,
        Description,
        Buy
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
