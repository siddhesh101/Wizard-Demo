<template>
    <!--Hello By Malay-->
    <!--Test Commit By Malay Second One-->
    <div>
        <h1>{{$t('pages.FOP.pageNo')}}</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1"
                          :label="$t('pages.FOP.companyLabel')"
                          label-for="input-1"
                          :description="$t('pages.FOP.companyDesc')">
                <b-form-input id="input-1"
                              v-model="form.company"                  
                              required
                              :placeholder="$t('pages.FOP.companyPH')"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" :label="$t('pages.FOP.addLabel')" label-for="input-2">
                <b-form-input id="input-2"
                              v-model="form.add"
                              required
                              :placeholder="$t('pages.FOP.addPH')"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" :label="$t('pages.FOP.salaryLabel')" label-for="input-3">
                <b-form-select id="input-3"
                               v-model="form.salary"
                               :options="salaries"
                               required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="me">{{$t('pages.FOP.cbMe')}}</b-form-checkbox>
                    <b-form-checkbox value="that">{{$t('pages.FOP.cbThat')}}</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <!--<button type="submit" class="btn btn-primary" @click="prevPage">Back</button>
    <button type="button" class="btn btn-danger" @click="prevPage">Back</button>-->
            <b-button type="submit" variant="primary" style="margin-right:20px">{{$t('pages.FOP.btSubmit')}}</b-button>
            <b-button type="reset" variant="info" style="margin-right:20px">{{$t('pages.FOP.btReset')}}</b-button>
            <b-button type="button" variant="danger" @click="prevPage" style="margin-right:20px">{{$t('pages.FOP.btBack')}}</b-button>
        </b-form>
        <!--<b-card class="mt-6" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>-->
    </div>
</template>

<script>
    export default {
        name: "FourthPage",
        data() {
            return {
                form: {
                    company: this.$store.state.data.FOP.company,
                    add: this.$store.state.data.FOP.add,
                    salary: this.$store.state.data.FOP.salary,
                    checked: this.$store.state.data.FOP.checked
                },
                salaries: [{ text: 'Select One', value: null }, '10k-15k', '15k-20k', '20k-25k', '25k-30k'],
                show: true
            }
        },
        methods: {
            prevPage() {
                this.$store.state.selectedComponent = "ThirdPage"
            },
            onSubmit(evt) {
                evt.preventDefault()
                this.$store.commit('updateFOP',this.form);
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.company = ''
                this.form.add = ''
                this.form.salary = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
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
