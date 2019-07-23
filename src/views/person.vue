<template>
    <div class="person-container">
        <div class="background"></div>
        <div class="person-main">
            <div class="person-header">
                <div class="person-header-row1">
                    <div class="person-header-row1-col1">
                        <img class="person-header-row1-col1-image" :src="image.image1" alt />
                    </div>
                    <div class="person-header-row1-col2">
                        <span class="person-header-row1-col2-text">昵称:abc</span>
                        <div class="person-header-row1-col2-module">
                            <i class="icon ion-ios-home" id="person-header-row1-col2-module-icon1" />
                            <span class="person-header-row1-col2-module-text">我的账号</span>
                            <i
                                class="icon ion-ios-arrow-forward"
                                id="person-header-row1-col2-module-icon2"
                            />
                        </div>
                    </div>
                    <div class="person-header-row1-col3">
                        <i
                            class="icon ion-ios-notifications-outline"
                            id="person-header-row1-col3-icon1"
                        />
                        <i class="icon ion-ios-grid" id="person-header-row1-col3-icon1" />
                        <i class="icon ion-ios-cog" id="person-header-row1-col3-icon3" @click="logout" />
                    </div>
                </div>
            </div>
            <div class="person-module1">
                <div class="person-module1-row1">
                    <div class="person-module1-row1-col1">
                        <span class="person-module1-row1-col1-text1">33</span>
                        <span class="person-module1-row1-col1-text1">收藏夹</span>
                    </div>
                    <div class="person-module1-row1-col1">
                        <span class="person-module1-row1-col1-text1">8</span>
                        <span class="person-module1-row1-col1-text1">关注店铺</span>
                    </div>
                    <div class="person-module1-row1-col1">
                        <span class="person-module1-row1-col1-text1">14</span>
                        <span class="person-module1-row1-col1-text1">足迹</span>
                    </div>
                    <div class="person-module1-row1-col1">
                        <span class="person-module1-row1-col1-text1">0</span>
                        <span class="person-module1-row1-col1-text1">红包卡劵</span>
                    </div>
                </div>
            </div>
            <div class="person-module2">
                <div class="person-module2-row1">
                    <div class="person-module2-row1-col1">
                        <span class="person-module2-row1-col1-text1">会员中心</span>
                        <span class="person-module2-row1-col1-text2">积分值 263</span>
                    </div>
                    <!-- <div style="width: .0625rem; height: 2.1875rem; background-color: #ccc" /> -->
                    <div class="person-module2-row1-col2">
                        <span class="person-module2-row1-col2-text1">兑酒店会员特权</span>
                        <span class="person-module2-row1-col2-text2">五星酒店积分超值兑</span>
                    </div>
                    <div class="person-module2-row1-col3">
                        <img class="person-module2-row1-col3-image" :src="image.image2" alt />
                    </div>
                </div>
            </div>
            <div class="person-module3">
                <div class="person-module3-row1">
                    <span class="person-module3-row1-text1">我的订单</span>
                    <span class="person-module3-row1-text2">查看全部订单</span>
                    <i class="icon ion-ios-arrow-forward" id="person-module3-row1-icon" />
                </div>
                <div style="width: 100%; height: 1px; background-color: #eee" />
                <div class="person-module3-row2">
                    <div class="person-module3-row2-col1">
                        <img class="person-module3-row2-col1-image" :src="image.image3" alt />
                        <span class="person-module3-row2-col1-text">待付款</span>
                    </div>
                    <div class="person-module3-row2-col1">
                        <img class="person-module3-row2-col1-image" :src="image.image4" alt />
                        <span class="person-module3-row2-col1-text">待发货</span>
                    </div>
                    <div class="person-module3-row2-col1">
                        <img class="person-module3-row2-col1-image" :src="image.image5" alt />
                        <span class="person-module3-row2-col1-text">待收货</span>
                    </div>
                    <div class="person-module3-row2-col1">
                        <img class="person-module3-row2-col1-image" :src="image.image6" alt />
                        <span class="person-module3-row2-col1-text">评价</span>
                    </div>
                    <div class="person-module3-row2-col1">
                        <img class="person-module3-row2-col1-image" :src="image.image7" alt />
                        <span class="person-module3-row2-col1-text">退款/售后</span>
                    </div>
                </div>
            </div>
            <div class="person-module4">
                <div class="person-module4-row1">
                    <span class="person-module4-row1-text1">必备工具</span>
                    <span class="person-module4-row1-text2">查看全部工具</span>
                    <i class="icon ion-ios-arrow-forward" id="person-module4-row1-icon" />
                </div>
                <div style="width: 100%; height: 1px; background-color: #eee" />
                <div class="person-module4-row2">
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image8" alt />
                        <span class="person-module4-row2-col1-text">每日返现</span>
                    </div>
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image9" alt />
                        <span class="person-module4-row2-col1-text">领劵中心</span>
                    </div>
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image10" alt />
                        <span class="person-module4-row2-col1-text">闲置换钱</span>
                    </div>
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image11" alt />
                        <span class="person-module4-row2-col1-text">客服小蜜</span>
                    </div>
                </div>
                <div class="person-module4-row2">
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image12" alt />
                        <span class="person-module4-row2-col1-text">热门活动</span>
                    </div>
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image13" alt />
                        <span class="person-module4-row2-col1-text">云购宝卡</span>
                    </div>
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image14" alt />
                        <span class="person-module4-row2-col1-text">我的评价</span>
                    </div>
                    <div class="person-module4-row2-col1">
                        <img class="person-module4-row2-col1-image" :src="image.image15" alt />
                        <span class="person-module4-row2-col1-text">主题换肤</span>
                    </div>
                </div>
            </div>
            <div style="width: 100%; height: 50px;" />

            <van-tabbar z-index="999" v-model="active" route>
                <van-tabbar-item class="tabbar" replace to="/home">
                    <i slot="icon" id="icon" class="ion-ios-home" />
                    首页
                </van-tabbar-item>
                <van-tabbar-item class="tabbar" replace to="/category">
                    <i slot="icon" id="icon" class="ion-ios-list" />
                    分类
                </van-tabbar-item>
                <van-tabbar-item class="tabbar" replace to="/cart">
                    <i slot="icon" id="icon" class="ion-ios-cart" />
                    购物车
                </van-tabbar-item>
                <van-tabbar-item class="tabbar" replace to="/person">
                    <i slot="icon" id="icon" class="ion-ios-person" />
                    我的
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
    data: function() {
        return {
            active: 3,
            image: {
                image1: require("@/assets/person/image1.png"),
                image2: require("@/assets/person/image2.png"),
                image3: require("@/assets/person/image3.png"),
                image4: require("@/assets/person/image4.png"),
                image5: require("@/assets/person/image5.png"),
                image6: require("@/assets/person/image6.png"),
                image7: require("@/assets/person/image7.png"),
                image8: require("@/assets/person/image8.png"),
                image9: require("@/assets/person/image9.png"),
                image10: require("@/assets/person/image10.png"),
                image11: require("@/assets/person/image11.png"),
                image12: require("@/assets/person/image12.png"),
                image13: require("@/assets/person/image13.png"),
                image14: require("@/assets/person/image14.png"),
                image15: require("@/assets/person/image15.png")
            }
        };
    },
    methods: {
        //...mapActions(['UserLogout']),
        logout: function() {
            //this.UserLogout();
            window.localStorage.removeItem('token');
            //this.$store.dispatch('UserLogout');
            this.$router.push('/home');
        }
    }
};
</script>

