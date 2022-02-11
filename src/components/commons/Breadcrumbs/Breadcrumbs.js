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
      <ImHome className={s.breadcrumbItem__img}/>
      {breadcrumbs.map(({
                          match,
                          breadcrumb
                        }) => (
        <span key={match.pathname} className={s.breadcrumbItem}>
          <NavLink to={match.pathname}>
            {breadcrumb}
          </NavLink>
          <span className={s.breadcrumbItem__separator}>/</span>
        </span>
      ))}
    </div>
  )
}
