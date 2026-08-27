import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 md:py-16 max-w-2xl mx-auto">
      {/* Ảnh đại diện */}
      <img
        src="/avatar.jpg"
        alt="Avatar"
        className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover mb-4"
      />

      {/* Tên */}
      <h1 className="text-2xl md:text-4xl font-bold text-center">Nguyễn Văn A</h1>
      <p className="text-gray-500 text-center mt-1">Web Developer</p>

      {/* Giới thiệu */}
      <p className="text-center mt-4 text-sm md:text-base leading-relaxed">
        Mình là sinh viên đang học lập trình web. Đam mê xây dựng sản phẩm
        và học công nghệ mới.
      </p>

      {/* Kỹ năng */}
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        {["JavaScript", "React", "Next.js", "Node.js", "Git"].map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Link mạng xã hội */}
      <div className="flex gap-4 mt-8">
        <a href="https://github.com/your-username" target="_blank" className="underline">
          GitHub
        </a>
        <a href="mailto:you@email.com" className="underline">
          Email
        </a>
        <a href="https://linkedin.com/in/your-name" target="_blank" className="underline">
          LinkedIn
        </a>
      </div>
    </main>
  );
}