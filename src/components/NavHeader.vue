<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a class="my-cart" href="javascript:;" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" alt="图片">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>红米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">K40 游戏增强版</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">K40 游戏增强版</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">K40 游戏增强版</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">K40 游戏增强版</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">K40 游戏增强版</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">K40 游戏增强版</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c87fdc4bcfd081ac240f7af1417ce60.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">小米电视大师 82英寸至尊纪念版</div>
                                        <div class="pro-price">19999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                       <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视AA 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">查看全部</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-header',
        data(){
            return{
                username:'jack',
                phoneList:[]
            }
        },
        mounted(){
            this.getProductList();
        },
        filters:{
            currency(val){
                if(!val){
                    return '0.00'
                }else{
                    return '￥' + val.toFixed(2) + '元'
                }
            }
        },
        methods:{
            getProductList(){
                this.axios.get('/products',{
                    params:{
                        categoryId:'100012',
                        pageSize:6
                    }
                }).then(res => {
  
                    this.phoneList = res.list;
                  
                }).catch((err) => {
                    console.log(err);
                });
            },
            goToCart(){
                this.$router.push('/cart')
            },
            login(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

.header{
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #B0B0B0B0;
        .container{
            @include flex();
            a{
                color: #B0B0B0B0;
                display: inline-block;
                margin-right: 17px;
            }
            .my-cart{
                width: 110px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;
                .icon-cart{
                    @include backImg(16px,12px,'/imgs/icon-cart-checked.png');
                    margin-right: 4px;
                }
            }
        }
    }
    .nav-header{
        .container{
            @include flex();
            height: 112px;
            .header-logo{
                display: inline-block;
                width: 55px;
                height: 55px;
                background: #FF6600;
                a{
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &::before{
                        content: '';
                        @include backImg(55px,55px,'/imgs/mi-logo.png',55px);
                        transition: margin .2s;
                    }
                    &::after{
                        content: '';
                        @include backImg(55px,55px,'/imgs/mi-home.png',55px);
                    }
                    &:hover::before{
                        transition: margin .2s;
                        margin-left: -55px;
                    }
                }
            }
            .header-menu{
                display: inline-block;
                padding-left: 209px;
                width: 643px;
                .item-menu{
                    display: inline-block;
                    font-weight: bold;
                    color: #333333;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position:absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0px;
                        opacity: 0;
                        overflow: hidden;
                        background: #ffffff;
                        transition: all .5s;
                        border-top:1px solid #E5E5E5;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, .11);
                        z-index: 10;
                        
                        .product{
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            position: relative;
                            a{
                                display: inline-block;
                            }
                            img{
                                height: 111px;
                                width: auto;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 137px;
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price{
                                color: $colorA;
                            }
                            &::before{
                                content: '';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                            }
                            &:last-child::before{
                                display: none;
                            }
                        }
                    }
                }
            }
            .header-search{
                width: 319px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    input{
                        border:none;
                        border-right: 1px solid #E0E0E0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                        box-sizing: border-box;
                    }
                    a{
                        @include backImg(18px,18px,'/imgs/icon-search.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }
}
</style>