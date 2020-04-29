<template>
    <div>
        <div class="locale-changer">
            Select Language:
            <select v-model="$i18n.locale" style="width:150px">

                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>

            </select>

        </div>
        <h1>{{$t('pages.FP.pageNo')}}</h1>

        <h1>{{$t('pages.FP.title')}}</h1>
        <h3>
            {{$t('pages.FP.subTitle')}}
        </h3>
        <h6>{{$t('pages.FP.note')}}</h6>

        <button class="btn btn-success" @click.prevent="nextPage">{{$t('pages.FP.btStart')}}</button>
    </div>
</template>

<script>
    export default {
        name: "FirstPage",
        data() {
            return { langs: ['en', 'sp'] }
        }, 
        methods: {
            nextPage() {
                this.$store.state.selectedComponent = "SecondPage"
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        margin: 20px 0 0;
    }
    h3 {
        margin: 20px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
