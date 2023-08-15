### 1. Hạn chế của REST API/HTTP 1.
#### 1.1 HTTP 1.
- Với giao thức HTTP 1 dữ liệu trao đổi dùng plain text (JSON/REST). Vì là plain text nên nặng, quá trình encode/decore rất dễ lỗi và tốn tài nguyên CPU (down the line,space, upper case, emoji ....).
#### 1.2 REST.
- State less.
- Mọi thứ đều là resource (Dư thừa dữ liệu).
- Không có API Contract chính thức: chúng ta phải dùng Swagger (OpenAPI) để làm contract cho RESTFull API. Nhưng thực tế dùng phần này khá lỏng lẻo, dev define contract 1 kiểu nhưng gọi api lại ra 1 kiểu , đôi khi contract bị outdate so với API

> Vì vậy khi triển khai microservice cho các hệ thống backend cần tải cao nếu dùng REST thì sẽ không đáp ứng được khi mà các request trải dài trên các service để tổng hợp dữ liệu.

### 2: Thực tế hệ thống:
- BIC Platform apply microservice.
- Feed , Chat, Notification Service đều là các service có lượng tải cao.

### 3. gRPC:
#### 3.1 Điểm mạnh.
- Binary protocol (HTTP/2)
- Multiplexing many requests on one connection (HTTP/2)
- Header compression (HTTP/2)
- Strongly typed service and message definition (Protobuf)
- Idiomatic client/server library implementations in many languages
#### 3.2 Điểm hạn chế.
- Scale phức tạp.
- Tăng sự phụ thuộc các service (proto)
- Khó debug.

### 4. Best practice for gRPC.
[Design](https://kreya.app/blog/grpc-best-practices/)

### 5. Scale gRPC.
- Client load balancing (Thick client,  ).
- L3/L4.
- L7.

[grpc-load-balancing](https://grpc.io/blog/grpc-load-balancing/)

### 6. Quản lý proto.
- Publish lib. [x]
- Git submodules.

### 7. Tools
- ts-proto: Generate proto => nestjs code.
- Google FieldMask: Sử dụng để đánh dấu update fields.