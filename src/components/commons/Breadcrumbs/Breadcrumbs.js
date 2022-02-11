import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {NavLink} from "react-router-dom";
import {ImHome} from "react-icons/im";
import s from './Breadcrumbs.module.css';

const routes = [
  {path: '/', breadcrumb: 'Home'},
  {path: '/people', breadcrumb: 'people'},
  {path: '/planets', breadcrumb: 'planets'},
  {path: '/films', breadcrumb: 'films'},
  {path: '/species', breadcrumb: 'species'},
  {path: '/vehicles', breadcrumb: 'vehicles'},
  {path: '/starships', breadcrumb: 'starships'},
];

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={s.breadcrumbsContainer}>
      <ImHome/>
      {breadcrumbs.map(({
                          match,
                          breadcrumb
                        }) => (
        <span key={match.pathname} className={s.breadcrumbItem}>
          <NavLink to={match.pathname}>
            <span className={s.breadcrumbItem__separator}>/</span>
            {breadcrumb}
          </NavLink>
        </span>
      ))}
    </div>
  )
}
