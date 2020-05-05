<template>
    <!--Hello By Malay-->
    <!--Test Commit By Malay Second One-->
    <div>
        <h1>{{$t('pages.TP.pageNo')}}</h1>
        <b-form v-if="show">
            <b-form-group id="input-group-1"
                          :label="$t('pages.TP.emailLabel')"
                          label-for="input-1"
                          :description="$t('pages.TP.emailDesc')">
                <b-form-input id="input-1"
                              v-model="form.email"
                              type="email"
                              required
                              :placeholder="$t('pages.TP.emailPH')"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" :label="$t('pages.TP.nameLabel')" label-for="input-2">
                <b-form-input id="input-2"
                              v-model="form.name"
                              required
                              :placeholder="$t('pages.TP.namePH')"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" :label="$t('pages.TP.foodLabel')" label-for="input-3">
                <b-form-select id="input-3"
                               v-model="form.food"
                               :options="foods"
                               required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="me">{{$t('pages.TP.cbMe')}}</b-form-checkbox>
                    <b-form-checkbox value="that">{{$t('pages.TP.cbThat')}}</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <!--<button type="submit" class="btn btn-primary" @click="prevPage">Back</button>
    <button type="button" class="btn btn-danger" @click="prevPage">Back</button>-->           
             <b-button type="button" variant="danger" @click="prevPage" style="margin-right:20px">{{$t('pages.TP.btBack')}}</b-button>
            <b-button type="button" variant="primary" @click="nextPage" style="margin-right:20px">{{$t('pages.TP.btNext')}}</b-button>
        </b-form>
        <!--<b-card class="mt-6" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>-->
    </div>
</template>

<script>
    export default {
        name: "ThirdPage",
        data() {
            return {
                form: this.$store.state.data.TP,
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        methods: {
            nextPage(){
                 this.$store.state.selectedComponent = "FourthPage";
                 this.$store.commit('updateTP',this.form);
            },
            prevPage() {
                this.$store.state.selectedComponent = "SecondPage"
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
