import * as LucideIcons from "lucide-react";

/**
 * Renders a lucide-react icon by its string name.
 * Falls back to Sparkles if the name isn't found so the UI never breaks.
 */
export default function Icon({ name, className = "w-5 h-5", strokeWidth = 1.75 }) {
  const LucideIcon = LucideIcons[name] || LucideIcons.Sparkles;
  return <LucideIcon className={className} strokeWidth={strokeWidth} />;
}
