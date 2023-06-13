import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PaginationComponent from "../../layout/pagination-component";

function CampaignList(props: any) {
    console.log('list', props.list);

    const [paginationData, setPaginationData] = useState<any>({
        // totalCount: props.list?.length,
        currentPage: 1,
        pageSize: 4,
    });

    const [totalPageCount, setTotalPageCount] = useState<number>(Math.ceil(props.list?.length / paginationData.pageSize));

    const [tableData, setTableData] = useState([]);

    const onPageChange = () => {
        let data = props.list?.slice(
            (paginationData.currentPage - 1) * paginationData.pageSize,
            paginationData.currentPage * paginationData.pageSize
        );

        setTableData(data);
    };

    const onNext = () => {
        setPaginationData({
            ...paginationData,
            currentPage: paginationData.currentPage + 1
        });

        onPageChange();
    };

    const onPrevious = () => {
        setPaginationData({
            ...paginationData,
            currentPage: paginationData.currentPage - 1
        });

        onPageChange();
    };

    const paginateByNum = (num: number) => {
        setPaginationData({
            ...paginationData,
            currentPage: num
        });

        onPageChange();
    };

    useEffect(() => {
        onPageChange();
    }, []);

    return (
        <div className="campaign_table">
            <Table responsive>
                <thead className="align-middle">
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Audience</th>
                        <th>Open Rate</th>
                        <th>No. of clicks</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {props.list?.slice(0, 5).map((camp: any, idx: number) => {
                        return (
                            <tr key={idx}>
                                <td>{camp.title}</td>
                                <td>{camp.date}</td>
                                <td>{camp.audience}</td>
                                <td>{camp.openRate}</td>
                                <td>{camp.noOfCLicks}</td>
                                <td>
                                    <Table
                                        className="bg-transparent"
                                        style={{
                                            maxWidth:
                                                camp.status.toLowerCase() !==
                                                    "scheduled"
                                                    ? "65px"
                                                    : "85px",
                                        }}
                                    >
                                        <tbody className="align-middle">
                                            <tr>
                                                <td
                                                    className={`${camp.status.toLowerCase()} py-2 px-3`}
                                                >
                                                    {camp.status}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                                <td>
                                    <HiOutlineDotsHorizontal className="icon mx-auto" />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <div className="pagination-container d-flex justify-content-center">
                <PaginationComponent
                    totalPageCount={totalPageCount}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    paginateByNum={paginateByNum}
                />
            </div>
        </div>
    );
}

export default CampaignList;