<style lang="scss">
.person-container {
    display: flex;
    flex-direction: column;
    .background {
        width: 100%;
        height: 11.875rem;
        background-color: #fb8729;
        z-index: -1;
    }
    .person-main {
        display: flex;
        flex-direction: column;
        margin: -9.375rem 0.625rem 0rem 0.625rem;
        .person-header {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.9375rem;
            .person-header-row1 {
                display: flex;
                .person-header-row1-col1 {
                    display: flex;
                    flex-direction: column;
                    margin-right: 0.625rem;
                    .person-header-row1-col1-image {
                        width: 3.125rem;
                        height: 3.125rem;
                        border-radius: 1.5625rem;
                        border: 0.075rem solid #fff;
                    }
                }
                .person-header-row1-col2 {
                    display: flex;
                    flex-direction: column;
                    color: #fff;
                    .person-header-row1-col2-text {
                        margin-bottom: 0.25rem;
                        font-size: 1.125rem;
                        color: #fff;
                    }
                    .person-header-row1-col2-module {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 6.5625rem;
                        height: 1.25rem;
                        border-radius: 0.6875rem;
                        background-color: #d96b21;
                        #person-header-row1-col2-module-icon1 {
                            margin-right: 0.3125rem;
                            font-size: 1rem;
                        }
                        .person-header-row1-col2-module-text {
                            margin-right: .3125rem;
                            font-size: 0.75rem;
                            color: #fff;
                        }
                        #person-header-row1-col2-module-icon2 {
                            font-size: 0.75rem;
                            height: 0.75rem;
                        }
                    }
                }
                .person-header-row1-col3 {
                    display: flex;
                    margin-left: auto;
                    color: #fff;
                    #person-header-row1-col3-icon1 {
                        margin-right: 1.375rem;
                        font-size: 1.625rem;
                    }
                    #person-header-row1-col3-icon3 {
                        font-size: 1.625rem;
                    }
                }
            }
        }
        .person-module1 {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.625rem;
            .person-module1-row1 {
                display: flex;
                justify-content: space-between;
                padding: 0rem 0.9375rem;
                .person-module1-row1-col1 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .person-module1-row1-col1-text1 {
                        font-size: 0.875rem;
                        color: #fff;
                    }
                }
            }
        }
        .person-module2 {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.625rem;
            border-radius: 0.9375rem;
            background-color: #fff;
            .person-module2-row1 {
                display: flex;
                padding: 0.625rem;
                justify-content: space-between;
                .person-module2-row1-col1 {
                    display: flex;
                    flex-direction: column;
                    .person-module2-row1-col1-text1 {
                        font-size: 0.875rem;
                        font-weight: 500;
                        color: #ff0000;
                    }
                    .person-module2-row1-col1-text2 {
                        font-size: 0.625rem;
                    }
                }
                .person-module2-row1-col2 {
                    display: flex;
                    flex-direction: column;
                    margin-left: -1.25rem;

                    .person-module2-row1-col2-text1 {
                        margin-bottom: 0.125rem;
                        font-size: 0.875rem;
                    }
                    .person-module2-row1-col2-text2 {
                        font-size: 0.625rem;
                    }
                }
                .person-module2-row1-col3 {
                    display: flex;
                    flex-direction: column;
                    .person-module2-row1-col3-image {
                    }
                }
            }
        }
        .person-module3 {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.625rem;
            padding: 0.625rem 0rem;
            border-radius: 0.9375rem;
            background-color: #fff;
            .person-module3-row1 {
                display: flex;
                align-items: center;
                margin-bottom: 0.625rem;
                padding: 0rem 0.625rem;
                .person-module3-row1-text1 {
                    margin-right: auto;
                    font-size: 0.9375rem;
                    font-weight: 400;
                }
                .person-module3-row1-text2 {
                    margin-right: .625rem;
                    font-size: 0.8125rem;
                }
                #person-module3-row1-icon {
                    font-size: 0.8125rem;
                }
            }
            .person-module3-row2 {
                display: flex;
                justify-content: space-around;
                margin-top: 1.25rem;
                .person-module3-row2-col1 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .person-module3-row2-col1-image {
                        width: 1.375rem;
                        height: 1.375rem;
                    }
                    .person-module3-row2-col1-text {
                        font-size: 0.8125rem;
                    }
                }
            }
        }
        .person-module4 {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.625rem;
            padding: 0.625rem 0rem;
            border-radius: 0.9375rem;
            background-color: #fff;
            .person-module4-row1 {
                display: flex;
                align-items: center;
                margin-bottom: 0.625rem;
                padding: 0rem 0.625rem;
                .person-module4-row1-text1 {
                    margin-right: auto;
                    font-size: 0.9375rem;
                    font-weight: 400;
                }
                .person-module4-row1-text2 {
                    margin-right: .625rem;
                    font-size: 0.8125rem;
                }
                #person-module4-row1-icon {
                    font-size: 0.8125rem;
                }
            }
            .person-module4-row2 {
                display: flex;
                justify-content: space-around;
                margin-top: 1.25rem;
                .person-module4-row2-col1 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .person-module4-row2-col1-image {
                        width: 1.6875rem;
                        height: 1.6875rem;
                    }
                    .person-module4-row2-col1-text {
                        font-size: 0.8125rem;
                    }
                }
            }
        }
    }
}
</style>


