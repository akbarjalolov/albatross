<template>
  <div class="faq relative overflow-hidden md:py-16 py-4 px-[16px]">
    <section-title title="F.A.Q." data-aos="fade-up" />
    <div class="container relative z-1 mt-[32px] mx-auto">
      <div class="grid grid-cols-2 gap-x-6 gap-y-4">
        <client-only>
        <div
          class="md:col-span-1 col-span-2"
          v-for="(item, index) in data"
          :key="index"
          data-aos="fade-up" :data-aos-delay="index + 1 +'00'"
        >
          <div class="tab">
            <input class="input-form" type="checkbox" :id="`${q}` + item.id" />
            <label class="tab-label" :for="`${q}` + item.id">{{ item.title }}</label>
            <div class="tab-content">
              {{item.description}}
            </div>
          </div>
        </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                q: 'q',
            }
        },
        props: {
          data: {
            default: []
          }
        }
    }

</script>

<style lang="scss" scoped>

.faq {
    background: #F5F8FC;
}


.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
    
  }
}
.tab-label {
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  cursor: pointer;
  transition: 0.3s;
  min-height: 54px;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #22232C;
  }

@media screen and (max-width: 768px) {
  .tab-label {
    font-size: 15px;
    margin-top: 0px;
  }
}

.tab-label::after {
  content: "";
  background: url(@/static/icons/chevron-down.svg) no-repeat;
  min-width: 24px;
  transform: rotate(0deg);
  height: 24px;
  text-align: center;
  transition: 0.3s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  transition: 0.3s;
  background: rgb(255, 255, 255);
  border: 1px solid #E0E0E0;
  opacity: 0;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #333333;
  border-radius: 0 0 8px 8px;
  overflow: auto;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 0.75em;
  background: red;
  cursor: pointer;
}
.tab-close:hover {
  background: rgba(255, 255, 255, 0.1);
}
.input-form:checked + .tab-label {
  border-radius: 8px 8px 0 0;
}
.input-form:checked + .tab-label::after {
  transform: rotate(180deg);
}
.input-form:checked ~ .tab-content {
  min-height: 80px;
  max-height: 100vh;
  padding: 1rem;
  border-radius: 0 0 8px 8px;
  border: 1px solid #E0E0E0;
  opacity: 1;
}
</style>
