import {
  Route,
  Link
} from 'react-router-dom';
// ==>

let formRouters = [  {
    path: '/button',
    label: '按钮',
    container: () => <div>表格!</div>
  },
  { path: '/text',
    label: '文本',
    container: () => <div>文本!</div>
  },
  { path: '/select',
    label: '下拉框',
    container: () => <div>下拉框!</div>
  }];

let formsDom = ({ match }) => (
  <div>
    <div className="layout-left">
      <ul>
        {formRouters.map((route, index) => (
          <li><Link to={`${match.url}${route.path}`}>{route.label}</Link></li>
        ))}
      </ul>
    </div>
    <div className="layout-right">
        {formRouters.map((route, index) => (
         <Route
           key={index}
           path={`${match.url}${route.path}`}
           exact={route.exact}
           component={route.container}
         />
       ))}
       <Route exact path={match.url} render={() => (
        <h3>Please select a Form.</h3>
       )}/>
      </div>
  </div>
);




// ==>
export default formsDom;
