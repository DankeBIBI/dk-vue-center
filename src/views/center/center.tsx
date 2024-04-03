import { dkTableColumn, dkTableLoading, dkTableOptionsCallback, dkTablePagination } from "dk-vue-components";
import { onMounted, reactive, ref } from "vue";
const tableData = ref([
    {
        date: "2020-02-20",
        name: "野猪佩奇",
        address: "野猪窝",
        age: "18",
    },
    {
        date: "2020-02-20",
        name: "野猪佩奇",
        address: "野猪窝",
        age: "18",
    },
]);
const tableColumns = ref<dkTableColumn[]>([
    {
        label: "测试日期",
        prop: "date",
        width: 180,
        cellRander({ row, column, $index }) {
            // console.log("🚀 -- 》》 ~  row, column, $index:", row, column, $index)
        },
    },
    {
        label: "名字",
        prop: "name",
        width: 180,
    },
    {
        label: "住址",
        prop: "address",
        width: 180,
    },
]);
const loading: dkTableLoading = reactive({
    loading: false,
    background: 'rgba(255, 255, 255, .5)',
    tip: '正在加载数据。。。',
    svg: {
        position: "-10, -10, 50, 50",
        src: `
        <path class="path" d="
        M 30 15
        L 28 17
        M 25.61 25.61
        A 15 15, 0, 0, 1, 15 30
        A 15 15, 0, 1, 1, 27.99 7.5
        L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `
    }
})
const pagination: dkTablePagination = reactive({
    page: 1,
    limit: 10,
    total: 100,
    pageSize: [10, 25, 50, 100]
})
function dkTableOptions() {
    return {
        tableData,
        tableColumns,
        pagination,
        loading,
        init:()=>{
            console.log('init')
        }
    };
}
export {
    tableColumns,
    tableData,
    dkTableOptions
}