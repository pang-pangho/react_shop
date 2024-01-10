import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeName } from "./../store/userSlice";
import { changeCount, delCart } from "../store";
function Cart() {
  let dispatch = useDispatch();
  let 장바구니State = useSelector((state) => {
    return state.장바구니;
  });

  let testState = useSelector((state) => {
    return state.user;
  });
  console.log(testState);
  console.log(장바구니State);
  return (
    <div>
      {testState.name} {testState.age}님의 장바구니
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
                <td>{장바구니State[i].title}</td>
                <td>{장바구니State[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCount(장바구니State[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(delCart(장바구니State[i]));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
