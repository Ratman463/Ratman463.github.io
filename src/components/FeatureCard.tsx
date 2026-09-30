import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  titleKey?: string;
  descriptionKey?: string;
}

/**
 * 单个核心特性卡片。
 * - 白底浅灰卡片，18px 圆角
 * - hover 上浮 + 阴影加深（苹果风）
 * - 若提供 titleKey / descriptionKey，会在对应节点上挂 data-i18n，
 *   交由客户端 i18n 脚本在切换语言时替换 textContent。
 */
const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  titleKey,
  descriptionKey,
}) => {
  return (
    <article className="card reveal flex h-full flex-col gap-3 p-6">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0071e3]/10 text-[#0071e3]"
        aria-hidden="true"
      >
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3
        className="text-[17px] font-semibold leading-snug text-[#1d1d1f]"
        data-i18n={titleKey}
      >
        {title}
      </h3>
      <p
        className="text-[14.5px] leading-[1.75] text-[#424245]"
        data-i18n={descriptionKey}
      >
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;