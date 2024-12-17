import "./style.css";

const MyComponent = () => {
  // const phatnguyen = "Phat Nguyen";
  const phatnguyen = {
    name: "Phat Nguyen",
    phone: "0983549821",
    email: "masterrio2412@gmail.com",
    linkFacebook: "https://www.facebook.com/phatnx.2310/",
  };
  return (
    <>
      <div className="Name">{JSON.stringify(phatnguyen)} dep trai </div>
      <div className="Child">Phat sieu dep trai</div>
    </>
  );
};

const SeconedMyComponent = () => {
  return (
    <>
      <div className="Name">So dien thoai: 0983549821</div>
      <div className="Child">Gmail: masterrio2412@gmail.com</div>
    </>
  );
};
export default MyComponent;

// jsx
// chỉ được một phần tử html trong component
// fragments: sẽ chứa các phần tử html trong component
// khong render thua cac layout
// undefined có nghĩa là không xác định. trong js, khi khai báo một biến nhưng chưa gán giá trị cho nó, giá trị của biến đó là underfined
// null có nghĩa là không có giá trị hoặc giá trị không tồn tại.
// Nguyên tắc: sử dụng cặp dấu ngoặc nhọn {} để viết code js bên trong html
// gia tri boolean ko in ra gia tri j vi no ko co y nghia trong viec ap dung hang so
// JSON.stringify: chuyển từ object sang string
