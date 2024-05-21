import { route } from '@/api'
import { dkTableColumn, dkTableLoading, dkTablePagination, dkTableInit, dkForm } from '@/components/dk-components'
import { addDkDialog, closeDkDialog, showModal } from '@/components/dk-components/dk-dialog/rander'
import { PUBLIC_LOADING_SVG } from '@/config'
import { onMounted, reactive, ref } from 'vue'
export default () => {
    const tableData = ref([])
    const init = async (value?: dkTableInit) => {
        loading.loading = true
        const res = await route.routeList(value)
        setTimeout(() => {
            pagination.total = res.data.count
            tableData.value = res.data.rows
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
        svg: PUBLIC_LOADING_SVG
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
        {
            label: '编辑',
            prop: 'edit',
            width: 200,
            align: "center",
            fixed: 'right',
            cellRander: ({ row }) => (
                <>
                    <div class="fx_">
                        <el-button type="primary" onClick={() => edit(row)}>编辑</el-button>
                        <el-button type="danger" onClick={() => deleteRow(row)}>删除</el-button>
                    </div>
                </>
            )
        }
    ]
    function add() {
        setting('add')
    }
    function edit(row) {
        setting('edit', row)
    }
    function deleteRow(row) {
        showModal({
            title: '提示',
            content: '是否删除' + row.title,
            confirm: async (e) => {
                const res = await route.deleteRoute({ route_id: row.id })
                init()
                e.close()
            }
        })

    }
    async function setting(type: "add" | "edit", row?: any) {
        const res = ref()
        const routeList = [{
            value: 0,
            label: "顶级菜单"
        }].concat((await route.userRouteList({
            u_id: 82024308
        })).data.rows.map(item => {
            return {
                value: item.route.id,
                label: item.route.title
            }
        }))
        addDkDialog({
            title: '测试' + type == 'add' ? '添加' : '编辑',
            ref: res,
            content: '测试',
            type: 'form',
            style: {
                borderRadius: 20,
            },
            props: {
                options: [
                    {
                        prop: 'parent_id',
                        type: 'select',
                        title: '上级路由',
                        content: row?.parent_id ?? '',
                        required: true,
                        selectOptions: routeList
                    },
                    {
                        prop: 'title',
                        type: 'input',
                        title: '标题',
                        content: row?.title ?? '',
                        required: true
                    },
                    {
                        prop: 'menu_name',
                        type: 'input',
                        title: '菜单标识',
                        content: row?.menu_name ?? '',
                        required: true
                    },
                    {
                        prop: 'url',
                        type: 'input',
                        title: '路由地址',
                        content: row?.url ?? '',
                        required: true
                    },
                    {
                        prop: 'component',
                        type: 'input',
                        title: '组件路径',
                        content: row?.component ?? ''
                    },

                    {
                        prop: 'active_route',
                        type: 'input',
                        title: '动态路由',
                        content: row?.active_route ?? ''
                    },
                    {
                        prop: 'description',
                        type: 'input',
                        title: '描述',
                        content: row?.description ?? ''
                    },
                ] as FormOptions
            },
            async confirm(e) {
                const res = await e.getFormParams()
                if (res) {
                    const r = await route.addRoute(res)
                    if (r.code == 1) {
                        init()
                    }
                }
            },
        })
    }
    return {
        tableColumns,
        tableData,
        init,
        loading,
        pagination,
        add
    }
} 