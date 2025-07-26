
import { Button } from "@/components/ui/button";

interface FormButtonsProps {
  onCancel?: () => void;
}

export default function FormButtons({ onCancel }: FormButtonsProps) {
  return (
    <div className="flex justify-end gap-2 pt-4">
      {onCancel && (
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      )}
      <Button type="submit">Save Custom Item</Button>
    </div>
  );
}
