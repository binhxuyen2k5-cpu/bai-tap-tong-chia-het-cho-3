function handleSubmit(event) {
  event.preventDefault();

  // Lấy giá trị từ input và chuyển sang kiểu số nguyên
  const start = parseInt(document.getElementById("startNumber").value);
  const end = parseInt(document.getElementById("endNumber").value);
  
  let sum = 0;

  // Đảm bảo start nhỏ hơn end, nếu không thì đổi chỗ
  let min = Math.min(start, end);
  let max = Math.max(start, end);

  // Vòng lặp tính tổng
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
  }

  // Hiển thị kết quả ra màn hình
  document.getElementById("result").innerText = "Tổng các số chia hết cho 3 là: " + sum;
}