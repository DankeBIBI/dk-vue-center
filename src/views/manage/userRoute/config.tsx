import { route } from '@/api'
import { dkTableOptionsCallback, dkTableColumn, dkTableLoading, dkTablePagination, dkTableInit } from '@/components'
import { onMounted, reactive, ref } from 'vue'
export default () => {
    const tableData = ref([])
    const init = async (value?: dkTableInit) => {
        loading.loading = true
        const res = await route.userRouteList(value)
        console.log("🚀 -- 》》 ~ res:", res)
        setTimeout(() => {
            pagination.total = res.data.count
            tableData.value = res.data.rows.map(item=>item.route)
            loading.loading = false
        }, 600);
    }
    onMounted(() => {
        init()
    })
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
    const tableColumns: dkTableColumn[] = [
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
        init,
        loading,
        pagination,
        add:()=>{}
    }
} 