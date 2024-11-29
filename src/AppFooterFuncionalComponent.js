import React, {Fragment} from "react";
import "./AppFooter.css"

export default function AppFooterFuncionalComponent(props){
    const currentYear = new Date().getFullYear()
    return (
        <Fragment>
            <hr />
            <p className="footer">Copyright &copy; {currentYear} Acm Ltd. Made by {props.autor}</p>
        </Fragment>
    )
} 