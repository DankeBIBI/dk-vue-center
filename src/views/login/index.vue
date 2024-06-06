<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { Lock, Refresh, User } from "@element-plus/icons-vue";
import { UserStore } from "@/store/user";
import { gsap } from "gsap";
import { showTip } from "@/utils";
// import qrcode from 'qrcodejs2-fix';
// import { h } from 'vue'
// import { ElNotification } from 'element-plus'
let timer: any;
const showQrCode = ref(false);
const pageOnload = ref(false);
const qrLoginTip = ref("二维码登录");
const btnLoading = ref(false);
onMounted(() => {
	let tl = gsap.timeline();
	tl.from(".box", { y: 300, opacity: 1, width: 0, duration: 1 });
	tl.from(
		".fnBtnGroup",
		{ y: 200, opacity: 1, ease: "elastic.out(1,0.5)", width: 0, duration: 1 },
		"<"
	);
	tl.from(".title", {
		opacity: 0,
		y: 50,
		ease: "elastic.out(1,0.5)",
		duration: 1.5,
	});
	tl.from(
		".phone",
		{
			opacity: 0,
			y: 100,
			ease: "elastic.out(1,0.5)",
			duration: 1,
		},
		"<"
	);
	tl.from(
		".fnBtn",
		{ opacity: 0, x: 100, ease: "elastic.out(1,0.5)", duration: 1 },
		"<"
	);
	setTimeout(() => {
		pageOnload.value = true;
	});
	if (import.meta.env.DEV) {
		loginForm.user = "13425278202";
		loginForm.password = "123";
	}
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
	user: "",
	password: "",
	appid: 0,
});
async function login() {
	btnLoading.value = true;
	try {
		const state = await UserStore().Login(loginForm);
		btnLoading.value = false;
		showTip(state.msg, state.code != 1 ? "error" : "success");
	} catch (e: any) {
		showTip(e.msg, e.code != 1 ? "error" : "success");
		btnLoading.value = false;
	}
	// if(state.code == 1){
	//     ShadowRoot
	// }
}
</script>
<template>
	<div class="login am_">
		<div class="loginBox theme- pr_ fx_">
			<div
				class="logo"
				:class="{ 'logo-activity': pageOnload }"
				v-on:mouseout="logoMouseOver"
				v-on:mouseover="logoMouseOut"
			>
				<img
					class="logo_img"
					:class="{ showQrCode: showQrCode }"
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
				<div class="inputMod">
					<div class="title">登录</div>
					<div class="phone fx_">
						<!-- <div class="text">账号</div> -->
						<el-input
							:prefix-icon="User"
							placeholder="账号"
							size="large"
							v-model="loginForm.user"
						/>
					</div>
					<div class="phone fx_">
						<!-- <div class="text">密码</div> -->
						<el-input
							:prefix-icon="Lock"
							placeholder="密码"
							size="large"
							v-model="loginForm.password"
						/>
					</div>
				</div>
				<div class="fnBtnGroup fx_x">
					<div class="fnBtn am_" @click="login">
						<!-- <text>{{ btnLoading ? "正在登录" : "登录" }}</text> -->
						<el-button style="width: 100%" type="primary" :loading="btnLoading"
							>登录</el-button
						>
					</div>
					<!-- 生成二维码 -->
					<!-- <div
						class="qrLogin am_"
						:class="{ 'qrLogin-activity': showQrCode }"
						@click="makeQrCode"
					>
						<text>{{ qrLoginTip }}</text>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
// .inputMod-activity {
// 	clip-path: inset(0 0 0 0) !important;
// 	top: 1rem !important;
// 	left: 1rem !important;
// }

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
		box-shadow: #121212 3px 4px 5px, #333333 3px 4px 5px;

		.box {
			width: 15rem;
			padding: 1rem 1rem;
			background-color: #ffffff;
			// padding-top: 10rem;

			.fnBtnGroup {
				// clip-path: inset(0 130px 110px 0);
				width: 100%;
				padding: 1rem 0.8rem 1.2rem 0.8rem;
				.qrLogin {
					font-size: 0.8rem;
					text-decoration: underline;
					color: #347b8b;
					margin-top: 1rem;
					cursor: pointer;
					user-select: none;
					opacity: 1;
				}

				.fnBtn {
					width: 90%;
					height: 2rem;
					border-radius: 0.3rem;
					font-size: 0.8rem;
				}
			}

			.inputMod {
				transition: 0.5s all;

				.title {
					font-size: 1.5rem;
					font-weight: 700;
					margin-bottom: 5rem;
				}

				.phone {
					padding: 0 0.8rem 1.2rem 0.8rem;
					.text {
						font-size: 0.9rem;
						margin-left: 0.1rem;
					}
					input {
						// width: 95%;
						border: none;
						background-color: transparent;
						// border-bottom: #347b8b 1px solid;
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
