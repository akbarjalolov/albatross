<template>
<div>
    <BreadCrumb :links="links"/>
    <div class="container px-[16px] mx-auto">
        <section-title title="Blog" class="mt-[32px]" />
        <div class="container mx-auto px-[16px] my-[32px]">
            <div class="grid grid-cols-1">                
                <BlogCard :isThumbnail="true" v-for="item in blogs?.results?.slice(0,1)" :data="item" :key="item.id">
                </BlogCard>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[24px] mt-[32px]">      
                <client-only>         
                <BlogCard v-for="item in blogs?.results?.slice(1)" :data="item" :key="item.id">
                </BlogCard>
                </client-only> 
            </div>
            <div class="flex justify-center">
               <CButton v-if="blogs?.results.length >= 7" dynamicClass="max-w-[200px] mt-[32px] mx-auto bg-white border border-solid border-[#00AFEF] text-[#00AFEF] hover:text-white" text="Load more" />
            </div>
        </div>
    </div>
    <MainForm />
</div>

</template>

<script>
    import { mapState } from 'vuex'
    import BreadCrumb from '@/components/common/BreadCrumb.vue'
    import SectionTitle from '@/components/SectionTitle.vue'
    import BlogCard from '@/components/cards/BlogCard.vue'
    import MainForm from '@/components/sections/MainForm.vue'
    import CButton from '@/components/CButton.vue'
    export default {
        layout: 'black',
          computed: {
    ...mapState({
      blogs: (state) => state.blogs,
    }),
  },
  async fetch() {
    await this.$store.dispatch("fetchBlogs");
  },
        components: { BreadCrumb, SectionTitle, BlogCard, MainForm, CButton },
        data(){
            return {
                transportCardData: [
                    {
                        img: 'https://picsum.photos/300/300',
                        title: 'Open transport',
                        slug: 'blog-2',
                        author: {
                            name: 'John Doe',
                            position: 'Account executive, Auto Transport Expert'
                        },
                        date: '12.12.2021',
                        desc: 'Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure.',
                    },
                    {
                        img: 'https://picsum.photos/300/350',
                        title: 'Door-to-Door Car Shipping',
                        slug: 'blog-2',
                         author: {
                            name: 'John Doe',
                            position: 'Account executive, Auto Transport Expert'
                        },
                        date: '12.12.2021',
                        desc: 'At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping.',
                    },
                    {
                        img: 'https://picsum.photos/300/400',
                        title: 'Enclosed Auto Transport',
                        slug: 'blog-2',
                         author: {
                            name: 'John Doe',
                            position: 'Account executive, Auto Transport Expert'
                        },
                        date: '12.12.2021',
                        desc: 'Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B.',
                    },
                    {
                        img: 'https://picsum.photos/300/300',
                        title: 'Open transport',
                        slug: '',
                         author: {
                            name: 'John Doe',
                            position: 'Account executive, Auto Transport Expert'
                        },
                        date: '12.12.2021',
                        desc: 'Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure.',
                    },
                    {
                        img: 'https://picsum.photos/300/350',
                        title: 'Door-to-Door Car Shipping',
                        slug: '',
                         author: {
                            name: 'John Doe',
                            position: 'Account executive, Auto Transport Expert'
                        },
                        date: '12.12.2021', 
                        desc: 'At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping.',
                    },
                    {
                        img: 'https://picsum.photos/300/400',
                        title: 'Enclosed Auto Transport',
                        slug: 'blog-1',
                         author: {
                            name: 'John Doe',
                            position: 'Account executive, Auto Transport Expert'
                        },
                        date: '12.12.2021',
                        desc: 'Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B.',
                    }
                ],
                 links: [ {
                    title: 'Blog',
                    link: '/blog'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>