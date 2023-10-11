import classes from '../styles/Layout.module.css'

export default function Layout(props){
  return (
    <div className={classes.layout}>
      <h1>Where in the world</h1>
      <main>{props.children}</main>
    </div>
  );
};
