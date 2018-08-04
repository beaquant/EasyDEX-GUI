import { triggerToaster } from '../actionCreators';
import Config, {
  token,
  agamaPort,
  rpc2cli,
} from '../../config';
import urlParams from '../../util/url';
import fetchType from '../../util/fetchType';
import translate from '../../translate/translate';

export const shepherdGetSysInfo = () => {
  return dispatch => {
    const _urlParams = {
      token,
    };
    return fetch(
      `http://127.0.0.1:${agamaPort}/shepherd/sysinfo${urlParams(_urlParams)}`,
      fetchType.get
    )
    .catch((error) => {
      console.log(error);
      dispatch(
        triggerToaster(
          translate('API.getSettings') + ' (code: shepherdGetSysInfo)',
          translate('TOASTR.ERROR'),
          'error'
        )
      )
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }
}