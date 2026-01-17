import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp';

export default function WhatsappButton({ ...props }: ButtonProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = encodeURIComponent("Hello! I'm interested in your services and would like to learn more.");
  
  if (!whatsappNumber) {
    return null;
  }

  return (
    <Button asChild {...props}>
      <Link href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="mr-2 h-5 w-5" />
        Chat on WhatsApp
      </Link>
    </Button>
  );
}
