This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

===========================================

# ctrl + shift + p trong Inspect Web để chỉnh disable/enable các file css/js để check cách loadpage

# Pre-rendering (Using Next.js)

- Là nó render sẵn file HTML ở phía server rồi, khi user load trang thì nó sẽ trả về file HTML sau đó sẽ load them file js

# Static Site Generation (SSG)

- Là build sẵn HTML rồi trả về => build time

# Server Site Rendering (SSR)

- Theo mỗi request đợi server xử lý get data.. rồi build html trả về => run time

- Tùy thuộc vào server nhanh/chậm thì user sẽ đợi theo tốc độ của server get data

# Client Site Rendering (CSR) + (SSG)

- Tương tự ReactJS thì đợi load js về rồi mới render lên (dùng trong trường hợp: dữ liệu không cần render sẵn phía server, SEO hay private Website)

# Incremental Static Regeneration (ISR)

- Là build sẵn một số HTML cố định khi user request nằm trong số đó thì nó sẽ trả vê, còn nếu chưa có nó sẽ build thêm file tương ứng trả về cho user và add thêm vào phần cố định
