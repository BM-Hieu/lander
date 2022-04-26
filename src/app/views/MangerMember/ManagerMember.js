import { React } from "react";

const ManagerMember = () => {
    return (
        <div className="container vh-100">
            <div className="row pt-3">
                <h1 className="text-center">Quản lí thành viên</h1>
                <table className="table table-success">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Gmail</th>
                            <th scope="col">SĐT</th>
                            <th scope="col">Vai trò</th>
                            <th scope="col">Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bùi Hữu Minh Hiêu</td>
                            <td>bmh.jamerr@gmail.com</td>
                            <td>0980564523</td>
                            <td><span className="badge bg-info text-dark">Quản trị viên</span></td>
                            <td><button type="button" className="btn btn-outline-success">Sửa</button>{" "}<button type="button" className="btn btn-outline-danger">Xóa</button></td>
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
