<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN - ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</h3>

  <p align="center">
    ĐỒ ÁN QUẢN LÝ KHÁCH SẠN - NHẬP MÔN CÔNG NGHỆ PHẦN MỀM
    <br />
   <strong>Nhóm 04</strong>
    <br />
    <ol  style="text-align:left">
    <li>
    MSSV: 19120515. Họ và tên: NGUYỄN HUY HOÀNG
    </li>
    <li>
     MSSV: 20120598. Họ và tên: DƯƠNG TẤN TỒN (Nhóm trưởng)
    </li>
    <li>
     MSSV: 20120449. Họ và tên: TRẦN TRỌNG ĐẠI
    </li>
    <li>
     MSSV: 20120549. Họ và tên: LÊ HOÀNG PHÚC
    </li>
    <li>
     MSSV: 20120340. Họ và tên: TRẦN NHẬT NGUYÊN
    </li>
    </ol>
  </p>
</div>


## GIỚI THIỆU ĐỒ ÁN

- Hiện nay cuộc sống con người ngày càng hiện đại xu hướng học tập, làm việc cũng như du lịch ngày càn phát triễn dẫn đến nhu cầu cần một chỗ nghỉ ngơi tạm thời là khá cao. <br/>
- Từ nhu cầu trên ta có thể thấy được công việc cho thuê một chổ ở tạm thời đang rất phát triễn nhưng đối với vai trò là một khách hàng cho chúng ta thấy được việc thuê một nơi ở phù hợp với sở thích cá nhân cũng như xứng đáng với số tiền mình bỏ ra từ đó đứa nhóm chúng em đến nhu cầu muốn phát triễn đồ án này nhằm đáp ứng các nhu cầu ngày càng tăng.


Trình bày sơ lược về sản phẩm. Về mục đích sử dụng sẽ chia ra làm 3 nhóm người sử dụng chính:

-	Người dùng: là người dùng ứng dụng để đặt phòng khách sạn
Người dùng có thể đặt phòng thông qua ứng dụng, thanh toán trước hoặc giữ chổ thanh toán sau. Có thể tìm kiếm xem để đưa ra các quyết định nào là phù hợp với mình nhất. Có thể báo cáo lại nếu khách sạn không đáp ứng đúng các nhu cầu đã đề ra trước đó của hai bên.
-	Doanh nghiệp: là một khách sạn hoặc một chuỗi khách sạn 
Quản lý các phòng của mình, xem tình trạng các phòng, xem báo cáo doanh số người dùng. Đưa ra các khuyến mãi phù hợp để cạnh tranh với các doanh nghiệp khác. Nhằm nâng cao doanh thu cho doanh nghiệp. Xem các báo cáo trong tuần.
-	Admin: là người quản lý của app, quản trị các khách sạn
Thu tiền từ các doanh nghiệp. Xem  xét các doanh nghiệp không phù hợp hoặc xấu để cảnh báo hoặc khóa tài khoản. Xem các báo cáo về các doanh nghiệp

Đồ án môn học Nhập môn công nghệ phần mềm với đề tài Quản lý khác sạn là kết quả của quá trình cố gắng không ngừng nghỉ của cả nhóm và nhận được sự hướng dẫn tận tình của thầy cô  cùng các bạn học. Qua đây, chúng em xin gửi lời cảm ơn chân thành tới những người đã giúp đỡ chúng  em hoàn thành được đồ án này!



## Tham khảo 
UI: [Ace master ui](https://bestfreehtmlcsstemplates.com/templates/68/ace-a-free-bootstrap-3-admin-template), [Shop clothes](https://bestfreehtmlcsstemplates.com/templates/68/ace-a-free-bootstrap-3-admin-template)

Documentation: [Express](https://expressjs.com), [Handlebars](https://handlebarsjs.com/)


## Môi trường thực thi 
1. Node js
2. Databse mysql
3. Libary expressjs + handlebars
4. Visual studio code
 
## Cài đặt
1. Clone the repo
   ```sh
   git clone https://github.com/duongtanton/NM-KTPM-20_4-2022 
   ```
2. Cài đặt NPM packages
   ```sh
   npm install
   ```
3. Chạy migration
   ```sh
   npx sequelize db:migrate 
   ```
4. Chạy seeder
 
   ```sh 
   npx sequelize-cli db:seed:all  
   ```
5. Chạy project
 
   ```sh 
   npm start 
   ```
## Hướng dẫn deploy
- Sử dụng máy unbutu (Tạo trên EC2 của AWS)
- Thư viện hổ trợ pm2 npm
- Công cụ hổ trợ filezilla
- Databae mysql (Tạo trên RDS của AWS)
1. Tạo EC2, key pair, RDS(mysql), tạo security group, mở inbound, outbound ở ec2 cần thiết cho quá trình deploy và download file pem tạo ra khi tạo key pair.

    [Tạo ec2 aws](https://aws.amazon.com/premiumsupport/knowledge-center/free-tier-windows-instance) 
    
    [Tạo key pair aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html) 
    
    [Tạo RDS aws](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html) 

2. Sử dụng file pem vừa mới download connect tới ec2 vừa tạo 

    [Xem tại đây](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)
    
3. Cài đặt node, pm2 cho máy ec2
    [Xem tại đây](https://viblo.asia/p/su-dung-pm2-de-deploy-nodejs-application-6J3ZgxWqlmB)
4. Lưu ý nhớ chuyển config từ db local sang db trên aws( rds )
    [Xem tạ đây](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_RDS_Configuring.html)

### KẾT THÚC.
Chúng em xin tỏ lòng kính trọng và biết ơn sâu sắc đến thầy cô giáo là người trực tiếp hướng dẫn đồ án. Thầy cô đã cung cấp cho chúng em những tài liệu cần thiết cho đồ án của chúng em. 
Em xin chân thành cảm ơn!

<br/>


