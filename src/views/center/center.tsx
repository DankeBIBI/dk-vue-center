import { __tableColumn, __tableOptionsCallback } from "@/components/dk-components/type";
import { onMounted, ref } from "vue";
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
const tableColumns = ref<__tableColumn[]>([
	{
		label: "测试日期",
		prop: "date",
		width: 180,
        cellRander({ row, column, $index }) {
            console.log("🚀 -- 》》 ~  row, column, $index:",  row, column, $index)
            
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
function dkTableOptions(): __tableOptionsCallback {
  
	return {
		tableData: tableData,
		tableColumns,
	};
}
export {
    tableColumns,
    tableData,
    dkTableOptions
}