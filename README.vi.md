# 🚀 React Icons Customizable

Một thư viện Icon React **cao cấp (premium)**, **hiệu năng cực cao**, hỗ trợ **custom toàn diện** và tích hợp sẵn **các hiệu ứng chuyển động (animations)** mượt mà, tối ưu bằng phần cứng (hardware-accelerated).

🌐 **[English](./README.md)** | 🎨 **[XEM TRỰC TIẾP DEMO TƯƠNG TÁC TẠI ĐÂY (LIVE INTERACTIVE SANDBOX)](https://ps09754.github.io/react-icons-customizable/)**

---

Thư viện bao gồm **hơn 230+ icons** thông dụng được xây dựng trên chuẩn SVG hiện đại, hỗ trợ đầy đủ **TypeScript**, **Tree-shaking** (chỉ bundle những icon bạn thực sự sử dụng) và hoàn toàn an toàn với Server-Side Rendering (SSR) như Next.js.

---

## 📖 Mục lục
- [🚀 React Icons Customizable](#-react-icons-customizable)
  - [📖 Mục lục](#-mục-lục)
  - [📦 Hướng dẫn cài đặt (Installation)](#-hướng-dẫn-cài-đặt-installation)
  - [🛠️ Cách sử dụng (Usage)](#️-cách-sử-dụng-usage)
    - [1. Sử dụng Icon Cơ bản (Tĩnh)](#1-sử-dụng-icon-cơ-bản-tĩnh)
    - [2. Hiệu ứng Scale mượt mà khi Hover](#2-hiệu-ứng-scale-mượt-mà-khi-hover)
    - [3. Hiệu ứng Phát sáng (Neon Glow) liên tục](#3-hiệu-ứng-phát-sáng-neon-glow-liên-tục)
    - [4. Thay đổi màu sắc chuyển động khi Hover (Color Shift)](#4-thay-đổi-màu-sắc-chuyển-động-khi-hover-color-shift)
    - [5. Loading Spinner tùy chỉnh tốc độ](#5-loading-spinner-tùy-chỉnh-tốc-độ)
  - [⚙️ Props API Reference (Tài liệu tham khảo thuộc tính)](#️-props-api-reference-tài-liệu-tham-khảo-thuộc-tính)
  - [🌀 Các hiệu ứng chuyển động tích hợp (Animation Engine)](#-các-hiệu-ứng-chuyển-động-tích-hợp-animation-engine)
  - [🛠️ Hướng dẫn đóng góp & Thêm Icon mới trong 60 giây](#️-hướng-dẫn-đóng-góp--thêm-icon-mới-trong-60-giây)
  - [📄 License](#-license)

---

## 📦 Hướng dẫn cài đặt (Installation)

Do thư viện đã được cấu hình tự động biên dịch (`prepare` script), người dùng có thể tải trực tiếp phiên bản mới nhất từ kho lưu trữ GitHub của bạn bằng một câu lệnh duy nhất:

**Sử dụng NPM:**
```bash
npm install ps09754/react-icons-customizable
```

**Sử dụng Yarn:**
```bash
yarn add ps09754/react-icons-customizable
```

**Sử dụng PNPM:**
```bash
pnpm add ps09754/react-icons-customizable
```

> [!NOTE]  
> Khi cài đặt theo cách này, trình quản lý gói sẽ tự động tải mã nguồn từ GitHub của bạn, cài đặt các thư viện phát triển phụ thuộc (devDependencies) tạm thời, biên dịch thư viện sang thư mục `dist/` thông qua Rollup, và loại bỏ tài nguyên thừa. Điều này giúp gói hoạt động hoàn hảo mà không cần đẩy thư mục `dist/` lên GitHub!



## 🛠️ Cách sử dụng (Usage)

Dưới đây là một số ví dụ thực tế cách tích hợp các icon cao cấp vào ứng dụng React (hỗ trợ cả JavaScript và TypeScript):

```tsx
import React from 'react';
import { HomeIcon, LoadingSpinnerIcon, Heart, Search, Settings } from 'react-icons-customizable';

export const DashboardHeader = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '20px', background: '#0f172a', borderRadius: '12px', color: '#fff' }}>
      
      {/* 1. Sử dụng Icon tĩnh cơ bản */}
      <HomeIcon size={32} color="#6366f1" />

      {/* 2. Hiệu ứng Scale mượt mà khi Hover (Tactile Elastic Bouncy) */}
      <HomeIcon 
        size={32} 
        color="#a5b4fc" 
        animation="scale" 
        hoverEffect={true} 
        style={{ cursor: 'pointer' }}
      />

      {/* 3. Hiệu ứng Phát sáng Neon Glow chạy liên tục */}
      <Heart 
        size={32} 
        color="#f43f5e" 
        hoverColor="#fb7185" 
        animation="glow" 
        animationDuration={1.8}
      />

      {/* 4. Thay đổi màu sắc chuyển động mượt mà khi Hover */}
      <Search 
        size={32} 
        color="#f43f5e" 
        hoverColor="#10b981" 
        animation="color-shift" 
        hoverEffect={true}
        style={{ cursor: 'pointer' }}
      />

      {/* 5. Vòng tròn quay Loading xoay liên tục tùy biến tốc độ */}
      <LoadingSpinnerIcon size={32} color="#10b981" animationDuration={0.8} />

    </div>
  );
};
```

---

## ⚙️ Props API Reference (Tài liệu tham khảo thuộc tính)

Tất cả các icon trong thư viện đều kế thừa toàn bộ thuộc tính chuẩn của thẻ SVG React (`React.SVGProps<SVGSVGElement>`), giúp bạn thoải mái tùy biến với **Tailwind CSS**, CSS inline hoặc các thuộc tính ARIA.

Các thuộc tính mở rộng độc quyền:

| Tên Prop | Kiểu Dữ Liệu | Giá Trị Mặc Định | Mô Tả Chi Tiết |
| :--- | :--- | :--- | :--- |
| **`size`** | `string \| number` | `24` | Kích thước chiều rộng và chiều cao của Icon (tự động điền cho cả `width` và `height`). |
| **`color`** | `string` | `'currentColor'` | Màu sắc mặc định của Icon (stroke hoặc fill tương ứng). |
| **`hoverColor`** | `string` | *Không bắt buộc* | Màu sắc phụ được áp dụng khi người dùng hover qua (dùng cho hiệu ứng `color-shift` hoặc `glow`). |
| **`animation`** | `'scale' \| 'rotate' \| 'color-shift' \| 'glow' \| 'loading' \| 'none'` | `'none'` | Loại hiệu ứng chuyển động áp dụng cho Icon. |
| **`animationDuration`** | `number` | `0.3` | Thời gian hoàn thành 1 chu kỳ chuyển động tính bằng giây (seconds). |
| **`hoverEffect`** | `boolean` | `false` | Nếu là `true`, hiệu ứng chỉ kích hoạt khi hover chuột qua. Nếu `false`, hiệu ứng chạy vô hạn (infinite). |

---

## 🌀 Các hiệu ứng chuyển động tích hợp (Animation Engine)

Tất cả hiệu ứng đều được tăng tốc phần cứng, mượt mà ở tần số quét cao (lên tới 144Hz+) nhờ tối ưu hóa CSS Custom Properties:

* **`scale`**: 
  - *Khi Hover (`hoverEffect: true`):* Phóng to nhẹ nhàng `1.25x` đi kèm hiệu ứng đàn hồi bồng bềnh (`elastic cubic-bezier`).
  - *Chạy liên tục (`hoverEffect: false`):* Nhịp thở đều đặn (pulsing) từ `1.0x` đến `1.2x` thu hút sự chú ý.
* **`rotate`**:
  - *Khi Hover:* Xoay nhẹ góc `45deg`, thích hợp cho các nút điều hướng hoặc menu dropdown.
  - *Chạy liên tục:* Xoay tròn đều 360 độ vô tận.
* **`color-shift`**:
  - Tự động chuyển đổi màu mượt mà từ `color` sang `hoverColor` (dạng nhịp thở hoặc ngay khi hover chuột qua).
* **`glow`**:
  - Tạo ra vầng hào quang neon cực đẹp bao quanh đường vector của icon bằng bộ lọc CSS `drop-shadow`.
* **`loading`**:
  - Quay tròn 360 độ liên tục bất kể cài đặt `hoverEffect` nào, phù hợp cho trạng thái chờ phản hồi dữ liệu.

---

## 🛠️ Hướng dẫn đóng góp & Thêm Icon mới trong 60 giây

Để mở rộng thư viện và thêm bất cứ Icon SVG mới nào:

1. **Chuẩn bị file:** Tìm hoặc vẽ path SVG của bạn. Tạo file mới tại `src/components/[TênIcon].tsx`.
2. **Bọc bằng `IconBase`:** Sử dụng mẫu chuẩn sau:
   ```tsx
   import React from 'react';
   import { IconBase, IconBaseProps } from './IconBase';

   export const SearchIcon = React.forwardRef<SVGSVGElement, IconBaseProps>(
     (props, ref) => {
       return (
         <IconBase
           ref={ref}
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           {...props}
         >
           {/* Thêm các thẻ path hoặc circle của SVG vào đây */}
           <circle cx="11" cy="11" r="8" />
           <line x1="21" y1="21" x2="16.65" y2="16.65" />
         </IconBase>
       );
     }
   );

   SearchIcon.displayName = 'SearchIcon';
   ```
3. **Export Icon:** Khai báo export trong file `src/index.ts`:
   ```typescript
   export { SearchIcon } from './components/SearchIcon';
   ```
4. **Biên dịch:** Chạy `npm run build` để hoàn tất biên dịch gói bundle chuẩn hóa tree-shakeable!

---

## 📄 License

Dự án được phân phối theo giấy phép mã nguồn mở [MIT License](LICENSE).
