<template>
    <div>
        <BreadCrumb :links="links"/>
        <div class="container mx-auto px-[16px]">
            <section-title :title="staticData?.title" class="mt-[32px]"/>
            <div v-html="staticData?.content" class="static-styles my-[24px]"></div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
import BreadCrumb from '../../components/common/BreadCrumb.vue'
import { mapState } from 'vuex'
    export default {
        layout: 'black',
        components: { SectionTitle, BreadCrumb },
        data() {
            return {
                title: '',
                links: [ 
                    {
                    name: this.title,
                    link: '/terms-of-use'
                   }
                ]
            }
        },
        computed: {
            ...mapState({
                staticData: state => state.staticPage
            }),
        },
        fetch(){
            this.$store.dispatch('fetchStaticPage', {slug: this.$route.params.slug})
        },
    }
</script>

<style lang="scss">
    .static-styles {

        a {
            color: #22232C;
            text-decoration: underline;
        }

        p {
            margin-bottom: 8px;
        }

        h1,h2,h3,h4,h5,h6,p {
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 140%;
            color: #22232C;
            margin-bottom: 16px;
        }

    }

    @media screen and (min-width: 768px) {
        .static-styles {
            h1,h2,h3,h4,h5,h6,p {
                font-size: 18px;
            }
        }       
    }
</style>