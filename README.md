# Lê Hữu Hiệp_20115710_Android tuần 8
Sử dụng API

## Chọn form để mở: 
* Form 1 là tạo và cập nhật Job
* Form 2 tìm và đặt bánh Dount

![q1](https://github.com/HacMuHai/android_week7/assets/125679401/52689f71-2ba1-4b00-8e32-733937211802)

## Form 1
### Data-json
* https://hftgrt-3000.csb.app/users<br>
* https://hftgrt-3000.csb.app/jobs<br>
![q2](https://github.com/HacMuHai/android_week7/assets/125679401/2016f6cf-8683-457b-8fbf-43b2a2dd3ce7)

* fetch API
![q5](https://github.com/HacMuHai/android_week7/assets/125679401/e7b87473-20da-4cf1-9e96-544e4739e2cf)

### Screen 1
* Khi nhập name mới thì sẽ mở screen2 với các job trống và thêm user mới vào data-json<br>
![a11](https://github.com/HacMuHai/android_week7/assets/125679401/efb47b62-8951-4396-9e80-5ec5af08977f)

* Khi nhập name đã tồn tại thì sẽ mở screen2 với các job đã tạo trước đó <br>
![a1](https://github.com/HacMuHai/android_week7/assets/125679401/3a27d631-e16d-4680-b8d2-41f4b9447b60)

### Cập nhật JOb
* Chọn vào các công việc hiện có sẽ mở Screen3 với chức năng cập nhật <br>
![a2](https://github.com/HacMuHai/android_week7/assets/125679401/bb559f74-9a4a-4a13-94e2-00b568a6896a)

* Nhập tên mới và chọn FINISH tên Job mới sẽ được cập nhật và quay lại Screen2 <br>
![a21](https://github.com/HacMuHai/android_week7/assets/125679401/e92090c0-59d6-43c4-ad55-ae29a987414e)

### Thêm Job mới
* Chọn vào dấu cộng ở Screen2 để qua trang Screen3 với chức năng thêm JOb mới
* Nhập tên Job mới và chọn FINISH, JOB mới sẽ được thêm vào<br>
![a22](https://github.com/HacMuHai/android_week7/assets/125679401/e8ddbffb-b59b-4d65-9475-cfdb2da6da23)

## Form 2
* fetch API<br>
![q3](https://github.com/HacMuHai/android_week7/assets/125679401/d120970e-22b2-47e2-a3f0-9e9761b11645)

### data-json
* https://654439895a0b4b04436c2b82.mockapi.io/android_week7/v1/DonutFloat <br>
* https://654439895a0b4b04436c2b82.mockapi.io/android_week7/v1/DonutPink <br>
![q4](https://github.com/HacMuHai/android_week7/assets/125679401/cd46f9be-9faf-4a58-8f00-84e87377e9b8)

### Screen1 sẽ có 3 nút Dount, Pink Dounut,Floating
* Dount để hiện tất cả bánh Donut (Pink Donut và Float) 
* Pink Dounut hiện các bánh loại Pink Donut
* Floating hiện các bánh loại Floating
![b1](https://github.com/HacMuHai/android_week7/assets/125679401/46a5f82c-6f97-4b80-ae1c-508a2b19e5b4)

* Có thể tìm kiếm bánh theo tên ở thanh tìm kiếm `Search Food` <br>
![b2](https://github.com/HacMuHai/android_week7/assets/125679401/4bb5f039-8a4d-4b02-9803-ecaebe7a1d96)

### Đặt bánh
* Khi chọn loại bánh muốn đặt sẽ chuyển sang Screen3 với thông tin chi tiết của loại bánh đó và có thể chọn số lượng muốn mua
* Có thể đặt hàng `Add to cart`, sau đó sẽ quay lại Screen2<br>
![a3](https://github.com/HacMuHai/android_week7/assets/125679401/29ca08c2-6958-4a26-9c96-af18412f8bc8)

