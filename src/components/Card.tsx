interface CardProps {
    title: string;
    description: string;
    image?: string;
  }
  
  export default function Card({ title, description, image }: CardProps) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover"/>}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  