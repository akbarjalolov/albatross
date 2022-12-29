<template>
    <div>
        <BreadCrumb :links="links"/>
        <div class="container mx-auto px-[16px]">
            <section-title title="Terms of use" class="mt-[32px]"/>
            <div v-html="content" class="static-styles my-[24px]"></div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
import BreadCrumb from '../../components/common/BreadCrumb.vue'
    export default {
  components: { SectionTitle, BreadCrumb },
        data() {
            return {
                content: 'Which information we collect and why? IP Address Information resulting from the general rules of connections made on the Internet, such as the IP address (and other information contained in the system logs) are used by the server administrator for technical purposes. IP addresses are also used by us for statistical purposes to collect general demographic information (e.g. about the region from which the connection takes place).  Cookies On the W-O-W website, we use cookies to adapt our website to your individual needs. You can agree that the data entered by you will be remembered and used for subsequent visits on W-O-W. These data will be saved as cookies. This means that they will be stored on your computer and they will be made available on the W-O-W website. Owners of other sites will not have access to this data. If you have problems using our site or do not agree to the personalization of the website, we suggest disabling cookies in the options of your web browser. Remember, however, that the correct operation of user accounts depends on cookies, and disabling them may limit the functionality of accounts. Personal data security We need your personal data to be able to provide you services and issue invoices on them. Providing this data is a prerequisite for starting to provide you our services. We require you to provide only the data we need for this purpose. In addition, we use it to contact you on matters related to the provided services, and to inform you about our new products and services. Remember that you can opt out of receiving particular information from us at any time, just choose to unsubscribe from e-mails, or contact us: info@w-o-w.lt, or https://www.w-o-w.lt/contact-us/. How do we process your data? Authorized employees of W-O-W have access to your data and process it when you contact us on matters related to W-O-W and the services you request, as well as when we send you personalised offers. How do we store your data? We use third-party services that store collected information on secure servers. Who do we entrust your personal details to? Companies and people with whom we cooperate only to the extent that is necessary to provide their services. This applies to companies offering hosting services, accounting settlements, and electronic payments. Who do we share your personal information with? Companies and individuals we work with to ensure the safety of users on the platform. In addition, with your consent, we share it with companies and individuals with whom we work in the field of advertising and marketing. Finally, all entities authorised to access it by law, e.g. law enforcement authorities. How long do we process your personal data? From the day the service begins. We do not delete your data solely because of formal and legal reasons: it appears on invoices issued to you, and we also store it in case of any claims. The minimum storage period is 5 years. Your rights Remember that you have access to your personal data processed by W-O-W. At any time, you can also get specific information from us about which of them we process, for what purpose we do it, and how we obtained it. You also have the full right to update and change it, as well as to withdraw consent to its processing. You also have the right to “be forgotten”, that is, to request removal of your data from W-O-W. Just remember that in some cases, for example, if you still have active services on W-O-W, it will entail the need to stop providing them.' ,
                links: [ {
                    name: 'Terms of use',
                    link: '/terms-of-use'
                }]
                }
        }
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
            font-weight: 600;
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