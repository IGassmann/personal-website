import Icon from '@/components/Icon';
import getContactHref from '@/lib/getContactHref';
import getIcon from '@/lib/getIcon';

type SocialLinksProps = {
  socialLinks: Record<string, string>;
};

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div>
      <ul className="flex p-0 space-x-4">
        {Object.keys(socialLinks).map((name) => {
          const socialLink = socialLinks[name];

          if (!socialLink) throw new Error(`Social link for ${name} is not defined`);

          return (
            <li
              className="flex items-center justify-center w-10 h-10 border border-fuchsia-900 rounded-full"
              key={name}
            >
              <a
                className="text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500"
                href={getContactHref(name, socialLink)}
              >
                <Icon icon={getIcon(name)} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
