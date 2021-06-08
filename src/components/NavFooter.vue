<template>
    <div>
        <div class="footer">
            <div class="footer-logo">
                <img src="/imgs/logo-footer.png" alt="">
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="https://www.mi.com/service/buy/SalesTime" target="_blank">帮助中心</a><span>|</span>
                <a href="https://www.mi.com/service/exchange" target="_blank">服务支持</a><span>|</span>
                <a href="https://www.mi.com/service/mihome/list" target="_blank">线下门店</a><span>|</span>
                <a href="https://www.mi.com/about" target="_blank">关于小米</a><span>|</span>
                <a href="https://www.mi.com/service/imei" target="_blank">特色服务</a>
            </div>
            <div class="copyright">
                <span class="domain">© mi.com</span> 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-footer'
    }
</script>

<style lang="scss" scoped>
.footer{
    height: 234px;
    border-top: 4px solid #ff7300;
    background: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            display: inline-block;
            color: #999999;
        }
        span{
            margin: 0 10px;
        }
        margin-bottom: 13px
    }
    .copyright{
        .domain{
            color: #ff7300;
        }
    }
}
</style>