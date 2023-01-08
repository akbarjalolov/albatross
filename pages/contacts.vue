<template>
<div>
    <BreadCrumb :links="links"/>
    <div class="container px-[16px] mx-auto">
        <section-title title="Contacts" class="mt-[32px]" />

    </div>  
    <!-- faq -->
    <Faq />
</div>

</template>

<script>
    import BreadCrumb from '@/components/common/BreadCrumb.vue'
    import SectionTitle from '@/components/SectionTitle.vue'
    import Faq from '@/components/sections/Faq.vue'
    export default {
        layout: 'black',
        components: { BreadCrumb, SectionTitle, Faq },
        data(){
            return {
                 links: [ {
                    name: 'Contacts',
                    link: '/contacts'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>