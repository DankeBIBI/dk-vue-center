import { route } from '@/api'
import { __tableOptionsCallback, __tableColumn } from '@/components/dk-components/type'
import { onMounted, ref } from 'vue'
export default () => {
    const tableData = ref([])
    const init = async () => {
        const res = await route.routeList()
        setTimeout(() => {
            tableData.value = res.data
        }, 600);
    }
    onMounted(() => {
        init()
    })
    const tableColumns: __tableColumn[] = [
        {
            label: '菜单名字',
            prop: 'title',
        },
        {
            label: '菜单英文',
            prop: 'menu_name',
        },
        {
            label: '动态路由',
            prop: 'active_route',
        },
        {
            label: '地址',
            prop: 'url',
        },
        {
            label: '页面地址',
            prop: 'component',
        },
        {
            label: '描述',
            prop: 'description',
        },
    ]
    return {
        tableColumns,
        tableData,
        init
    } as __tableOptionsCallback
} 