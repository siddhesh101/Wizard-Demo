<template>
    <div>
        <h1>{{$t('pages.SP.pageNo')}}</h1>
        <h1>
            {{$t('pages.SP.title')}}
        </h1>
        <button value="OHospital" type="button" class="btn btn-outline-success" style="width:300px" @click="nextPage">{{$t('pages.SP.oHospital')}}</button><br>
        <button value="OClinic" type="button" class="btn btn-outline-success" style="width:300px" @click="nextPage">{{$t('pages.SP.oClinic')}}</button><br>
        <button value="ORheumatology" type="button" class="btn btn-outline-success" style="width:300px" @click="nextPage">{{$t('pages.SP.oRheumatology')}}</button><br>
        <button type="button" class="btn btn-danger" @click="prevPage">{{$t('pages.SP.btBack')}}</button>

    </div>
</template>

<script>
    export default {
        name: "SecondPage",

        methods: {
            nextPage(event) {
                
                this.$store.state.data.SP.btn = event.target.value;
                this.$store.state.selectedComponent = "ThirdPage";
            },
            prevPage() {
                this.$store.state.selectedComponent = "FirstPage";
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
