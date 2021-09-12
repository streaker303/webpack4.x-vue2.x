
import axios from 'axios';
import {getAjax,getAjaxSome} from '@/utils/http';

//退出
export const exit = (data) => {
	return axios.request({
		url: 'common/exit',
		method: 'post',
		params: data.queryData,
		data: data.paramsData,
	}).then(result => {
		console.log(result)
		return getAjaxSome(result);
	})
}
