import { Component } from "react";

// export default class Pagination extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//         };
//     }

//     render () {
//         return (
//             <div>Hello, from Pagination</div>
//         );
//     }
// }

const PaginationItem = ({ pageIndex, isActive }) => {
    return (
        <li>
        <a href="#"
            className="page-link ${isActive}">
        { pageIndex + 1 }
        </a>
    </li>
    );
}

const Pagination = ({ totalPages = 0 }) => {

    const fn = () => {};
    const fn2 = () => {};

    return (
        <nav className="os-pagination">
          <a href="#" className="page-link previous" data-element="nav-prev">
            <i className="bi bi-chevron-left"></i>
          </a>

          <ul className="page-list" data-element="pagination">

            {
                new Array(totalPages).fill(1).map((_, index) => {
                    return <PaginationItem pageIndex={index} />
                })
            }

          </ul>
          
          <a href="#" className="page-link next" data-element="nav-next">
            <i class="bi bi-chevron-right"></i>
          </a>
        </nav>
    )
};

export default Pagination;

            