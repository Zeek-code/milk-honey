import { MenuSection as MenuSectionType } from "@/types";
import MenuItemCard from "./MenuItemCard";

interface MenuSectionProps {
  section: MenuSectionType;
}

export default function MenuSection({ section }: MenuSectionProps) {
  return (
    <section className="mb-12" id={section.id}>
      <div className="mb-6">
        <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-2">
          {section.title}
        </h2>
        {section.description && (
          <p className="text-coffee-600 italic">{section.description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
