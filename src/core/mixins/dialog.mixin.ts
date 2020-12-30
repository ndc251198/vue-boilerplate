import Vue from "vue";

let _resolve: (value?: any) => void;

const _promise = new Promise<any>(resolve => {
  _resolve = resolve
});

export default Vue.extend({
  data() {
    return {
      dialog: false
    }
  },

  methods: {
    /**
     * Hiển thị dialog
     */
    show() {
      this.dialog = true;
    },

    /**
     * Ẩn dialog và trả về kết quả (nếu có)
     * @param result
     */
    hide(result?: any) {
      if (result !== null && result !== undefined) {
        _resolve(result);
      }
      this.dialog = false;
    },

    /**
     * hàm lấy promise trả về kết quả của dialog
     */
    result(): Promise<any> {
      return _promise;
    }
  }
})