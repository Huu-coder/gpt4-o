import path from 'path';

export default {
  entry: './gpt35.js', // Điểm đầu vào của ứng dụng
  output: {
    filename: 'bundle.js', // Tên tệp sau khi đóng gói
    path: path.resolve('dist') // Thư mục đầu ra
  },
  mode: 'development', // Hoặc 'production' nếu bạn muốn tối ưu
  module: {
    rules: [
      {
        test: /\.js$/, // Áp dụng cho các tệp .js
        exclude: /node_modules/, // Loại trừ thư viện bên thứ ba
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Chuyển mã hiện đại xuống phiên bản cũ hơn
          }
        }
      }
    ]
  }
};
