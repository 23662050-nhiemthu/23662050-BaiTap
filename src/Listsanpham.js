import { Link } from "react-router-dom";

const Listsanpham = () => {
  const products = [
    {
      id: 1,
      ten: "Cây Lưỡi Hổ",
      loai: "Cây để bàn",
      gia: "150.000đ",
      anh: "https://cayxanhhoanggia.vn/wp-content/uploads/2020/08/cay-luoi-ho.jpg",
    },
    {
      id: 2,
      ten: "Cây Trầu Bà",
      loai: "Cây treo",
      gia: "120.000đ",
      anh: "https://vuoncayviet.com/wp-content/uploads/2021/06/cay-trau-ba-chan-vit.jpg",
    },
    {
      id: 3,
      ten: "Cây Kim Tiền",
      loai: "Cây phong thủy",
      gia: "250.000đ",
      anh: "https://caycanhhanoi.vn/wp-content/uploads/2016/05/cay-kim-tien-1.jpg",
    },
    {
      id: 4,
      ten: "Cây Bàng Singapore",
      loai: "Cây nội thất",
      gia: "450.000đ",
      anh: "https://vuoncayviet.com/wp-content/uploads/2021/07/cay-bang-singapore-dep.jpg",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Danh sách cây cảnh
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {products.map((sp) => (
          <div
            key={sp.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#fff",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={sp.anh}
              alt={sp.ten}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>{sp.ten}</h3>
            <p>{sp.loai}</p>
            <p style={{ color: "green", fontWeight: "bold" }}>{sp.gia}</p>
            <Link to={`/sanpham/${sp.id}`}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Xem chi tiết
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listsanpham;
