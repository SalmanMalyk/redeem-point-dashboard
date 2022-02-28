<template>
  <AppLayout>
    <div class="row mb-4">
      <h4 class="col-md-9">Transaction History</h4>
      <div class="col-md-3">
        <Datepicker
          v-model="date"
          @update:model-value="fetchTransactions"
          placeholder="Select Date"
          :enableTimePicker="false"
          :maxDate="new Date()"
          showNowButton
        ></Datepicker>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped table-hover table-sm">
          <caption>{{ transactionCount }} Transactions Found</caption>
          <thead>
            <tr>
              <th class="text-center" scope="col">#</th>
              <th class="text-start" scope="col">Customer</th>
              <th class="text-end" scope="col">Amount</th>
              <th class="text-end" scope="col">Point Earned</th>
              <th class="text-end" scope="col">Point Value</th>
              <th class="text-end" scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in transactions" :key="index">
              <td align="center" v-text="++index"></td>
              <td v-text="transaction.customer.mobile_no"></td>
              <td align="right" v-text="transaction.amount"></td>
              <td align="right" v-text="transaction.point.points"></td>
              <td align="right" v-text="transaction.point.point_value"></td>
              <td align="right">
                {{
                  moment(transaction.created_at).format("dddd, MMMM Do YYYY")
                }}
              </td>
            </tr>

            <tr v-if="!transactionCount">
              <td colspan="6" align="center">No Data Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../layout/AppLayout.vue";
import Snackbar from "node-snackbar";
import userService from "../../services/user.service";
import moment from "moment";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

export default {
  components: {
    AppLayout,
    Datepicker,
  },
  data() {
    return {
      transactions: null,
      date: null,
      transactionCount: 0,
    };
  },
  methods: {
    fetchTransactions() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
      });

      userService.getTransactions(this.date).then(
        ({ data }) => {
          this.transactions = data;
          this.transactionCount = data.length;
          loader.hide();
        },
        (error) => {
          Snackbar.show({
            text: `Something went wrong.\nPlease try again later.\n${error}`,
            pos: "bottom-right",
          });
          loader.hide();
        }
      );
    }
  },
  mounted() {
    this.moment = moment;
    this.fetchTransactions();
  },
};
</script>
