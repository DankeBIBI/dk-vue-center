<!-- <script setup lang="ts">
import { UserStore } from '@/store/user';
import { onMounted, reactive, ref } from 'vue'
onMounted(() => {
})
const loginForm = reactive({
    user: "82066232",
    password: "123",
})
const rules = ref({
    user: [
        { required: true, message: "请输入用户名", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
    ],
})
const loginFormRef = ref()
function submitForm(form: any) {
    loginFormRef.value.validate((valid: any) => {
        if (valid) {
            UserStore().Login(form)
        } else {
            console.log("登录失败");
            return false;
        }
    });
}
</script>
<template>
    <div class="loginBox am_">
        <div class="login">
            <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0" class="login-form">
                <el-form-item prop="user">
                    <el-input v-model="loginForm.user" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-form-button"  @click="submitForm(loginForm)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.loginBox {
    width: 100%;
    height: 100%;
}
</style> -->
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { Refresh } from "@element-plus/icons-vue";
import { UserStore } from "@/store/user";
// import qrcode from 'qrcodejs2-fix';
// import { h } from 'vue'
// import { ElNotification } from 'element-plus'
let timer: any;
// const _this = reactive({
// })
// const {} = toRefs(_this)
const showQrCode = ref(false);
const pageOnload = ref(false);
const qrLoginTip = ref("二维码登录");
onMounted(() => {
	setTimeout(() => {
		pageOnload.value = true;
	}, 500);
});
/**
 * 生成二维码
 */
function makeQrCode() {
	clearInterval(timer);
	qrLoginTip.value = "正在生成二维码。。。";
	// setTimeout(() => {
	//     app.api.pro.生成二维码().then((result) => {
	//         const div = document.getElementById('qrCode')
	//         div.innerHTML = ''
	//         new qrcode(div, {
	//             text: result.data,
	//             width: 150,
	//             height: 150
	//         })
	//         showQrCode.value = true
	//         timer = setInterval(() => {
	//             app.api.pro.查看二维码调用({ code: result.data }).then(({ data, msg }) => {
	//                 if (data) {
	//                     ElNotification({
	//                         title: msg,
	//                         message: h('i', { style: 'color: teal' }, '今天又是美好的一天！'),
	//                     })
	//                     clearInterval(timer)
	//                     app.cache.setCache('userInfo', data)
	//                     _this.userInfo = data
	//                 }
	//             }).catch((err) => {
	//                 return
	//             });
	//         }, 3000);
	//     }).catch((err) => {
	//         return
	//     });
	// }, 50);
}
/**
 * 鼠标移入
 */
// function onmouseover() {
//     showQrCode.value = true
// }
function logoMouseOver() {
	showQrCode.value = false;
}
/**
 * 鼠标移出
 */
function logoMouseOut() {
	showQrCode.value = !showQrCode.value;
}
function refresh() {
	clearInterval(timer);
	makeQrCode();
}
const loginForm = reactive({
	user: "82066232",
	password: "123",
	appid: 0,
});
function login() {
	UserStore().Login(loginForm);
}
</script>
<template>
	<div class="login am_">
		<div class="loginBox theme- pr_ fx_">
			<div class="logo" :class="{ 'logo-activity': pageOnload }">
				<img
					class="logo_img"
					:class="{ showQrCode: showQrCode }"
					v-on:mouseout="logoMouseOut"
					v-on:mouseover="logoMouseOver"
					src="https://pd-base.oss-cn-heyuan.aliyuncs.com/strap-trousers.png"
				/>
				<div class="qrCodeMod fx_y">
					<div class="qrCodeMod_code fx_x">
						<div class="img" id="qrCode"></div>
						<div class="tip fx_">
							使用
							<div class="text">蛋壳模拟器</div>
							小程序扫描
						</div>
					</div>
					<el-icon :size="30" class="qrCodeMod_icon" @click="refresh">
						<Refresh />
					</el-icon>
				</div>
			</div>
			<div class="box theme-- pr_ fx_x">
				<div class="inputMod pa_" :class="{ 'inputMod-activity': pageOnload }">
					<div class="title">登录</div>
					<div class="phone">
						<div class="text">账号</div>
						<el-input v-model="loginForm.user" />
					</div>
					<div class="phone">
						<div class="text">密码</div>
						<el-input v-model="loginForm.password" />
					</div>
				</div>
				<div class="fnBtnGroup" :class="{ 'fnBtnGroup-activity': pageOnload }">
					<div class="fnBtn am_" @click="login">
						<text>登录</text>
					</div>
					<div
						class="qrLogin am_"
						:class="{ 'qrLogin-activity': showQrCode }"
						@click="makeQrCode"
					>
						<text>{{ qrLoginTip }}</text>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.inputMod-activity {
	clip-path: inset(0 0 0 0) !important;
	top: 1rem !important;
	left: 1rem !important;
}

.logo-activity {
	width: 20rem !important;
	opacity: 1 !important;
}

.fnBtnGroup-activity {
	opacity: 1 !important;
	padding-top: 2rem !important;
}

.qrLogin-activity {
	transform: translateX(20rem) !important;
	opacity: 0 !important;
	transition: 0.4s;
}

.login {
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(
		to left top,
		#2c413f,
		#253539,
		#22292f,
		#1e1e23,
		#161416,
		#221e23,
		#2f2831,
		#3c3340,
		#565c77,
		#5d8daf,
		#5dc2d9,
		#7af8ef
	);

	.loginBox {
		min-width: 20rem;
		height: 20rem;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: #5b5b5b 3px 4px 16px, #cac3c3 3px 4px 16px;

		.box {
			width: 15rem;
			padding: 1rem 1rem;
			background-color: #505054;
			padding-top: 10rem;

			.fnBtnGroup {
				// opacity: 0;
				transition: 1s all;
				padding-top: 10rem;

				.qrLogin {
					font-size: 0.8rem;
					text-decoration: underline;
					color: #347b8b;
					margin-top: 1rem;
					cursor: pointer;
					user-select: none;
					transform: translateX(0);
					opacity: 1;
					transition: 0.4s all;
				}

				.fnBtn {
					width: 13rem;
					height: 2rem;
					background-color: #fff;
					border-radius: 0.3rem;
					font-size: 0.8rem;
					box-shadow: inset #eeeeee 1px 1px 3px, #e3e3e3 2px 2px 5px;
					text-shadow: inset #eeeeee 1px 1px 3px, #e3e3e3 2px 2px 5px;
				}
			}

			.inputMod {
				// clip-path: circle(25% at 0% 0%);
				// background-color: #1e1e23;
				clip-path: inset(0 130px 110px 0);
				transition: 0.5s all;
				top: 5rem;
				left: 6rem;

				input {
					width: 13rem;
				}

				.title {
					font-size: 1.5rem;
					font-weight: 700;
					margin-bottom: 1rem;
				}

				.phone {
					padding: 0.2rem 0.4rem;

					.text {
						font-size: 0.9rem;
						margin-left: 0.1rem;
					}

					input {
						border: none;
						background-color: transparent;
						border-bottom: #347b8b 1px solid;
					}
				}
			}
		}

		.logo {
			width: 5rem;
			height: 20rem;
			overflow: hidden;
			transition: 0.7s all;
			opacity: 0.6;

			.showQrCode {
				margin-top: -15rem !important;
			}

			&_img {
				// border-radius: 1rem;
				width: 20rem;
				height: 20rem;
				transition: 0.7s all;
				// margin-top: -15rem;
			}

			.qrCodeMod {
				width: 20rem;
				height: 15rem;
				background-color: #fff;
				padding: 2rem 2rem;

				&_code {
					.tip {
						margin-top: 0.3rem;
						align-items: baseline;
						font-size: 0.6rem;

						.text {
							font-size: 0.8rem;
							font-weight: bold;
							color: #5d8daf;
						}
					}
				}

				&_icon {
					margin-left: 3rem;

					&:hover {
						transition: 0.3s all;
						transform: rotate(-180deg);
					}
				}

				.img {
					width: 10rem;
					height: 10rem;
				}
			}
		}
	}
}
</style>
