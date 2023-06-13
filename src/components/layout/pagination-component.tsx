// import { Pagination } from "react-bootstrap";
import { MouseEvent } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const PaginationComponent = ({
    totalPageCount,
    onNext,
    onPrevious,
    paginateByNum
}: {
    totalPageCount: number
    onNext: any
    onPrevious: any
    paginateByNum: any
}) => {
    return (
        <>
            {/* <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Ellipsis disabled />
                <Pagination.Item>{9}</Pagination.Item>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
            </Pagination> */}

            <ul className="pagination">
                <li className="page-item" onClick={onPrevious}>
                    <button className="page-link">
                        <span aria-hidden="true">
                            <MdOutlineKeyboardArrowLeft />
                        </span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                </li>
                <li className="page-item" onClick={() => paginateByNum(1)}>
                    <button className="page-link">1</button>
                </li>
                <li className="page-item active" onClick={() => paginateByNum(2)}>
                    <button className="page-link">
                        2<span className="visually-hidden">(current)</span>
                    </button>
                </li>
                <li className="page-item disabled">
                    <span className="page-link">
                        <span aria-hidden="true">
                            <HiOutlineDotsHorizontal />
                        </span>
                        <span className="visually-hidden">More</span>
                    </span>
                </li>
                <li className="page-item" onClick={() => paginateByNum(9)}>
                    <button className="page-link">9</button>
                </li>
                <li className="page-item" onClick={() => paginateByNum(10)}>
                    <button className="page-link">10</button>
                </li>
                <li className="page-item" onClick={onNext}>
                    <button className="page-link">
                        <span aria-hidden="true">
                            <MdOutlineKeyboardArrowRight />
                        </span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default PaginationComponent
