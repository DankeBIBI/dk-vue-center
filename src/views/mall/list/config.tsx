import { mall } from '@/api'
import { __tableOptionsCallback, __tableColumn } from '@/components/dk-components/type'
import { onMounted, ref } from 'vue'
export default () => {
    const tableData = ref([])
    const init = async () => {
        const res = await mall.goodsList()
        tableData.value = res.data
    }
    onMounted(() => {
        init()
    })
    const tableColumns: __tableColumn[] = [
        {
            label: '商品名称',
            prop: 'name',
            width:300,
            tooltip: true
        },
        {
            label: '短名称',
            prop: 'mini_name',
            width:300
        },
        {
            label: '价格',
            prop: 'price',
        },
        {
            label: '原价格',
            prop: 'source_price',
        },
        {
            label: '库存',
            prop: 'stock',
        },
        {
            label: '商品图',
            prop: 'pic',
            cellRander: ({ row }) => (

                <>
                    <el-image preview-teleported preview-src-list={[row.pic]} src={row.pic} />
                </>

            )
        },
        {
            label: '以出售数量',
            prop: 'sales',
        },
        {
            label: '分类',
            prop: 'sort',
        },
        {
            label:'操作',
            prop:'action',
            fixed:"right",
            cellRander: ({ row }) => (
                <>
                    <el-button type="primary" link>编辑</el-button>
                </>
            )
        }
    ]
    return {
        tableColumns,
        tableData
    } as __tableOptionsCallback
} 