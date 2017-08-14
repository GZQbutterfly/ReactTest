import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import home from '../home/home.js';
import froms from '../forms/forms.js';
import './router.less';

// ===>

const routes = [
  {
    path: '/',
    label: '首页',
    exact: true,
    sidebars: ['首页'],
    container: home
  },
  { path: '/from',
    label: '表单',
    sidebars: ['首页', '表单'],
    container: froms
  },
  { path: '/table',
    label: '表格',
    container: () => <div>表格!</div>
  }
];

let itemClick = function(e){
  console.log(e.target);
}

let routerDom = (
<Router>
  <div className="container-fluid">
    <div className="layout-left">
        <header className="left-header">React </header>
        <nav className="nav nav-tabs nav-stacked">
          <ul>
          {routes.map((route, index) => (
            <li onClick={itemClick}><Link to={route.path}>{route.label}</Link></li>
          ))}
          </ul>
        </nav>
    </div>
    <div className="parting-line"></div>
    <div className="layout-right">
        <div className="silder">
            <ul className="breadcrumb">
                <li><a href="#">首页</a> <span className="divider">/</span></li>
                <li><a href="#">表单</a> <span className="divider">/</span></li>
                <li className="active">安扭</li>
                {routes.map((route, index) => (
                 <Route
                   key={index}
                   path={route.path}
                   exact={route.exact}
                   component={(route)=>( <li className="active">{route.label}</li> )}
                 />
               ))}
            </ul>
        </div>
        <div className="layout-main">

          <div className="layout-view">
             {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.container}
              />
            ))}
          </div>
        </div>
    </div>
  </div>
</Router>
);
// ===>
export default routerDom;
