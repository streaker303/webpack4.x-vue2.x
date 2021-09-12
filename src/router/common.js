const login = () => import('@/pages/login/index.vue');
export default [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: login,
			meta: {
				title: '登录'
			}
		},
		// {
		// 	path: '/home',
		// 	name: 'home',
		// 	component: home,
		// 	children:[
		// 		...assets,
		// 		...report_form,
		// 		...defense_drill,
		// 		...data_center,
		// 		...leak,
  //               ...base_info,
  //               ...alarm,
  //               ...protect_net,
  //               ...rule,
  //               ...intelligence,
  //               ...works_order,
  //               ...work_platform,
  //               ...free_face,
  //               ...phishing_email,
		// 		...reporting_platform,
  //               ...chat_room,
  //               ...linkage
		// 	]
		// }
]
