import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * 单个核心特性卡片。
 * - 白底浅灰卡片，18px 圆角
 * - hover 上浮 + 阴影加深（苹果风）
 */
const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <article className="card reveal flex h-full flex-col gap-3 p-6">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0071e3]/10 text-[#0071e3]"
        aria-hidden="true"
      >
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="text-[17px] font-semibold leading-snug text-[#1d1d1f]">
        {title}
      </h3>
      <p className="text-[14.5px] leading-[1.75] text-[#424245]">{description}</p>
    </article>
  );
};

export default FeatureCard;