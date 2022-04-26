import { React } from "react";

const ManagerMember = () => {
    return (
        <div className="container-fuild vh-100">
            <div className="mx-3 pt-3">
                <h1 className="text-center">Quản lí bài viết</h1>
                <table className="table table-success table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Chủ đề</th>
                            <th scope="col">Ngày đăng</th>
                            <th scope="col">Status</th>
                            <th scope="col">Bài viết</th>
                            <th scope="col">Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td className="text-truncate" style={{maxWidth: "300px"}}>CHO THUÊ NHÀ XƯỞNG DỰ ÁN CỤM NHÀ XƯỞNG CHO THUÊ HOÀNG HÙNG (GẦN KCN BÀNG BÀNG), DT 10.000-20.000M2 CHO THUÊ NHÀ XƯỞNG DỰ ÁN CỤM NHÀ XƯỞNG CHO THUÊ HOÀNG HÙNG (GẦN KCN BÀNG BÀNG), DT 10.000-20.000M2</td>
                            <td>23h22 26/07/22</td>
                            <td>0980564523</td>
                            <td><span className="badge bg-success text-white"><i className="fa-solid fa-eye"></i></span></td>
                            <td>
                                <button type="button" className="btn btn-success"><i className="fa-solid fa-pen"></i></button>{" "}
                                <button type="button" className="btn btn-info"><i className="fa-solid fa-wrench"></i></button>{" "}
                                <button type="button" className="btn btn-danger"><i className="fa-solid fa-ban"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Nguyễn Kỳ Khang</td>
                            <td>Khang123@gmail.com</td>
                            <td>0980562233</td>
                            <td><span className="badge bg-info text-dark">Quản trị viên</span></td>
                            <td><button type="button" className="btn btn-outline-success">Sửa</button>{" "}<button type="button" className="btn btn-outline-danger">Xóa</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Bùi Hữu Minh Hiêu</td>
                            <td>bmh.jamerr@gmail.com</td>
                            <td>0980564523</td>
                            <td><span className="badge bg-info text-dark">Quản trị viên</span></td>
                            <td><button type="button" className="btn btn-outline-success">Sửa</button>{" "}<button type="button" className="btn btn-outline-danger">Xóa</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManagerMember;
