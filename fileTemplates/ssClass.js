import {} from 'antd';
import _, { get } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'dva';
import { dealDispatch, funLog } from 'utils/utils';

const modelName = '$model';

@connect(({ $model, loading }) => ({
  baseModel: $model,
  loading: loading.models[modelName],
}))
export default class $Classname extends Component {
  simDispatch = dealDispatch(this.props.dispatch)

  render() {
    return (
      <div >
      </div>
    );
  }
}

