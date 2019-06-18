<template>
    <div class="category-container">
        <Header/>
        <van-tree-select
            :items="items"
            :main-active-index="mainActiveIndex"
            :active-id="activeId"
            @navclick="onNavClick"
            @itemclick="onItemClick"
        />
        <div style="height: 3.125rem" />
    </div>
</template>

<style lang="scss">
.category-container {
    display: flex;
    flex-direction: column;
}
</style>

<script>
import Header from "@/components/category/header";

export default {
    name: "category",
    components: {
        Header
    },
    data() {
        return {
            items: [
                {
                    text: "彩妆",
                    children: [
                        {
                            id: 1,
                            text: "全部产品",
                            
                        },
                        {
                            id: 2,
                            text: "唇膏系列",
                            
                        },
                        {
                            id: 3,
                            text: "化妆品附件",
                            
                        },
                        {
                            id: 4,
                            text: "城市系列彩妆",
                            
                        },
                        {
                            id: 5,
                            text: "巴黎美妆系列",
                            
                        },
                        {
                            id: 6,
                            text: "面部底妆品系列",
                            
                        }
                    ]
                },
                {
                    text: "雅姿",
                    children: [
                        {
                            id: 1,
                            text: "全部产品",
                            
                        },
                        {
                            id: 2,
                            text: "卓效美肌系列",
                            
                        },
                        {
                            id: 3,
                            text: "恒时紧致系列",
                            
                        },
                        {
                            id: 4,
                            text: "恒时凝颜系列",
                            
                        },
                        {
                            id: 5,
                            text: "臻透焕白系列",
                            
                        },
                        {
                            id: 6,
                            text: "水润保湿系列",
                            
                        },
                        {
                            id: 6,
                            text: "黄金面霜系列",
                            
                        }
                    ]
                },
                {
                    text: "XS",
                    children: [
                        {
                            id: 1,
                            text: "全部产品",
                            
                        },
                        {
                            id: 2,
                            text: "XS饮料系列",
                            
                        },
                        {
                            id: 3,
                            text: "XS运动营养系列",
                            
                        }
                    ]
                },
                {
                    text: "个人护理",
                    children: [
                        {
                            id: 1,
                            text: "全部产品",
                            
                        },
                        {
                            id: 2,
                            text: "身体护理",
                            
                        },
                        {
                            id: 3,
                            text: "秀发护理",
                            
                        },
                        {
                            id: 4,
                            text: "口腔健康",
                            
                        },
                        {
                            id: 5,
                            text: "消毒抗菌",
                            
                        }
                    ]
                },
                {
                    text: "家居护理",
                    children: [
                        {
                            id: 1,
                            text: "全部产品",
                            
                        },
                        {
                            id: 2,
                            text: "餐洁系列",
                            
                        },
                        {
                            id: 3,
                            text: "衣洁系列",
                            
                        },
                        {
                            id: 4,
                            text: "日常清洁产品",
                            
                        },
                        {
                            id: 5,
                            text: "产品附件",
                            
                        }
                    ]
                },
                {
                    text: "辅销产品",
                    children: [
                        {
                            id: 1,
                            text: "全部辅销产品",
                            
                        }
                    ]
                },
            ],
            mainActiveIndex: 0,
            activeId: null
        };
    },
    methods: {
        onNavClick(index) {
            this.mainActiveIndex = index;
        },
        onItemClick(data) {
            this.activeId = data.id;
            this.$router.push({path: '/home'})
        }
    }
};
</script>

