import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let 장바구니State = useSelector((state) => {
    return state.장바구니;
  });
  console.log(장바구니State);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {장바구니State.map((a, i) => {
            return (
              <tr>
                <td>{장바구니State[i].id}</td>
                <td>{장바구니State[i].name}</td>
                <td>{장바구니State[i].count}</td>
                <td>변경하기</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
