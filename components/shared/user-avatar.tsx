import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
};

const UserAvatar = ({ className, src, alt }: Props) => {
  const getFirstLetter = (name: string) => name.charAt(0).toUpperCase();
  const firstLetter = getFirstLetter(alt || "");

  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>
        {firstLetter ? (
          <span className="text-lg font-medium">{firstLetter}</span>
        ) : (
          <FaUser className="absolute bottom-0 size-3/4 text-gray-500" />
        )}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
